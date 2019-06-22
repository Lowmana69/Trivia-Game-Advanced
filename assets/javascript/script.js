$("#start-button").click(function(e) {
    e.preventDefault();
    $("#start-button").remove();
    game.loadQuestion();
})

$(document).click(".answer-button",function(e) {
    game.clicked(e);
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
        $("#subwrapper").html("<h2>"+question[game.currentQuestion].question+"</h2>");
        for(var i = 0; i < questionsArray[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append("<button class='answer-button' id='button-"+i+"' data.name="'+questionsArray[game.currentQuestion].answers[i]+'">"+quesionsArray[game.currentQuestion].answers[i]+"</button>");
        }
    },
    nextQuestion: function() {

    },
    timesUp: function() {

    },
    results: function() {

    },
    clicked: function() {
        
    },
    answeredCorrect: function () {

    },
    answeredIncorrect: function() {

    },
    reset: function() {

    }
};