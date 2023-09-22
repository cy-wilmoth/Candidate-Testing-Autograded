const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = String(input.question("Please enter your name."));

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = input.question("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = String(question.toLowerCase);

if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect. Better luck next time, yeah?");
}
  

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  console.log(question);
  console.log(candidateAnswer);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  if (candidateAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log("Incorrect. Better luck next time, yeah?");
  }
    

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`What's up ${input}? I hope you're ready for this quiz!`);
  askQuestion(question);
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
