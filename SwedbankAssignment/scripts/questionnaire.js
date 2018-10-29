$(document).ready(function () {

    // total questions
    const questions_count = 3;
    // runtime current question
    let current_question_number = 1;

    // html element references
    // $ - a jQueary coding convention for naming variable: variable that holds a reference, used for jQuery
    const $question_container = $('#question-container');
    const $previous_button = $('#go-to-previous');
    const $next_button = $('#go-to-next');
    const $submit_button = $('#submit');
    const $reset_form_button = $('#reset-form')
    //
    // // FYI: URLs
    // // how to gather the page's url
    // localStorage.setItem('url', window.location.href);
    //
    // // how to store url
    // localStorage.getItem('url');


    // method call
    loadQuestionByNumber(current_question_number);
    addInitialButtonListeners();

    function addInitialButtonListeners() {
        $next_button.click(function () {
            if (validateAnswer()) {
                loadNextQuestion();
            }
        });
        $previous_button.click(function () {
            loadPreviousQuestion();
        });
        $submit_button.click(function () {
            if (validateAnswer()) {
                window.location.replace('summary.html');
            }
            console.log("Form Submitted");
        });
        $reset_form_button.click(function (){
            localStorage.clear();
            location.reload();
            console.log("Local data cleared and page reloaded")
        });
    }

    function loadNextQuestion() {
        // to not exceed number of questions
        if (current_question_number + 1 <= questions_count) {
            current_question_number++;
            loadQuestionByNumber(current_question_number);
        }

    }

    function loadPreviousQuestion() {
        if (current_question_number - 1 >= 1) {
            current_question_number--;
            loadQuestionByNumber(current_question_number);
        }
    }

    function loadQuestionByNumber(questionNumber) {
        changeButtonVisibilityForQuestion(questionNumber);
        // creating the filename to load: And using toString the numbers to avoid wtfjs.com
        // .load has 3 parameters: as demonstrated below and here, https://www.w3schools.com/jquery/ajax_load.asp
        $question_container.load('../html/questions/question_' + questionNumber.toString() + '.html',
            null,
            function () {
                loadQuestionDataIfPresent(questionNumber);
            })
    }

    // logic for showing and hiding buttons based upon user progress
    function changeButtonVisibilityForQuestion(questionNumber) {
        if (questionNumber < questions_count) {
            $submit_button.hide();
            $next_button.show();
            if (questionNumber === 1) {
                $previous_button.hide();
            } else {
                $previous_button.show();
            }
        } else if (questionNumber === questions_count) {
            $submit_button.show();
            $next_button.hide();
        }
    }

    // do NOT fill in validation here
    function validateAnswer() {
        switch (current_question_number) {
            case 1: {
                return validateQuestion1();
            }
            case 2: {
                return validateQuestion2();
            }
            case 3: {
                return validateQuestion3();
            }
            case 4: {
                return validateQuestion4();
            }
            case 5: {
                return validateQuestion5();
            }
        }
    }


    // Validation goes here
    function validateQuestion1() {
        // // element field is ok
        // let check === true;
        // if(check === true){
        //   //save Question data code
        // }
        console.log(current_question_number);
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion2() {
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion3() {
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion4() {
        saveQuestionData(current_question_number);
        return true;
    }

    function validateQuestion5() {
        saveQuestionData(current_question_number);
        return true;
    }


    function loadQuestionDataIfPresent(questionNumber) {
        const data = localStorage.getItem(questionNumber.toString());
        if (data !== null) {
            $('form').fromJSON(data);
        }
    }

    function saveQuestionData(questionNumber) {
        localStorage.setItem(questionNumber.toString(), $('form').toJSON());
    }
});