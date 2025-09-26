var userData = new Object();
var refData;

// income shading
var rentalIncomeShading = 0.8;
var otherIncomeShading = 0.7;

// credit limit
var creditLimitFactor = 0.03;

// defaults
var repaymentRate = 4.5;
var loanTerm = 30;

$(document).ready(function () {
  getRefData();
  var parent = $("#calculator-loan");
  var repaymentRate = refData.repRate.Value;
  $("#interestrate").text(repaymentRate + "%");
  $("#years").text(loanTerm);

  $("#calculator-loan-form__income", parent).val();

  // interest rate
  $("#text-interest-rate", parent).text(repaymentRate);

  $("#applicant2", parent).hide();

  // loan term
  $("#text-term", parent).text(loanTerm);

  // expand hidden panels
  $(".expand", parent).on("click", function (e) {
    e.preventDefault();
    var openedText = $(this).data("opened");
    var closedText = $(this).data("closed");
    var panel = $(this).parent().next();
    if ($(this).hasClass("open")) {
      panel.slideUp();
      $(this).text(closedText);
      $(this).removeClass("open");
    } else {
      panel.slideDown();
      $(this).text(openedText);
      $(this).addClass("open");
    }
  });

  $("input:radio[name='for']").change(function () {
    if (this.value == "couple") {
      $("#applicant2").show();
      $("#work-status-txt").text("are either applicants self employed?");
    } else {
      $("#applicant2").hide();
      $("#work-status-txt").text("are you self employed?");
    }
  });

  // edit inputs
  $("a.edit, .overview strong", parent).on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".step")
      .find(".overview")
      .fadeOut("fast", function () {
        $(this).prev(".input").fadeIn("fast");
      });
    if ($(this).closest(".step").data("step") == 2) {
      showStep(2);
    }
  });

  // increase-decrease
  $(".form-input-number span", parent).on("click", function (e) {
    e.preventDefault();
    var current = $("#household-dependents", parent);
    var val = parseInt(current.val());
    if ($(this).hasClass("increase")) {
      current.val(val + 1);
    } else if (val > 0) {
      current.val(val - 1);
    }
  });

  // estimate expenses
  $("#expenses-estimate", parent).on("change", function () {
    if ($(this).is(":checked")) {
      $("#expenses-living", parent).val(cleanFloat(calculateLivingExpenses()));
    }
  });
  $("#expenses-living", parent).on("keyup", function () {
    $("#expenses-estimate", parent).prop("checked", false);
  });

  // calc trigger
  $("#borrowing-calculate-btn").click(calculateBorrowing2);

  //if on desktop scroll back to top on submit
  $("#borrowing-calculate-btn").click(function () {
    if ($(window).width() >= 700) {
      $("html, body").animate(
        {
          scrollTop: $("#calculator-loan").offset().top - 160,
        },
        500
      );
    }
  });
  // add commas to numeric fields on text change
  var $fields = $(this).find("#calculator-loan-form input");
  $fields.each(function (i, field) {
    var $field = $(field);
    if ($field.data("type") == "price") {
      $field.on("input", function () {
        var val = $(this).val();
        val = addCommas(val);
        $(this).val(val);
      });
    }
  });



  //read saved data from local storage
  var criteria = JSON.parse(localStorage.getItem('borrowingPowerData'));

  if (criteria != null) {
    loadSavedBorrowing(criteria);
  } else {
    $.ajax({
      url: "/umbraco/surface/InterestRateSurface/GetLowestWithVariableRate",
      type: "post",
      dataType: "json",
      success: function (data) {
        if (data.success && data.interestRate > 0) {
          repaymentRate = data.interestRate;
          $("#text-interest-rate", parent).text(repaymentRate);
        }
      },
      error: function (error) { },
    });
  }
  initBpAutoNumeric();
});


