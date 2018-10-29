(function($) {
    $.fn.toJSON = function() {
        const $elements = {};
        const $form = $(this);
        $form.find('input').each(function(){
            const name = $(this).attr('name');
            if(name){
                let $value;
                $value = $(this).val();

                $elements[$(this).attr('name')] = $value
            }
        });
        return JSON.stringify( $elements )
    };
    $.fn.fromJSON = function(json_string) {
        const $form = $(this);
        const data = JSON.parse(json_string);
        $.each(data, function(key, value) {
            let $elem = $('[name="'+key+'"]', $form);
            $elem.val(value);
        })
    };
}( jQuery ));

$(function () {


    $("#clear").click(function () {
        localStorage.clear();
    });

    $("#save").on('click', function(){
        console.log("Saving form data...");
        const data = $("form#myForm").toJSON();
        console.log(data);
        localStorage['form_data'] = data;

        return false;
    });

    $("#load").on('click', function(){
        if(localStorage['form_data']){
            console.log("Loading form data...");
            console.log(JSON.parse(localStorage['form_data']));
            $("form#myForm").fromJSON(localStorage['form_data'])
        } else {
            console.log("Error: Save some data first")
        }

        return false;
    });

    $('#submit-form').click(function() {

        const userObject = $('form').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});


        const $username = $('#my-username');
        if($username.val() === ''){
            $username.css('border', '1px solid red');
        }else {
            $username.css('border', '');
        }


        // min length for the pass
        // should include number
        // should include special character***
        // check if pass meets your reqs
        // if not
        // alert("Password doesn't fit reqs");
        // add red border to the password input element
        // if yes
        // print everything to the console, as before
        console.log(userObject['username']);
        console.log(userObject['password']);
        console.log(userObject['email']);

        // localStorage.setItem(userObject['email'], JSON.stringify(userObject))

    });
});


// window.onload = () => {
//
// };
// $(document).ready(() => {
//     const x = $('form').serializeArray();
//     x.forEach((a) => {
//         console.log(a.value);
//     })
// });
// $(() => {
//
// });

// function isFormValid() {
//     const x = $('form').serializeArray();
//
//     const data = $('form').serializeArray().reduce(function(obj, item) {
//         obj[item.name] = item.value;
//         return obj;
//     }, {});
//     console.log(data['password']);
//
//     return true;
// }



// $(document).ready(function () {
//
// });
// $(document).ready(() => {
//
// });
//
// $(function () {
//
// });
//
// $(() => {
//
// });



// $(document).ready(function () {
// console.log("Jquery on ready");

// $('#my-button').click(function () {
//
//     // const margin = $('#my-button').css('margin');
//     // $('#my-button').css('margin', (margin + 20).toString() +'px');
//
// });

// console.log($('form').serializeArray());
// const data = $('form').serializeArray().reduce(function(obj, item) {
//     obj[item.name] = item.value;
//     return obj;
// }, {});
//
// console.log(data);
// $('.class');

// $('button')


// });























