//
// We create variable ‘x’ and assign it a value/function which takes two values, one was called ‘callback’.
// We then print to the console the value passed.
//     Then we call the 2nd argument as a function.
window.onload = (() => {
    let x = function (someValue, callback) {
        console.log(someValue);
        callback();
    };

    x("valuePassed", function() {
    console.log("Here is Callback");
    });
});


// arrays can be described in the same way
// some examples of accepted arrays within JS
window.onload = (() => {
    let myList = [1,2,3,4];
    let myAnotherList = ['c', 'h', 'b'];
    let someOtherList = [1, "dif", 'c', false];
    let listsWithinLists = [ [], []];
    let justAnotherList = [ someOtherList, myList];

    console.log(justAnotherList);
});

// for loops in JS
window.onload = (() => {
    let myList = [1,2,3,4];

    for (let i = 0; i < myList.length; i++){
        console.log(i);
    }
});



window.onload = (() => {
    let myList = [1,2,3,4];

    for (let i = 0; i < myList.length; i++){
        console.log(myList[i]);
    }
});

// for each
window.onload = (() => {
    let myList = [1,2,3,4];
    let myAnotherList = ['c', 'h', 'b'];


    // lambdas - for each implementation
    // passing a big arrow funciton
    myAnotherList.forEach((value) => {
        console.log(value);
    });

    //anonymous function - a function without name that gets passed
    myAnotherList.forEach(function(value){
        console.log(value);
    });

    // creating a function
    let x = function(value) {
        console.log(value);
    };
    // passing the created function (above)
    myAnotherList.forEach(x);

    // Another ForEach
    // iterate over a list, element by element like a 'forloop'
    for (let number in myList) {
        console.log(number);
    }


});

// while loops
window.onload = (() => {
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
});

// Do while loops
window.onload = (() => {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i < 0);
});

// If statements
window.onload = (() => {
    let i = 0;
    if (i <0){

    }
    else if (i >0) {

    }else {

    }
});


