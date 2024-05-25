const questions = [
  {
    question: "Question goes here",
    answers: [
      { Text: "Answer Goes here", correct: "True" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
    ],
  },
  {
    question: "Question goes here",
    answers: [
      { Text: "Answer Goes here", correct: "True" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
    ],
  },
  {
    question: "Question goes here",
    answers: [
      { Text: "Answer Goes here", correct: "True" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
    ],
  },
  {
    question: "Question goes here",
    answers: [
      { Text: "Answer Goes here", correct: "True" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
    ],
  },
  {
    question: "Question goes here",
    answers: [
      { Text: "Answer Goes here", correct: "True" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
      { Text: "Answer Goes here", correct: "False" },
    ],
  },
];
console.log(questions.length);
const questionElement = document.querySelector("#question");
const answerButton = document.querySelector("#Answer-buttons");
const nextButton = document.querySelector("#Next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    button.addEventListener("click", selectAnswer);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const iscorrect = selectedBtn.dataset.correct === "True";
  if (iscorrect) {
    selectedBtn.classList.add = "correct";
  } else {
    selectedBtn.classList.add = "Incorrect";
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "True";
  if (isCorrect) {
    selectedBtn.classList.add("Correct");
    score++;
  } else {
    selectedBtn.classList.add("Incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "True") {
      button.classList.add("Correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}
startQuiz();

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handlenextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handlenextButton();
  } else {
    startQuiz();
  }
});
