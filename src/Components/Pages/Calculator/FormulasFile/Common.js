/******
 * Javascript which is common to calculators
 */

var calculators = {
    // Watch input range slider/input for changes and update the sibling field
    // First parameter is the form container
    // Second parameter is the form element within this container
    watchInputRange: function($elems, $form) {
        //$elems.each(function() {
        //    var $number = $(this).find('input[type=text]');
        //    var $estimate = $(this).find('.-estimate');
            
        //    // Initialise slider
        //    var $slider = $(this).find('.slider');
        //    var options = $slider.data();
        //    options.range = 'min';
        //    options.change = function(e) {
        //        if(e.view && $form) {
        //            // Change was initiated by a slider movement
        //            $form.trigger('change');
        //        }

        //        // If we have an 'estimate' checkbox then unset it as
        //        // user has changed values
        //        if($estimate.length) {
        //            $estimate.prop('checked', false );
        //        }
        //    };
        //    options.slide = function(e, ui) {
        //        $number.val(calculators.addCommas(ui.value));
        //    };

        //    $slider.slider(options);
            
        //    var min = $slider.data('min');
        //    var max = $slider.data('max');

        //    if($number.length) { 
        //        $number.on('input', function() {
        //            var val = $(this).val();
        //            var oldLength = val.length;
        //            var caretPos = $(this).prop('selectionStart');

        //            if (val) {
        //                val = parseInt($(this).val().replace(/,/g, "").trim(), 10);

        //                // Esnure val is within accepted range
        //                if(val > max) {
        //                    val = max;
        //                }
        //                if(val < min) {
        //                    val = min;
        //                }
        //            } else {
        //                val = 0;
        //            }

        //            $slider.slider('value', val);
                    
        //            // Format value as a price
        //            val = calculators.addCommas(val);
        //            $(this).val(val);

        //            // Restore caret position
        //            var newLength = val.length;
        //            caretPos = newLength - oldLength + caretPos;
        //            $(this)[0].setSelectionRange(caretPos, caretPos);
        //        });
        //    }
        //});
    },

    // Add commas to seperate thousands in a currency string
    addCommas: function(n) {
        n += '';
        var comma = /,/g;
        n = n.replace(comma,'');
        var x = n.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },

    addControlGroups: function($elem) {
        $elem.find('.form-controlgroup').each(function() {
            $(this).find('.-group').controlgroup();
        });
    },

    handleFormGroupHiddenInputs: function($elem) {
        $elem.find('.form-group .-toggle').click(function (e) {
            //debugger;
            e.preventDefault();

            var $formGroup = $(this).parents('.form-group');
            //debugger;
            if ($formGroup.hasClass('-active')) {
                //debugger;
                // Input is visible. Unset value and hide it.

                // Remove active class from form group
                $formGroup.removeClass('-active');

                // Unset value
                var $slider = $formGroup.find('.slider');
                if($slider.length) {
                    $slider.slider('option', 'value', 0);
                }

                $formGroup.find('input').val(0).trigger('change');
            } else {

                //debugger;
                // Input is hidden. Reveal it.

                // Add active class to form group
                $formGroup.addClass('-active');
            }
        });
    },

    addNumericInputs: function($elem) {
        $elem.find('.form-input-number').each(function() {
            var $input = $(this).find('input');
            var minusExists = $(this).find('a').hasClass('-minus');
            var plusExists = $(this).find('a').hasClass('-plus');

            var $minus = $('<a/>').addClass('-minus').attr({
                href: '#',
                'aria-hidden': true
            }).click(function(e) {
                e.preventDefault();
                var val = parseInt($input.val(), 10);
                if(val > 0) {
                    $input.val(val-1).trigger('change');
                }
            });
            var $plus = $('<a/>').addClass('-plus').attr({
                href: '#',
                'aria-hidden': true
            }).click(function(e) {
                e.preventDefault();
                var val = parseInt($input.val(), 10);
                if(val < 9) {
                    $input.val(val+1).trigger('change');
                }
            });
            if (!minusExists) {
                $input.before($minus);
            }
            if (!plusExists) {
                $input.after($plus);
            }
        });
    }
 }