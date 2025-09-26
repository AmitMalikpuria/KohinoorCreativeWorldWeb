var repaymentRate = 4.5;

$(document).ready(function () {

    new AutoNumeric('#hl-interest-rate', { decimalPlaces: '2', digitGroupSeparator: '', currencySymbol: ' ', currencySymbolPlacement: 's' });

    var parent = $('#calculator-repayments');

    // trigger calc on type update 
    $('#loan-type', parent).on('change', function () {
        $('#hl-step-1 .btn', parent).trigger('click', true);
    });

    // get lowest interest rate
    var interestRate = $('#hl-interest-rate', parent);
    AutoNumeric.set('#hl-interest-rate', repaymentRate);
    $.ajax({
        url: '/umbraco/surface/InterestRateSurface/GetLowestWithVariableRate',
        type: 'post',
        dataType: 'json',
        success: function (data) {
            if (data.success && data.interestRate > 0) {
                repaymentRate = data.interestRate;
                AutoNumeric.set('#hl-interest-rate', repaymentRate);
            }

        },
        error: function (error) {
        }
    });

    // get users state
    var state = $('#state', parent);
    state.val('QLD');
    $.ajax({
        url: '/umbraco/surface/GeoLookupSurface/GetLocation',
        type: 'post',
        dataType: 'json',
        async: false,
        success: function (data) {
            if (data.success) {
                state.val(data.location.RegionNameShort);
            }
        },
        error: function (error) {
        }
    });

    // use lowest rate trigger
    $('input[name=interest-rate-option]', parent).on('change', function () {
        var isLowest = $('input[name="interest-rate-option"]:checked', parent).val() == 'lowest';
        if (isLowest) {
            interestRate.attr('disabled', 'disabled');
            AutoNumeric.set('#hl-interest-rate', repaymentRate);
        } else {
            interestRate.removeAttr('disabled');
            AutoNumeric.set('#hl-interest-rate', '');
        }
    });

    // expand hidden panels
    $('.expand', parent).on('click', function (e) {
        e.preventDefault();

        var t = $(this);
        var openedText = t.data('opened');
        var closedText = t.data('closed');
        var panel = t.parent().next();

        if (t.hasClass('open')) {
            panel.slideUp();
            t.text(closedText);
            t.removeClass('open');
        } else {
            panel.slideDown();
            t.text(openedText);
            t.addClass('open');
        }
    });

    // edit inputs
    $('a.edit, .overview strong', parent).on('click', function (e) {
        e.preventDefault();
        $(this).closest('.step').find('.overview').fadeOut('fast', function () {
            $(this).prev('.input').fadeIn('fast');
        });
    });

    $('#repayment-calculate').click(calculateRepayments);

    var optionsTimeout = null;
    $('.options input[type="checkbox"]', parent).change(function () {
        if (optionsTimeout) {
            clearTimeout(optionsTimeout);
        }
        optionsTimeout = setTimeout(function () {
            var model = bindModel($('#state', parent), $('#property-value', parent), $('#loan-amount', parent), $('#hl-loan-term', parent), $('#repayment-frequency', parent), $('#hl-interest-rate', parent), $('#repayment-option', parent), $('#repayment-extra', parent));
            getLowestRate(model);
        }, 800);
    });

    // read saved
    var borrowingCriteria = JSON.parse(localStorage.getItem('borrowingPowerData'));
    var repaymentCriteria = JSON.parse(localStorage.getItem('repaymentsData'));

    loadSavedRepayment(borrowingCriteria, repaymentCriteria);

    new AutoNumeric.multiple('#property-value, #loan-amount, #repayment-extra', { decimalPlaces: '0' });
});

