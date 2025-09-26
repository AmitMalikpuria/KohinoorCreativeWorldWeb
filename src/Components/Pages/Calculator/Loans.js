/******
 * Javascript which drives the new Loan calculator
 */

var loan = {
    init: function($elem) {
        this.$elem = $elem;
        this.$form = this.$elem.find('#calculator-loan-form');
        this.results = {
            $borrow: $('#calculator-loan-results__borrow')
        };

        calculators.watchInputRange(this.$form.find('.form-group--range'), this.$form);
        calculators.handleFormGroupHiddenInputs(this.$form);
        calculators.addControlGroups(this.$form);
        calculators.addNumericInputs(this.$form);

        this.watchForm();
        this.monthlyExpenses();

        this.$form.trigger('change');
    },

    // Watch form for changes
    watchForm: function() {
        this.$form.on('submit', function(e) {
            e.preventDefault();
        });

        this.$form.on('change', function() {   
            // Calculate results
            //loan.fetchResults();

            // We'll mock up the results locally for now
        //    var loanAmount = (Math.round(Math.random() * 500) * 1000) + 100000;
        //    var expenses = Math.round(Math.random() * 10000);
        //    var income = Math.round(Math.random() * 10000);

            //if(!loan.loanSlider) {
            //    loan.loanSlider = loanSlider.init(loan.$elem.find('.c-loan-slider'), loanAmount, income, expenses);
            //}

            // Update total loan text 
          //  loan.results.$borrow.text('$' + calculators.addCommas(loanAmount));

            // Set slider min/max
            //loan.loanSlider.updateSlider(loanAmount);
            //loan.loanSlider.renderResults(loanAmount);
        });
    },

    monthlyExpenses: function() {
        $('#calculator-loan-form__expenses-help').on('change', function() {
            if($(this).is(':checked')) {
                // Checkbox is checked. Estimate expenses
               
                // Logic for estimating expenses goes here
                // For now we'll just set it to $9999
                var estimate = 9999;

                $('#calculator-loan-form__expenses').val(estimate);
            }
        });
    },

    fetchResults: function() {
        // Get borrowing power here
    }
};

$(document).ready(function() {
    var $elem = $('#calculator-loan');

    if($elem.length) {
        loan.init($elem);
    }
});