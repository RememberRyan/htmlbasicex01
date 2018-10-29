// // Four JQuery ways of implementing,
// // window.onload
//
// //Method 1
// $(document).ready(function)(){
//
// });
//
// // Method 2
// $(document).ready(() => {
//
// });
//
// //Method 3
// $(function () {
//
// });
//
// //Method 4
// $(() =>{
//
// });


// $(document).ready(function () {
//     console.log("JQuery on ready");

    // // referencing html element id
    // $('#my-button').click(function() {
    //     // referenced the id: then changed .css(html property, value)
    //     // you can chain the code using: .css(property,value)
    //     $('#my-button').css('color', 'red').css('margin','20px');
    //     // returning the value of a style, ie. margin
    //     console.log($('#my-button').css('margin'));
    // });

    // // referencing by html element class
    // $('.class')
    //
    // // referencing element by the html tag type
    // $('button')


    // // template for storing form details into an array
    // const data = $('form').serializeArray().reduce(function(obj,item){
    //     obj[item.name]= item.value;
    //     return obj;
    // }, {});
    //
// });

// $(function () {
//     $('#submit-form').click(function () {
//
//         // template for storing form details into an array
//         const userObject = $('form').serializeArray().reduce(function (obj, item) {
//             obj[item.name] = item.value;
//             return obj;
//         }, {});
//
//         // Class work
//         // Min length for a password
//         // Password should include
//         //      Number
//         //      Special character
//         // Validate it meets requirements: if not
//         //     alert(“Password field invalid”);
//         //      Add a red border to the password input element
//         // Validation true:
//         // Print array of details to the console
//
//
//         // Form Validation - COMPLETED
//         if (userObject['password'].length < 8){
//             alert("Password does not meet required length");
//             $('#password-box').css('border-color', 'red');
//         } else if (!(/\d/.test(userObject['password']))){
//             alert("Password does not contain a number");
//             $('#password-box').css('border', '1px solid red');
//         } else if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userObject['password']))){
//             alert("Password must contain a special character");
//         } else {
//             $('#password-box').css('border', '');
//             console.log(userObject['username']);
//             console.log(userObject['password']);
//             console.log(userObject['email']);
//         }
//     });
// });


// original code is from here: https://codepen.io/b1nary/pen/XJWaYE
// NOTE:
// const = variable that cant be re-assigned afterwards
// if you do CONST x = 10; then you cant do x = 20; afterwards.
// But with LET you can reassign later!!!

// Two methods: To JSON and From JSON, used for locally saving user form entered data

(function($) {
    $.fn.toJSON = function() {
        const $elements = {};
        const $form = $(this);
        // find elements and returns as JSON objects
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

//
// DEMO CODE
//

// save, takes data form form and uses toJSON function
$(document).ready(function(){
    $("#_save").on('click', function(){
        console.log("Saving form data...");
        const data = $("form#myForm").toJSON();
        console.log(data);
        // localStorage is more efficient than cookies being used. Cached data on client side
        localStorage['form_data'] = data;

        return false;
    });

    $("#_load").on('click', function(){
        if(localStorage['form_data']){
            console.log("Loading form data...");
            console.log(JSON.parse(localStorage['form_data']));
            $("form#myForm").fromJSON(localStorage['form_data'])
        } else {
            console.log("Error: Save some data first")
        }

        return false;
    })
});