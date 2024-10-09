const questions = [
  {
    question: "Which of these option is correct about JavaScript ?",
    options: [
      { text: "Single Threaded Language", correct: true },
      { text: "Multi Threaded Language", correct: false },
      { text: "Asynchronous Language", correct: false },
      { text: "Limited to browser", correct: false },
    ],
  },

  {
    question:
      "What will be the output of the following code? <br><br> const sum = eval('10*10+5')",
    options: [
      { text: '"105"', correct: false },
      { text: "105", correct: true },
      { text: "TypeError", correct: false },
      { text: '"10*10+5"', correct: false },
    ],
  },

  {
    question:
      "The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword.Is this statement true or false?",
    options: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "it depends", correct: false },
      { text: "independent", correct: false },
    ],
  },

   {
    question:
      "What will be the output of the following code? <br><br>console.log(typeof typeof 1);",
    options: [
      { text: '"number"', correct: false },
      { text: '"string"', correct: true },
      { text: '"object"', correct: false },
      { text: '"undefined"', correct: false },
    ],
  },

  {
    question: "Everything in JavaScript is either a...",
    options: [
      { text: "function or object", correct: false },
      { text: "trick question! only objects", correct: false },
      { text: "number or object", correct: false },
      { text: "primitive or object", correct: true },
    ],
  },

  {
    question:
      "What does setInterval() return ? <br><br>setInterval(() => console.log('Hi'), 1000);",
    options: [
      { text: "the amount of milliseconds specified", correct: false },
      { text: "a unique id", correct: true },
      { text: "the passed function", correct: false },
      { text: "undefined", correct: false },
    ],
  },

  {
    question: "What does JSON.parse() do ?",
    options: [
      { text: "Parses JSON to a JavaScript value", correct: true },
      { text: "Parses a JavaScript object to JSON", correct: false },
      { text: "Parses any JavaScript value to JSON", correct: false },
      { text: "Parses JSON to a JavaScript object only", correct: false },
    ],
  },

  {
    question: "What are the three phases of event propagation ?",
    options: [
      { text: "Target > Capturing > Bubbling", correct: false },
      { text: "Bubbling > Target > Capturing", correct: false },
      { text: "Target > Bubbling > Capturing", correct: false },
      { text: "Capturing > Target > Bubbling", correct: true },
    ],
  },

  {
    question:
      "What will be the output of the following code ? <br><br>let number = 0; <br>console.log(number++); <br>console.log(++number); <br>console.log(number);",
    options: [
      { text: "1 1 2", correct: false },
      { text: "1 2 2", correct: false },
      { text: "0 2 2", correct: true },
      { text: "0 1 2", correct: false },
    ],
  },

  {
    question:
      "What will be the output of the following code? <br><br>console.log(3 + 4 + '5');",
    options: [
      { text: '"345"', correct: false },
      { text: '"75"', correct: true },
      { text: "12", correct: false },
      { text: '"12"', correct: false },
    ],
  },
];



let qindex = 0;
let score = 0;
const container = document.querySelector('.container'); // Fix the container selector
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

function loadQuestion() {
  // Clear previous question
  container.querySelector('.q-container').innerHTML = '';

  const questione = questions[qindex];
  const questionEl = document.createElement('div');
  questionEl.classList.add('question');
  questionEl.innerHTML = questione.question;
  container.querySelector('.q-container').appendChild(questionEl);

  const answersEl = document.createElement('div');
  answersEl.classList.add('answers');

  questione.options.forEach((option) => {
    const answerBtn = document.createElement('button');
    answerBtn.innerText = option.text;
    answerBtn.addEventListener('click', () => selectAns(option.correct, answerBtn));
    answersEl.appendChild(answerBtn);
  });

  container.querySelector('.q-container').appendChild(answersEl);
  nextBtn.style.display = 'none'; // Hide "Next" button until an answer is selected
}

function selectAns(correct, btn) {
  const buttons = document.querySelectorAll('.answers button');
  buttons.forEach((button) => button.disabled = true); // Disable all buttons after selection

  if (correct) {
    score++;
    btn.style.backgroundColor = '#28a745'; // Green if correct
  } else {
    btn.style.backgroundColor = '#dc3545'; // Red if incorrect
  }

  nextBtn.style.display = 'block'; // Show "Next" button after an answer is selected
}

nextBtn.addEventListener('click', () => {
  qindex++;
  if (qindex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  container.querySelector('.q-container').innerHTML = ''; // Clear questions
  nextBtn.style.display = 'none'; // Hide the next button
  scoreContainer.style.display = 'block'; // Show the score
  scoreContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

// Load the first question
loadQuestion();
