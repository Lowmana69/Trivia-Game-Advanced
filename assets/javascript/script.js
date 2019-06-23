$("#start-button").click(function() {
    $("#start-button").remove();
    game.loadQuestion();
})

$(document).click(".answer-button",function(e) {
    game.clicked(e);
})

$(document).click("#reset", function() {
    game.reset();
})

var questionsArray = [{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
}, {
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
},{
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Black'],
    correctAnswer:'Red',
    image:"" // Add images from image file
}];

var game = {
    questions: questionsArray,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countDown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            console.log("Times Up!");
            game.timesUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countDown, 1000);
        $("#subwrapper").html("<h2>TIME REMAINING <span id='counter'>30</span> Seconds</h2>");
        $("#subwrapper").append("<h2>"+questionsArray[game.currentQuestion].question+"</h2>");
        for(var i = 0; i < questionsArray[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append("<button class='answer-button' id='button-"+i+"' data-name='"+questionsArray[game.currentQuestion].answers[i]+"'>"+questionsArray[game.currentQuestion].answers[i]+"</button>");
        }
    },
    nextQuestion: function() {
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timesUp: function() {
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h2>Out of Time!</h2>");
        $("#subwrapper").append("<h3>The Correct Answer Was: "+questions[game.currentQuestion].correctAnswer+"</h3>");
        if(game.currentQuestion==questionsArray.length-1) {
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    results: function() {
        clearInterval(timer);
        $("#subwrapper").html("<h2>ALL DONE!</h2>");
        $("#subwrapper").append("<h3>Correct: "+game.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect: "+game.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+game.unanswered+"</h3>");
        $("#subwrapper").append("<button id='reset'>PLAY AGAIN?</button>");

    },
    clicked: function() {
        clearInterval(timer);
        if($(e.target).data("name")==questionsArray[game.currentQuestion].correctAnswer) {
            game.answeredCorrect();
        } else {
            game.answeredIncorrect();
        }
    },
    answeredCorrect: function () {
        console.log("You got it");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2>You Got It Right!</h2>");
        if(game.currentQuestion==questionsArray.length-1) {
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }

    },
    answeredIncorrect: function() {
        console.log("Wrong!");
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2>You Got It Wrong!</h2>");
        $("#subwrapper").append("<h3>The Correct Answer Was: "+questions[game.currentQuestion].correctAnswer+"</h3>");
        if(game.currentQuestion==questionsArray.length-1) {
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    reset: function() {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
};