function handleFormGroupHiddenInputs($elem) {
  $elem.find(".form-group .-toggle").click(function (e) {

    e.preventDefault();

    var $formGroup = $(this).parents(".form-group");

    if ($formGroup.hasClass("-active")) {
      // Input is visible. Unset value and hide it.

      // Remove active class from form group
      $formGroup.removeClass("-active");

      // Unset value
      var $slider = $formGroup.find(".slider");
      if ($slider.length) {
        $slider.slider("option", "value", 0);
      }

      $formGroup.find("input").val(0).trigger("change");
    } else {
      // Input is hidden. Reveal it.

      // Add active class to form group
      $formGroup.addClass("-active");
    }
  });
}
function calculateBorrowing2(sender, borrowingLoad) {
  var senderId = sender.target.id;
  var container = $("#calculator-loan");
  var result;

  var data = buildJson(container);
  console.log(JSON.stringify(data));

  $.ajax({
    url: "/umbraco/surface/QuickQuoteSurface/AssessmentServiceability",
    type: "post",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (data) {
      //console.log('SaveCriteria', data.success);
      result = JSON.parse(data);
    },
    error: function (jqXhr, textStatus, errorThrown) {
      alert(jqXhr.status);
      console.log(textStatus);
      console.log(errorThrown);
    },
  });

  var repayment = result.repayment;
  var monthlyNetIncome = result.netIncome;
  var sumExpenses = result.totalExpenses;
  var borrowingPower = result.borrowingPower;
  var remaining = result.surplusIncome - repayment;

  window.userData.ExpensesMonthly = sumExpenses;
  window.userData.BorrowingPower = borrowingPower;
  window.userData.Repayment = repayment;
  window.userData.MonthlyNetIncome = monthlyNetIncome;

  var baseIncome =
    parseInt(
      $("#calculator-loan-form__income", container).val().replace(/,/g, "")
    ) || 0;
  $("#income-total-text", container).text("$" + cleanFloat(baseIncome));
  $("#income-frequency-text", container).text(
    $("#income-frequency-base", container).val()
  );
  $("#income-type-text", container).text("before tax");
  $("#expense-total-text", container).text("$" + cleanFloat(sumExpenses));
  $("#expense-frequency-text", container).text("monthly");

  var repaymentPercent = Math.floor((repayment / monthlyNetIncome) * 100);
  var expensesPercent = Math.floor((sumExpenses / monthlyNetIncome) * 100);
  var remainingPercent = 100 - (repaymentPercent + expensesPercent);

  // key indicator
  var indicator = $(".calculator-loan__results-bar", container);

  var sliderBar = $(".c-loan-slider__bar", container);
  indicator.find("span").width(0);

  var indicatorFinalRepayment = $(".-repayments", container);
  indicatorFinalRepayment
    .find('span[name ="rep"]')
    .html("$" + addCommas(repayment));

  sliderBar.find(".-repayments").width(repaymentPercent + "%");

  var indicatorFinalExpenses = $(".-expenses", container);
  indicatorFinalExpenses.find("span").html("$" + addCommas(sumExpenses));
  sliderBar.find(".-expenses").width(expensesPercent + "%");

  var indicatorFinalRemaining = $(".-remaining", container);
  indicatorFinalRemaining.find("span").html("$" + addCommas(remaining));
  sliderBar.find(".-remaining").width(remainingPercent + "%");

  // final borrow power
  $("#calculator-loan-results__borrow", container).html(
    "$" + addCommas(borrowingPower)
  );

  if (!borrowingLoad && senderId == "borrowing-calculate") {
    // send data to GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "calculatorSubmit",
      calculatorBorrowingPower: cleanFloat(borrowingPower),
    });
    window.dataLayer.push({
      event: "BorrowingPower",
    });
  }

  // Save to local storage
  const userData = {
    Status: window.userData.Status,
    Dependants: window.userData.Dependants,
    Income: window.userData.Income,
    IncomeType: "",
    IncomeFrequency: 2,
    IncomeRental: window.userData.IncomeRental,
    IncomeRentalFrequency: window.userData.IncomeRentalFrequency,
    IncomeOther: window.userData.IncomeOther,
    IncomeOtherFrequency: 2,
    ExpensesEstimate: window.userData.ExpensesMonthly,
    ExpensesMonthly: window.userData.ExpensesMonthly,
    ExpensesOtherMonthly: window.userData.ExpensesOtherMonthly,
    ExpensesTotalCreditLimits: window.userData.ExpensesTotalCreditLimits,
    Income2: window.userData.Income2,
    IncomeType2: "",
    IncomeFrequency2: 2,
    IncomeRental2: window.userData.IncomeRental2,
    IncomeRentalFrequency2: window.userData.IncomeRentalFrequency2,
    IncomeOther2: window.userData.IncomeOther2,
    IncomeOtherFrequency2: 2,
    ExpensesEstimate2: window.userData.ExpensesMonthly2,
    ExpensesMonthly2: window.userData.ExpensesMonthly2,
    ExpensesOtherMonthly2: window.userData.ExpensesOtherMonthly2,
    ExpensesTotalCreditLimits2: window.userData.ExpensesTotalCreditLimits2,
    PropertyAmount: "",
    BorrowingPower: window.userData.BorrowingPower,
    InterestRate: window.userData.InterestRate,
    LoanTerm: loanTerm,
    WorkStatus: window.userData.WorkStatus,
  };

  localStorage.setItem('borrowingPowerData', JSON.stringify(userData));


  // save lead cookie
  var data = {
    InterestRate: window.userData.InterestRate + "%",
    LoanTerm: loanTerm,
    BorrowingPowerLow: borrowingPower,
    BorrowingPowerHigh: borrowingPower,
  };

  // Convert the data object to a JSON string
  var jsonData = JSON.stringify(data);

  // Save the JSON string to a cookie
  $.cookie('borrowPowerSummaryData', jsonData, { expires: 30, path: '/' });

  //// To retrieve the data from the cookie
  //var retrievedData = $.cookie('userData');

  //// Parse the JSON string back to an object
  //var parsedData = JSON.parse(retrievedData);




  //$.ajax({
  //  url: "/umbraco/surface/BorrowingCalculatorSurface/SaveLead",
  //  type: "post",
  //  data: {
  //    InterestRate: window.userData.InterestRate + "%",
  //    LoanTerm: loanTerm,
  //    BorrowingPowerLow: borrowingPower,
  //    BorrowingPowerHigh: borrowingPower,
  //  },
  //  dataType: "json",
  //  async: false,
  //  success: function (data) {
  //    console.log("SaveLead", data.success);
  //  },
  //  error: function (error) {},
  //});
}