function calculateRepayments(sender, repaymentLoad) {
 
    var senderId = sender.target.id;
    var valid = true;
    var container = $('#calculator-repayments');

    // inputs
    var state = $('#state');
    var propertyAmount = $('#property-value');
    var loanAmount = $('#loan-amount');
    var loanTerm = $('#hl-loan-term');
    var frequency = $('#repayment-frequency');
    var interestRate = $('#hl-interest-rate');
    var repaymentOption = $('#repayment-option');
    var repaymentExtra = $('#repayment-extra');

    var model = bindModel(state, propertyAmount, loanAmount, loanTerm, frequency, interestRate, repaymentOption, repaymentExtra);
    // validate inputs        
    var propertyAmountContainer = propertyAmount.closest('.form-group');
    propertyAmountContainer.find('.form-control-feedback, .help-block').remove();
    propertyAmountContainer.removeClass('has-error');
    if (propertyAmount.val() === "") {
        propertyAmountContainer.removeClass('has-success').addClass('has-error has-feedback').append('<span class="fa fa-times form-control-feedback"></span>');
        propertyAmountContainer.append('<span class="help-block label-error">Please enter the property value</span>');
        valid = false;
    }

    if (propertyAmount.val() !== "" && loanAmount.val() !== "" && model.propertyAmountVal < model.loanAmountVal) {
        propertyAmountContainer.append('<span class="help-block label-error">Borrowing amount must not exceed the property value</span>');
        valid = false;
    }

    var loanAmountContainer = loanAmount.closest('.form-group');
    loanAmountContainer.find('.form-control-feedback, .help-block').remove();
    loanAmountContainer.removeClass('has-error');
    if (loanAmount.val() == "") {
        loanAmountContainer.removeClass('has-success').addClass('has-error has-feedback').append('<span class="fa fa-times form-control-feedback"></span>');
        loanAmountContainer.append('<span class="help-block label-error">Please enter the borrowing amount</span>');
        valid = false;
    }

    var interestRateContainer = interestRate.closest('.form-group');
    interestRateContainer.find('.form-control-feedback, .help-block').remove();
    interestRateContainer.removeClass('has-error');
    if (interestRate.val().trim() === "") {
        interestRateContainer.removeClass('has-success').addClass('has-error has-feedback').append('<span class="fa fa-times form-control-feedback"></span>');
        interestRateContainer.append('<span class="help-block label-error">Please enter an interest rate</span>');
        valid = false;
    }

    if (!valid) {
        return;
    }

    /******************************************/

    // step 1 overview    
    $('#text-loan-value').text('$' + cleanFloat(model.loanAmountVal));
    $('#text-loan-term').text(model.loanTermVal + ' years');
    $('#text-rate').text(model.interestRateVal + '% p.a');

    // step 2 overview
    $('#container-repayment-principal').show();
    $('#container-repayment-interest').hide();
    $('#text-borrowing-amount span').text('$' + cleanFloat(model.loanAmountVal));
    $('.text-repayment-value').text('$' + cleanFloat(model.repaymentVal));
    $('#text-loan-amount span').text('$' + cleanFloat(model.totalPayable));
    $('#text-interest-amount span').text('$' + cleanFloat(model.totalInterestOnlyPayable));

    //$('#text-borrowing-amount span').text('$' + cleanFloat(model.loanAmountVal));
    //$('#text-repayment-value').text('$' + cleanFloat(model.repaymentVal));
    //$('#text-loan-amount span').text('$' + cleanFloat(model.totalPayable));
    //$('#text-interest-amount span').text('$' + cleanFloat(model.totalInterestOnlyPayable));

    var totalOptionRepayments = [];
    if (model.repaymentOptionVal > 0 || model.repaymentExtraVal > 0) {

        totalOptionRepayments = calculateOptionRepayments(model.repaymentOptionVal, model.interestRateVal, model.loanTermVal, model.repaymentVal, model.repaymentExtraVal, model.frequencyVal, model.loanAmountVal);
    }

    var frequencyText = 'monthly';
    switch (model.frequencyVal) {
        case 26:
            frequencyText = 'fortnightly';
            break;
        case 52:
            frequencyText = 'weekly';
            break;
    }
    $('#text-repayment-frequency').text(frequencyText);

    // switch steps
    //container.attr('data-current-step', 2);
    //step1.find('.input').fadeOut('fast', function () {
    //    $(this).next('.overview').fadeIn('fast');
    //    step1.find('.btn').text('Update');
    //});

    // write graph
    var graphInput = {
        loanAmount: model.loanAmountVal,
        frequency: model.frequencyVal,
        term: model.loanTermVal,
        repayment: model.repaymentVal,
        totalRepayments: model.totalPrincipalRepayments,
        totalOptionRepayments: totalOptionRepayments,
        frequencyCheck: (((model.loanTermVal * 12) == (model.totalPrincipalRepayments.length)) || (((model.loanTermVal * 12) + 1) == (model.totalPrincipalRepayments.length)))
    };

    doGraph(graphInput);

    // get comparison products
    var loanPurpose = 'Owner Occupied';
    if ($('#loan-type option:selected').text().indexOf('investment') > 0) { loanPurpose = 'Investment'; }
    var features = '';
    if ($('#option-loc').is(':checked')) { features = features + ',LOC'; }
    if ($('#option-package').is(':checked')) { features = features + ',ProfessionalPackage'; }

    if (!repaymentLoad && senderId === 'repayment-calculate') {
        //console.log(senderId);
        // fire goal
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'calculatorSubmit'
        });
        window.dataLayer.push({
            'event': 'HomeLoanRepayments'
        });
    }

    var userData = {
        PropertyAmount: model.propertyAmountVal,
        BorrowingPower: model.loanAmountVal,
        LoanTerm: model.loanTermVal,
        InterestRateOption: $('input[name="interest-rate-option"]:checked').val(),
        InterestRate: model.interestRateVal,
        RepaymentOption: model.repaymentOptionVal,
        RepaymentFrequency: model.frequencyVal,
        RepaymentExtra: model.repaymentExtraVal,
        Options: {
            Variable: $('#option-variable').is(':checked'),
            Loc: $('#option-loc').is(':checked'),
            Package: $('#option-package').is(':checked'),
            OneYear: $('#option-1year').is(':checked'),
            ThreeYear: $('#option-3year').is(':checked'),
            FiveYear: $('#option-5year').is(':checked')
        }
    }

    localStorage.setItem('repaymentsData', JSON.stringify(userData));



    // save lead cookie

    // Assuming you have the required data available
    var data = {
        PropertyAmount: model.propertyAmountVal,
        BorrowingAmount: model.loanAmountVal,
        LoanTerm: model.loanTermVal,
        InterestRate: model.interestRateVal + '%',
        RepaymentOption: $('#repayment-option option:selected').text(),
        RepaymentFrequency: 'Monthly', // Assuming it's a constant value as commented
        RepaymentExtra: model.repaymentExtraVal
    };

    // Convert the data object to a JSON string
    var jsonData = JSON.stringify(data);

    // Save the JSON string to a cookie
    $.cookie('repaymentsUserData', jsonData, { expires: 30, path: '/' });

    // To retrieve the data from the cookie
    //var retrievedData = $.cookie('repaymentsUserData');

    // Parse the JSON string back to an object
    //var parsedData = JSON.parse(retrievedData);
}

