// defines functionality for saving the data: toJSon and fromJSon implementation.

// javascript object
(function($) {
    $.fn.toJSON = function() {
        const $elements = {};
        // 'this' is always the object that calls the method.
        // from the form you call the function that calls this object
        const $form = $(this);
        // finds the following html elements
        $form.find('input, select, textarea').each(function(){
            const name = $(this).attr('name');
            const type = $(this).attr('type');

            // Confirmed this is valid for all form types
            if(name){
                let $value;
                if(type === 'radio'){
                    $value = $('input[name='+name+']:checked', $form).val()
                } else if(type === 'checkbox'){
                    $value = $(this).is(':checked')
                } else {
                    $value = $(this).val()
                }

                // sets json, key and value
                $elements[$(this).attr('name')] = $value
            }
        });
        return JSON.stringify( $elements )
    };
    $.fn.fromJSON = function(json_string) {
        const $form = $(this);
        const data = JSON.parse(json_string);
        $.each(data, function(key, value) {
            const $elem = $('[name="'+key+'"]', $form);
            const type = $elem.first().attr('type');
            if(type === 'radio'){
                $('[name="'+key+'"][value="'+value+'"]').prop('checked', true)
            } else if(type === 'checkbox' && (value === true || value === 'true')){
                $('[name="'+key+'"]').prop('checked', true)
            } else {
                $elem.val(value)
            }
        })
    };
}( jQuery ));