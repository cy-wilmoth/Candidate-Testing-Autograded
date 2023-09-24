const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = String(input.question("Please enter your name."));

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = input.question("Who was the first American woman in space? ");
let correctAnswer = "sally ride";
let candidateAnswer = String(question.toLowerCase);

if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect. Better luck next time, yeah?");
}


//TODO: Variables for Part 2
let questionOne = input.question("Who was the first American woman in space? ");
let questionTwo = input.question("True or false: 5 kilometer == 5000 meters?");
let questionThree = input.question("(5 + 3)/2 * 10 = ?");
let questionFour = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
let questionFive = input.question("What is the minimum crew size for the ISS?");

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

let correctAnswerOne = "sally ride";
let correctAnswerTwo = "true";
let correctAnswerThree = 40;
let correctAnswerFour = "trajectory";
let correctAnswerFive = 3;

let correctAnswers = [correctAnswerOne, correctAnswerTwo, correctAnswerThree, correctAnswerFour, correctAnswerFive];

let firstAnswer = String(questionOne.toLowerCase);
let secondAnswer = String(questionTwo.toLowerCase);
let thirdAnswer = Number(questionThree);
let fourthAnswer = String(questionFour.toLowerCase);
let fifthAnswer = Number(questionFive);

let candidateAnswers = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer];


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
};

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