function bindModel(state, propertyAmount, loanAmount, loanTerm, frequency, interestRate, repaymentOption, repaymentExtra) {

    var propertyAmountVal = parseInt(propertyAmount.val().replace(/,/g, '').replace('$ ', ''));
    var loanAmountVal = parseInt(loanAmount.val().replace(/,/g, '').replace('$ ', ''));
    var interestRateVal = parseFloat(interestRate.val().trim());
    var loanTermVal = parseInt(loanTerm.val());
    var frequencyVal = parseInt(frequency.val());
    var repaymentVal = calculateRepayment(loanAmountVal, interestRateVal, loanTermVal, frequencyVal);
    var totalPrincipalRepayments = calculateTotalRepayments(interestRateVal, loanTermVal, repaymentVal, frequencyVal);
    var totalInterestRepayments = calculateTotalInterestRepayments(interestRateVal, loanTermVal, repaymentVal, frequencyVal);
    var totalPayable = totalInterestRepayments[0];

    var model = {
        stateVal: state.val(),
        propertyAmountVal: propertyAmountVal,
        loanAmountVal: loanAmountVal,
        interestRateVal: interestRateVal,
        loanTermVal: loanTermVal,
        frequencyVal: frequencyVal,
        repaymentOptionVal: parseInt(repaymentOption.val()),
        repaymentExtraVal: repaymentExtra.val() != '' ? parseInt(repaymentExtra.val().replace(/,/g, '').replace('$ ', '')) : 0,
        repaymentVal: repaymentVal,
        totalPrincipalRepayments: totalPrincipalRepayments,
        totalInterestRepayments: totalInterestRepayments,
        totalPayable: totalPayable,
        totalInterestOnlyPayable: totalPayable - loanAmountVal
    };

    return model;
}

