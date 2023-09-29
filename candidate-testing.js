const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""; 


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

/*
if (candidateAnswer.toLowerCase === correctAnswer.toLowerCase) {
  console.log("Correct! ");
} else {
  console.log("Incorrect. Better luck next time, yeah? ");
}*/


//TODO: Variables for Part 2
let questionOne = "Who was the first American woman in space? ";
let questionTwo = "True or false: 5 kilometer == 5000 meters? ";
let questionThree = "(5 + 3)/2 * 10 = ? ";
let questionFour = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let questionFive = "What is the minimum crew size for the ISS? ";

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];


let correctAnswerOne = "Sally Ride";
let correctAnswerTwo = "true";
let correctAnswerThree = "40";
let correctAnswerFour = "Trajectory";
let correctAnswerFive = "3";

let correctAnswers = [correctAnswerOne, correctAnswerTwo, correctAnswerThree, correctAnswerFour, correctAnswerFive];


let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  input.question("Please enter your name. ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
          candidateAnswers.push(input.question(questions[i]));
  }
  }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      console.log("That's correct! ");
    } else {
    console.log("Incorrect. Better luck next time, yeah? ");
    }
  }


    //TODO 3.2 use this variable to calculate the candidates score.
   //let numberof = 0

//let possibleGrade = [0, 1, 2, 3, 4, 5];
//let possibleGrade = [0, 20, 40, 60, 80, 100];
let grade = 0;
for (let k = 0; k <= questions.length; k++) {
  grade += k; 
  
  /*candidateAnswers[k] === correctAnswers[k]*/ 
  /// (questions.length) * 100;

  return grade / questions.length * 100;
}
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  askQuestion();

  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
