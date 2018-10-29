$(document).ready(function () {

    // // storing the data
    // let users;

    // // easiest way for Get request
    // $.get('https://damp-island-30027.herokuapp.com/users', function (data, status) {
    //     console.log(status);
    //     console.log(data);
    //     users = data;
    //     $('h1').html(status.toString());
    //     $('p').html(data[0].name);
    // })
    // console.log("Page has been loaded");


//     // another way to get request: This has more options at hand.
//     $.ajax({
//         url: 'https://damp-island-30027.herokuapp.com/users',
//         method: "GET",
//         success: function (data, status){
//         console.log("AJAX");
//         console.log(status);
//     users = data;
//     console.log(data[0].name);
//     console.log(data);
// },
//     data: JSON.stringify({}),
//         name:"Some User",
//         email: "anemail@gmain.com",
//         beforeSend: function(request){
//             request.setRequestHeader('key','key')
//         }
// });
//
//     function callback() {
//         console.log('success');
//     }

    // // creating a new user
    // $.ajax(
    //     {
    //         url: 'https://damp-island-30027.herokuapp.com/users',
    //         type: "POST",
    //         beforeSend: function (request) {
    //             // our authentication
    //             request.setRequestHeader('key', '1996');
    //         },
    //         // executed if the response from http request is success 2xxx
    //         success: function (status) {
    //             console.log("AJAX");
    //             console.log(status);
    //         },
    //
    //         // adding the new user
    //         data: JSON.stringify({
    //             name: "Yoda",
    //             email: "yoda@dagoba.com",
    //             password: "the_f0rc3"
    //         }),
    //         contentType: "application/json"
    //     });

    //??? displaying user details in a formatted way within the console
    $.get('https://damp-island-30027.herokuapp.com/users', function (data, status) {
        console.log(status);
        console.log(data);
        data.forEach((user) => {
            console.log("username " + user.username);
            console.log("password " + user.password);
            console.log("Email " + user.email);
            console.log("------------------------------");
            const $container = $('#container');
            $('#container').append('<p>' + user.name + '</p>');
            $('#container').append('<p>' + user.email + '</p>');
            $('#container').append('<p>' + user.password + '</p>');
            $('#container').append('<p>--------------------------</p>');
        });
        //// another forEach implementation that doesn't use big-arrow
        // data.forEach(function(record){
        //
        // });
        $('h1').html(status.toString());
    });

    // // how to login with an existing user
    // $.ajax ({
    //     url: 'https://damp-island-30027.herokuapp.com/users',
    //     type: "POST",
    //     beforeSend: function(request){
    //         request.setRequestHeader('key','1996');
    //     },
    //     success: function (data,textStatus,xhr){
    //         console.log("AJAX SUCCESS");
    //         console.log(xhr);
    //         console.log(textStatus);
    //         console.log(data);
    //     },
    //
    //     error: function (xhr, ajaxOptions, thrownError) {
    //         console.log("AJAX ERROR");
    //         console.log(xhr);
    //         console.log(ajaxOptions);
    //         console.log(thrownError);
    //     },
    //     data: JSON.stringify()
    // })

});