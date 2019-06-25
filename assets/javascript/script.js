$("#start-button").click(function() {
    $("#start-button").remove();
    game.loadQuestion();
    jeopardy();
})

function jeopardy() { 
    var audio = new Audio("src='../audio/Jeopardy-theme-song.mp3'");
    audio.play();    
}

$(document).click(".answer-button",function(e) {
    game.clicked(e);
})

$(document).click("#reset", function() {
    game.reset();
})

var questionsArray = [{
    question: "What is the acronym for the Rainbow?",
    answers: ['PEMDAS', 'ROYGBIV', 'SVMEMJSUP', 'YOLO', 'FOMO'],
    correctAnswer:'ROYGBIV',
    image:"../images/Rainbow.gif" // Add images from image file
}, {
    question: "Which is NOT a U.S Territories?",
    answers: ['Guam', 'Puerto Rico', 'Virgin Islands', 'Jamaica', 'Somoa'],
    correctAnswer:'Jamaica',
    image:"../images/Jamaica.gif" // Add images from image file
},{
    question: "Which basketball team won this years NBA Champion?",
    answers: ['Milwaukee Bucks', 'Golden State Warriors', 'Toronto Raptors', 'Portland Trail Blazers', 'Philadelphia 76ers'],
    correctAnswer:'Toronto Raptors',
    image:"../images/Toronto Raptors.gif" // Add images from image file
},{
    question: "What happens when everyone is so loud in class?",
    answers: ['Quiet Time Clap', 'Silencio', 'Shut It', 'QUIET!!!', 'Wait..'],
    correctAnswer:'Quiet Time Clap',
    image:"../images/Quiet Time Clap.gif" // Add images from image file
},{
    question: "Who grades these Homeworks?",
    answers: ['Mario & Luigi', 'Captain America & Iron Man', 'Hodor', 'Pikachu & Ash', 'Archie & Nick'],
    correctAnswer:'Archie & Nick',
    image:"../images/Archie.gif" // Add images from image file
},{
    question: "What is the notation for jQuery?",
    answers: ['#', '.', '!', '$', '*'],
    correctAnswer:'$',
    image:"../images/Dollar Sign.gif" // Add images from image file
},{
    question: "What does API stand for?",
    answers: ['Application Programming Intercourse', 'Application Publishing Interface', 'Application Programming Interface', 'Application Programming Interaction', 'Application Producing Interface'],
    correctAnswer:'Application Programming Interface',
    image:"../images/API.gif" // Add images from image file
},{
    question: "What kind of U.S drone was shot down by Iran?",
    answers: ['Military Drone', 'Surveillance Drone', 'Automated Drone', 'Weapons Drone', 'Weather Drone'],
    correctAnswer:'Surveillance Drone',
    image:"../images/Surveillance Drone.gif" // Add images from image file
},{
    question: "What brand is Nick's Water Bottle?",
    answers: ['Contingo', 'Mira', 'S\'well', 'Yeti', 'Hydro Flask'],
    correctAnswer:'Hydro Flask',
    image:"../images/Hydro Flask.gif" // Add images from image file
},{
    question: "What brand is Archie's Laptop?",
    answers: ['Dell', 'MSI', 'Alienware', 'ASUS', 'Acer'],
    correctAnswer:'MSI',
    image:"../images/MSI.gif" // Add images from image file
},{
    question: "Which is NOT a Marvel Movie?",
    answers: ['The Avengers', 'Spider-Man: Far From Home', 'Captain Marvel', 'Justice League', 'Black Panther 2'],
    correctAnswer:'Justice League',
    image:"../images/Justice League.gif" // Add images from image file
},{
    question: "Which is NOT a Blizzard Entertainment Game?",
    answers: ['Final Fantasy XI', 'World of Warcraft', 'StarCraft', 'Diablo', 'Overwatch'],
    correctAnswer:'Final Fantasy XI',
    image:"../images/Final Fantasy.gif" // Add images from image file
},{
    question: "What holiday comes RIGHT AFTER Thanksgiving?",
    answers: ['Small Business Saturday', 'Black Friday', 'Cyber Monday', 'Christmas Eve'],
    correctAnswer:'Black Friday',
    image:"../images/Black Friday.gif" // Add images from image file
},{
    question: "Which one is a self-enclosed tag in HTML?",
    answers: ['Body Tag', 'Main Tag', 'Script Tag', 'Image Tag', 'Header Tag'],
    correctAnswer:'Image Tag',
    image:"../images/Image Tag.gif" // Add images from image file
},{
    question: "What is California's State Flower?",
    answers: ['Violet', 'Peach Blossom', 'Golden Poppy', 'Goldenrod', 'Magnolia'],
    correctAnswer:'Golden Poppy',
    image:"../images/Golden Poppy.gif" // Add images from image file
}];

var game = {
    questionsArray: questionsArray,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countDown: function() {
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
        $("#subwrapper").append("<h3>The Correct Answer Was: "+questionsArray[game.currentQuestion].correctAnswer+"</h3>");
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
    clicked: function(e) {
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
        $("#subwrapper").append("<h3>The Correct Answer Was: "+questionsArray[game.currentQuestion].correctAnswer+"</h3>");
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