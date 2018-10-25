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

$(function () {
    $('#submit-form').click(function () {

        // template for storing form details into an array
        const userObject = $('form').serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});

        // Class work
        // Min length for a password
        // Password should include
        //      Number
        //      Special character
        // Validate it meets requirements: if not
        //     alert(“Password field invalid”);
        //      Add a red border to the password input element
        // Validation true:
        // Print array of details to the console


        // Form Validation - COMPLETED
        if (userObject['password'].length < 8){
            alert("Password does not meet required length");
            $('#password-box').css('border-color', 'red');
        } else if (!(/\d/.test(userObject['password']))){
            alert("Password does not contain a number");
            $('#password-box').css('border', '1px solid red');
        } else if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userObject['password']))){
            alert("Password must contain a special character");
        } else {
            $('#password-box').css('border', '');
            console.log(userObject['username']);
            console.log(userObject['password']);
            console.log(userObject['email']);
        }
    });
});

