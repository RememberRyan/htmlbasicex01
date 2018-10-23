// window.onload = () => {
//     document.getElementById('about-me').addEventListener('click', doOnClick)
//     document.getElementById('skills').addEventListener('click', doOnClick)
//     document.getElementById('hobbies').addEventListener('click', doOnClick)
//     document.getElementById('personal-projects').addEventListener('click', doOnClick)
// };
//
// function doOnClick() {
//     window.location.href="http://google.com";
//     console.log("button has been pressed");
// }
//



window.onload = () => {
    // if on the homepage, initialise the menu buttons
    if (window.location.href.includes('index.html')){
        document.getElementById('about-me').addEventListener('click', aboutMe)
        // document.getElementById('skills').addEventListener('mouseover', skills)
        document.getElementById('skills').addEventListener('click', skills)
        document.getElementById('hobbies').addEventListener('click', hobbies)
        document.getElementById('personal-projects').addEventListener('click', personalProjects)
    }else {
        // initialise the homepage 'back' button
        document.getElementById('homepage').addEventListener('click', homepage)
    }
};

function myFunction() {
    console.log("Hello World");
}

function urlBrowser() {
    //window.location.href="http://www.google.com";

    //new tab
    window.open("https://github.com/RememberRyan", "_blank");
    console.log("New window loading url");
}

function aboutMe() {
    window.open('about_me.html', "_self");
}

function skills() {
    window.open('skills.html', "_self");
}

function hobbies() {
    window.open('hobbies.html', "_self");
}

function personalProjects() {
    window.open('personal_projects.html', "_self");
}

function homepage() {
    window.open('index.html', "_self");
}