function getRefData() {
  $.ajax({
    url: "/umbraco/surface/QuickQuoteSurface/AssessmentServiceabilityConfig",
    type: "get",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (data) {
      refData = data;
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log(jqXhr.status);
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}

function buildJson(container) {
  var assRate = refData.assRate.Value;
  var repRate = refData.repRate.Value;
  var applicantCount = 1;
  var dependents = $("#calculator-loan-form__dependants", container).val();
  var status = $("input:radio[name='for']:checked", container).val();
  if (status == "couple") {
    applicantCount = 2;
  }

  var payg = $("input:radio[name='work-status']:checked", container).val();
  var baseIncome =
    parseInt(
      $("#calculator-loan-form__income", container).val().replace(/,/g, "")
    ) || 0;
  var incomeRental =
    parseInt(
      $("#calculator-loan-form__rental-income", container)
        .val()
        .replace(/,/g, "")
    ) || 0;
  var incomeFrequencyRental = 2;
  var incomeOther =
    parseInt(
      $("#calculator-loan-form_other-income", container).val().replace(/,/g, "")
    ) || 0;
  var incomeFrequencyOther = 2;
  var creditLimits =
    parseInt(
      $("#calculator-loan-form__credit-card-limits", container)
        .val()
        .replace(/,/g, "")
    ) || 0;
  var otherExpenses =
    parseInt(
      $("#calculator-loan-form_repayments", container).val().replace(/,/g, "")
    ) || 0;

  // 2ns applicant
  //var payg2 = $("input:radio[name='work-status2']:checked", container).val();
  var baseIncome2 =
    parseInt(
      $("#calculator-loan-form__income2", container).val().replace(/,/g, "")
    ) || 0;
  var incomeRental2 =
    parseInt(
      $("#calculator-loan-form__rental-income2", container)
        .val()
        .replace(/,/g, "")
    ) || 0;
  var incomeFrequencyRental2 = 2;
  var incomeOther2 =
    parseInt(
      $("#calculator-loan-form_other-income2", container)
        .val()
        .replace(/,/g, "")
    ) || 0;
  var incomeFrequencyOther2 = 2;
  var creditLimits2 =
    parseInt(
      $("#calculator-loan-form__credit-card-limits2", container)
        .val()
        .replace(/,/g, "")
    ) || 0;
  var otherExpenses2 =
    parseInt(
      $("#calculator-loan-form_repayments2", container).val().replace(/,/g, "")
    ) || 0;

  userData.Status = status;
  userData.Dependants = dependents;
  userData.Income = baseIncome;
  userData.IncomeRental = incomeRental;
  userData.IncomeRentalFrequency = 2;
  userData.IncomeOther = incomeOther;
  userData.IncomeFrequencyOther = 2;
  userData.ExpensesOtherMonthly = otherExpenses;
  userData.ExpensesTotalCreditLimits = creditLimits;

  userData.Income2 = baseIncome2;
  userData.IncomeRental2 = incomeRental2;
  userData.IncomeRentalFrequency2 = 2;
  userData.IncomeOther2 = incomeOther2;
  userData.IncomeFrequencyOther2 = 2;
  userData.ExpensesOtherMonthly2 = otherExpenses2;
  userData.ExpensesTotalCreditLimits2 = creditLimits2;

  userData.InterestRate = assRate;
  userData.LoanTerm = 30;
  userData.WorkStatus = payg;

  var dataStrApplicant2 = "";
  var dataStrStart = '{ "applicants": [';
  var dataStrApplicant1 =
    "{ " +
    ' "creditCardLimit": ' +
    creditLimits +
    ',"grossIncome": ' +
    baseIncome +
    ',"grossIncomeFrequencyId": 2' +
    ',"isPAYG": ' +
    payg +
    ',"loan": ' +
    otherExpenses +
    ',"loanFrequencyId": ' +
    incomeFrequencyOther +
    ',"otherIncome": ' +
    incomeOther +
    ',"otherIncomeFrequencyId": ' +
    incomeFrequencyOther +
    ',"rentalIncome": ' +
    incomeRental +
    ',"rentalIncomeFrequencyId": ' +
    incomeFrequencyRental +
    "}";

  if (applicantCount == 2) {
    dataStrApplicant2 =
      ",{ " +
      ' "creditCardLimit": ' +
      creditLimits2 +
      ',"grossIncome": ' +
      baseIncome2 +
      ',"grossIncomeFrequencyId": 2' +
      ',"isPAYG": ' +
      payg +
      ',"loan": ' +
      otherExpenses2 +
      ',"loanFrequencyId": ' +
      incomeFrequencyOther2 +
      ',"otherIncome": ' +
      incomeOther2 +
      ',"otherIncomeFrequencyId": ' +
      incomeFrequencyOther2 +
      ',"rentalIncome": ' +
      incomeRental2 +
      ',"rentalIncomeFrequencyId": ' +
      incomeFrequencyRental2 +
      "}";
  }

  var dataStrLast =
    '], "repaymentFrequencyId": 1,"repaymentRate": ' +
    repRate +
    ',"assessmentRate": ' +
    assRate +
    ',"term": 360,"dependents": ' +
    dependents +
    "}";

  var dataJson =
    dataStrStart + dataStrApplicant1 + dataStrApplicant2 + dataStrLast;

  return JSON.parse(dataJson);
}

function initBpAutoNumeric() {
  new AutoNumeric.multiple(
    "#income-base, #income-rental, #income-other, #expenses-living, #expenses-other-repayments, #expenses-total-credit-limits",
    { decimalPlaces: "0" }
  );
  // new AutoNumeric('#bp-interest-rate', { decimalPlaces: '2', digitGroupSeparator: '', currencySymbol: ' %', currencySymbolPlacement: 's' });
}

function monthlyRate(rate) {
  return rate / 12 / 100;
}

function PV(rate, nper, pmt) {
  return (pmt / rate) * (1 - Math.pow(1 + rate, -nper));
}

function PMT(rate, nper, pv) {
  return (
    Math.floor(((pv * rate) / (1 - Math.pow(1 + rate, -1 * nper))) * 100) / 100
  );
}

function cleanFloat(input) {
  if (input < 0) {
    return 0;
  }
  return parseInt(input)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showContent(typeId) {
  var step = $("#borrowing-power-calc").attr("data-current-step");
  if (step == 3) {
    $(".intent-blocks").fadeOut(500, function () {
      $("#" + typeId).fadeIn();
    });
  }
}

function loadSavedBorrowing(data) {

  var parent = $("#calculator-loan");

  // step 1
  if (data.Status == "single") {
    $('input:radio[name="for"]:nth(0)', parent).prop("checked", true);
    $("#applicant2").hide();
  } else {
    $('input:radio[name="for"]:nth(1)', parent).prop("checked", true);
    $("#applicant2").show();
  }

  $("input[name=household-status]", parent).trigger("change");

  if (data.Dependants > 0) {
    $("#calculator-loan-form__dependants", parent).removeAttr("disabled");
    $("#calculator-loan-form__dependants", parent).val(data.Dependants);
    $("#calculator-loan-form__dependants", parent).attr("disabled", "disabled");
  }

  var income = addCommas(data.Income);
  $("#calculator-loan-form__income", parent).val(income);

  if (data.IncomeRental != "") {
    var rental = addCommas(data.IncomeRental);
    $("#calculator-loan-form__rental-income", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form__rental-income", parent).val(rental);
  }

  if (data.IncomeOther != "") {
    var other = addCommas(data.IncomeOther);
    $("#calculator-loan-form_other-income", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form_other-income", parent).val(other);
  }

  if (data.ExpensesEstimate)
    $("#calculator-loan-form__expenses", parent).prop("checked", true);
  else $("#calculator-loan-form__expenses", parent).prop("checked", false);

  var expensesMonthly = addCommas(data.ExpensesMonthly);
  $("#expenses-living", parent).val(expensesMonthly);

  if (data.ExpensesOtherMonthly != "") {
    var expensesOtherMonthly = addCommas(data.ExpensesOtherMonthly);
    $("#expenses-living", parent).val(expensesOtherMonthly);
    $("#calculator-loan-form_repayments", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form_repayments", parent).val(expensesOtherMonthly);
  }

  var expensesTotalCreditLimits = addCommas(data.ExpensesTotalCreditLimits);
  $("#calculator-loan-form__credit-card-limits", parent).val(
    expensesTotalCreditLimits
  );

  // 2nd applicant
  var income2 = addCommas(data.Income2);
  $("#calculator-loan-form__income2", parent).val(income2);

  if (data.IncomeRental2 != "") {
    var incomeRental2 = addCommas(data.IncomeRental2);
    $("#calculator-loan-form__rental-income2", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form__rental-income2", parent).val(incomeRental2);
  }

  if (data.IncomeOther2 != "") {
    var incomeOther2 = addCommas(data.IncomeOther2);
    $("#calculator-loan-form_other-income2", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form_other-income2", parent).val(incomeOther2);
  }

  if (data.ExpensesEstimate2)
    $("#calculator-loan-form__expenses2", parent).prop("checked", true);
  else $("#calculator-loan-form__expenses2", parent).prop("checked", false);

  var expensesMonthly2 = addCommas(data.ExpensesMonthly2);
  $("#expenses-living2", parent).val(expensesMonthly2);

  if (data.ExpensesOtherMonthly2 != "") {
    var expensesOtherMonthly2 = addCommas(data.ExpensesOtherMonthly2);
    $("#calculator-loan-form_repayments2", parent)
      .parent()
      .prev("p")
      .find("a.expand")
      .trigger("click");
    $("#calculator-loan-form_repayments2", parent).val(expensesOtherMonthly2);
  }

  var expensesTotalCreditLimits2 = addCommas(data.ExpensesTotalCreditLimits2);
  $("#calculator-loan-form__credit-card-limits2", parent).val(
    expensesTotalCreditLimits2
  );

  // trigger calc
  $("#borrowing-calculate-btn", parent).trigger("click", true);
}

function addCommas(n) {
  n += "";
  var comma = /,/g;
  n = n.replace(comma, "");
  var x = n.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}