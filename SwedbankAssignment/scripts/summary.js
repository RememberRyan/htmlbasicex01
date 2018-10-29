$(document).ready(() => {
    $('#answer1').html(JSON.parse(localStorage.getItem('1')).gender);
    $('#answer2').html(JSON.parse(localStorage.getItem('2')).someData);
    $('#answer3').html(JSON.parse(localStorage.getItem('3')).gender);
});