function cleanFloat(input) {
    if (input < 0) { return 0; }
    return parseInt(input).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateRepayment(loanAmount, interestRate, loanTerm, repaymentsPerYear) {
    var i = interestRate / repaymentsPerYear / 100;
    var N = loanTerm * repaymentsPerYear;
    var result = (i * loanAmount) / (1 - Math.pow(1 + i, -1 * N));
    return (result);
}

function calculateTotalRepayments(interestRate, loanTerm, repayment, repaymentsPerYear) {
    var repayments = [];
    for (var i = 0; i <= loanTerm * 12; i++) {
        var termRepayment = calculatePrincipal(i / 12, interestRate, loanTerm, repayment, repaymentsPerYear)
        repayments.push(termRepayment);
    }

    return repayments;
}

function calculatePrincipal(period, interestRate, loanTerm, repayment, repaymentsPerYear) {
    period = (repaymentsPerYear * period);
    var i = (interestRate / repaymentsPerYear / 100);
    var N = loanTerm * repaymentsPerYear;
    var Cn = repayment * Math.pow(1 + i, (-1 * (1 + N - period)));
    var Inn = repayment - Cn;
    var Rn = (Inn / i) - Cn;
    return Math.round(Rn);
}

function calculateTotalInterestRepayments(interestRate, loanTerm, repayment, repaymentsPerYear) {
    var repayments = [];
    for (var i = 0; i <= loanTerm * 12; i++) {
        var termRepayment = calculateInterest(repayment, repaymentsPerYear, loanTerm, i / 12);
        repayments.push(termRepayment);
    }

    return repayments;
}

function calculateOptionRepayments(interestOnlyYears, interestRate, loanTerm, repayment, repaymentExtra, repaymentsPerYear, loanAmount) {

    var repayments = [];
    var interestOnlyRepayments = [];
    var finalRepayment = [];
    var interestOnlyRepayment = 0;
    var newRepayment = repayment;
    var newLoanTerm = loanTerm;

    // interest only period
    if (interestOnlyYears > 0) {

        interestOnlyRepayment = calculateInterestRepayment(loanAmount, interestRate, repaymentsPerYear);

        if (repaymentExtra > 0) {
            interestOnlyRepayment = interestOnlyRepayment + repaymentExtra;
        }

        var interestOnlyTermRepayment = calculatePrincipal(0, interestRate, loanTerm, repayment, repaymentsPerYear);
        for (var i = 0; i <= interestOnlyYears * 12; i++) {
            interestOnlyRepayments.push(interestOnlyTermRepayment);
        }

        newLoanTerm = loanTerm - interestOnlyYears;
        newRepayment = calculateRepayment(loanAmount, interestRate, newLoanTerm, repaymentsPerYear);
    }

    // add any extra repayment
    if (repaymentExtra > 0) {
        newRepayment = newRepayment + repaymentExtra;
        newLoanTerm = calculateTerm(newRepayment, loanAmount, interestRate, repaymentsPerYear);
    }

    // remaining principal        
    var principalRepayments = calculateTotalRepayments(interestRate, newLoanTerm, newRepayment, repaymentsPerYear)

    // concat arrays
    repayments = interestOnlyRepayments.concat(principalRepayments);

    // update new totals
    var totalPayable = (newRepayment * newLoanTerm * repaymentsPerYear) + (interestOnlyRepayment * (repaymentsPerYear * interestOnlyYears));
    var totalInterestOnlyPayable = totalPayable - loanAmount;

    if (interestOnlyYears > 0) {
        $('#container-repayment-principal').hide();
        $('#container-repayment-interest').show();
    }

    $('.text-interest-repayment-value').text('$' + cleanFloat(interestOnlyRepayment));
    $('.text-repayment-value').text('$' + cleanFloat(newRepayment));
    $('#text-loan-amount span').text('$' + cleanFloat(totalPayable));
    $('#text-interest-amount span').text('$' + cleanFloat(totalInterestOnlyPayable));

    return repayments;
}

function calculateInterestRepayment(loanAmount, interestRate, repaymentsPerYear) {
    return ((loanAmount * (interestRate / 100)) / repaymentsPerYear);
}

//function calculateInterestRepayment(loanAmount, interestRate, repaymentsPerYear) {
//    return ((loanAmount * (interestRate / 100)) / repaymentsPerYear);
//}

function calculateInterest(repayment, repaymentsPerYear, loanTerm, currentYear) {
    return (repayment * repaymentsPerYear * (loanTerm - currentYear));
}

function calculateTerm(repaymentAmount, loanAmount, interestRate, repaymentsPerYear) {
    
    var m = repaymentAmount;
    var i = interestRate / repaymentsPerYear / 100;
    var B = loanAmount;

    return (-1 * (Math.log(1 - (B / m) * i)) / Math.log(1 + i)) / repaymentsPerYear;
}

function getLowestRate(input) {

    var interestRate = input.interestRateVal;

    var loanPurpose = 'Owner Occupied';
    if ($('#loan-type option:selected').text().indexOf('investment') > 0) { loanPurpose = 'Investment'; }
    var features = '';
    if ($('#option-loc').is(':checked')) { features = features + ',LOC'; }
    if ($('#option-package').is(':checked')) { features = features + ',ProfessionalPackage'; }

    var comparisonInput = {
        State: input.stateVal,
        PropertyAmount: input.propertyAmountVal,
        LoanAmount: input.loanAmountVal,
        LoanTerm: input.loanTermVal,
        LoanPurpose: loanPurpose,
        Features: features.substring(1),
        Variable: $('#option-variable').is(':checked'),
        OneYear: $('#option-1year').is(':checked'),
        TwoYear: false,
        ThreeYear: $('#option-3year').is(':checked'),
        FourYear: false,
        FiveYear: $('#option-5year').is(':checked')
    };

    $.get(apiUrl + '/api/PA/GetFilteredProducts', comparisonInput)
        .done(function (data) {
            if (data.length > 0) {
                data.sort(function (a, b) { return a.InterestRate.localeCompare(b.InterestRate); });
                if (data[0].InterestRate != "") {
                    interestRate = parseFloat(data[0].InterestRate.replace("%", ""));
                    AutoNumeric.set('#hl-interest-rate', repaymentRate);
                    $('#text-rate').text(parseFloat(interestRate).toFixed(2) + '% p.a');
                }
                calculateRepayments(true);
            }
        })
        .fail(function () {
            calculateRepayments(true);
        });

    var optionsChecked = comparisonInput.Variable || comparisonInput.OneYear || comparisonInput.ThreeYear || comparisonInput.FiveYear || comparisonInput.features != '';
    if (optionsChecked) {
        $('.options .updated').fadeIn();
    } else {
        $('.options .updated').fadeOut();
    }
}

function doComparison(input) {

    var container = $('#product-comparison #results');
    var results = $('table tbody', container);

    var loader = $('.form-loader', container);
    loader.addClass('loading');

    $.get(apiUrl + '/api/PA/GetFilteredProducts', input)
        .done(function (data) {

            // clear results & remove loading
            results.html('');
            loader.removeClass('loading');

            data.sort(function (a, b) { return a.InterestRate.localeCompare(b.InterestRate); });

            $.each(data, function (i, item) {
                var tr = $('<tr />');
                tr.append('<td class="logo first"><img src="/Content/img/logos/' + item.Supplier + '.png" style="max-width:150px;"></td>');
                tr.append('<td class="title">' + item.ProductName + '</td>');
                tr.append('<td class="rate">' + item.InterestRate + '<span class="pa">p.a.</span> <span class="extra">' + (item.InterestYear ? item.InterestYear : "") + ' ' + item.InterestType + '</span></td>')
                tr.append('<td class="comparison">' + item.ComparisonRate + '<span class="pa">p.a.</span></td>');
                tr.append('<td class="repayment">$' + cleanFloat(item.MonthlyRepayment) + '/mo.</td>');
                results.append(tr);
                return (i < 4); // break loop
            });

            $('#text-state').text(input.state);
        })
        .fail(function () {
            container.parent().hide();
        });
}

function doGraph(input) {

    var series = [];

    if (input.totalOptionRepayments.length > 0) {
        series.push({
            name: 'Options',
            type: 'area',
            color: '#006875',
            data: input.totalOptionRepayments
        });
    }

    if (input.totalRepayments.length > 0) {
        if (input.totalOptionRepayments.length > 0) {
            series.push({
                name: 'Principal',
                type: 'line',
                dashStyle: 'dash',
                color: '#006875',
                data: input.totalRepayments
            });
        }
        else {
            series.push({
                name: 'Principal',
                type: 'area',
                color: '#006875',
                data: input.totalRepayments
            });
        }
    }

    var showXLabel = false;
    var maxRepayment = input.totalOptionRepayments.length > 0 ? input.totalOptionRepayments[0] : input.totalRepayments[0];

    $('#graph').highcharts({
        credits: {
            enabled: false
        },
        chart: {
            type: 'area',
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '12px',
                color: '#726E75'
            }
        },
        exporting: { enabled: false },
        title: { text: '' },
        legend: { enabled: false },
        xAxis: {
            type: 'datetime',
            min: 0,
            max: this.dataMax, // 360
            gridLineWidth: 0,
            allowDecimals: false,
            title: { text: '' },
            tickPositioner: function () {
                var positions = [],
                    tick = Math.floor(this.dataMin),
                    increment = 6;

                if (input.frequencyCheck) {
                    if (this.dataMax > (12 * 3))
                        increment = 12;

                    if (this.dataMax > (12 * 10))
                        increment = 60;

                    if (this.dataMax > (12 * 50))
                        increment = 120;

                    if (this.dataMax > (12 * 100))
                        increment = 240;
                }
                else {
                    //either fortnightly or weekly preferred repayment per month
                    if (this.dataMax > (12 * 3 * input.frequency))
                        increment = 12;

                    if (this.dataMax > (12 * 10 * input.frequency))
                        increment = 60;

                    if (this.dataMax > (12 * 50 * input.frequency))
                        increment = 120;

                    if (this.dataMax > (12 * 100 * input.frequency))
                        increment = 240;

                    increment = increment * input.frequency;
                }

                for (tick; tick - increment <= this.dataMax; tick += increment) {
                    positions.push(tick);
                }

                return positions;

            },
            labels: {
                style: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#726E75'
                },
                formatter: function () {
                    if (showXLabel) {
                        showXLabel = false;
                        var f = parseFloat(this.value / ((input.frequencyCheck) ? 12 : input.frequency)).toFixed(1);

                        if (f % 1 === 0)
                            return parseInt(f);

                        return f;
                    }
                    else
                        showXLabel = true;
                }
            }
        },
        yAxis: {
            min: 0,
            max: maxRepayment,
            gridLineWidth: 1,
            allowDecimals: false,
            labels: {
                style: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '12px',
                    color: '#726E75'
                },
                formatter: function () {
                    //if (this.value > input.totalRepayments[0]) {
                    //    return '$' + cleanFloat(this.value);
                    //}
                }
            },
            title: { text: '' }
        },
        tooltip: {
            headerFormat: ''
            , formatter: function () {
                if (!input.frequencyCheck) {
                    var f = ((this.x / input.frequency) * 12).toFixed(0);
                    return 'After ' + f + ' months<br/><b>$' + this.y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' principal remaining</b>';
                } else {
                    return 'After ' + this.x + ' months<br/><b>$' + this.y.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' principal remaining</b>';
                }
            }
        },
        plotOptions: {
            area: {
                pointStart: 0,
                fillOpacity: 0.25,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    lineWidth: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                point: {
                    events: {
                        click: function () {
                            console.log(this.x);
                        },
                        update: function () {
                            console.log(this.x);
                        }
                    }
                }
            }
        },
        series: series
    });
}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function loadSavedRepayment(borrowingData, repaymentData) {

    var parent = $('#calculator-repayments');

    // summary
    if (borrowingData != null) {
        $('#intro-options', parent).hide();
        $('#intro-results', parent).fadeIn('fast', function () {
            $('#result-income', parent).text('$' + cleanFloat(parseFloat(borrowingData.Income) + parseFloat(borrowingData.Income2)));
            $('#result-expenses', parent).text('$' + cleanFloat(borrowingData.ExpensesMonthly) + ' p/m');
            $('#result-borrowing', parent).text('$' + cleanFloat(borrowingData.BorrowingPower));
        });
    }

    // inputs
    if (repaymentData != null) {
        $('#property-value', parent).val(cleanFloat(repaymentData.PropertyAmount));

        $('#loan-amount', parent).val(cleanFloat(repaymentData.BorrowingPower));
        $('#hl-loan-term', parent).val(repaymentData.LoanTerm);
        if (repaymentData.InterestRateOption == 'custom') {
            $('input[name="interest-rate-option"][value="' + repaymentData.InterestRateOption + '"]', parent).prop('checked', true);
            $('#hl-interest-rate', parent).removeAttr('disabled');
            setTimeout(function () {
                AutoNumeric.set('#hl-interest-rate', repaymentData.InterestRate);
            }, 700);
        }
        $('#repayment-option', parent).val(repaymentData.RepaymentOption);
        $('#repayment-frequency', parent).val(repaymentData.RepaymentFrequency);
        if (repaymentData.RepaymentExtra > 0) {
            $('#repayment-extra', parent).val(repaymentData.RepaymentExtra);
            $('#repayment-extra', parent).parent().prev('p').find('a.expand').trigger('click', true);
        }

        var triggerLowestRate = false;

        //if (repaymentData.Options != null) {
        //    if (repaymentData.Options.Variable) { $('#option-variable', parent).prop('checked', true); triggerLowestRate = true; }
        //    if (repaymentData.Options.Loc) { $('#option-loc', parent).prop('checked', true); triggerLowestRate = true; }
        //    if (repaymentData.Options.Package) { $('#option-package', parent).prop('checked', true); triggerLowestRate = true; }
        //    if (repaymentData.Options.OneYear) { $('#option-1year', parent).prop('checked', true); triggerLowestRate = true; }
        //    if (repaymentData.Options.ThreeYear) { $('#option-3year', parent).prop('checked', true); triggerLowestRate = true; }
        //    if (repaymentData.Options.FiveYear) { $('#option-5year', parent).prop('checked', true); triggerLowestRate = true; }
        //}

        if (triggerLowestRate) {
            var model = bindModel($('#state', parent), $('#property-value', parent), $('#loan-amount', parent), $('#hl-loan-term', parent), $('#repayment-frequency', parent), $('#hl-interest-rate', parent), $('#repayment-option', parent), $('#repayment-extra', parent));
            getLowestRate(model);
            return;
        }

    } else if (borrowingData != null) {
        $('#loan-amount', parent).val(cleanFloat(borrowingData.BorrowingPower.replace(/,/g, '')));
    }
    setTimeout(function () {
        $('#repayment-calculate', parent).trigger('click', true);
    }, 1000);
}