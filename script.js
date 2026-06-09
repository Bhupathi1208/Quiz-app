const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
    answer: 0
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "text-size"],
    answer: 0
  },
  {
    question: "Which JavaScript keyword declares a variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

function loadQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
  progressEl.innerText = `Question ${current + 1} of ${questions.length}`;
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.innerText = `Your score: ${score}/${questions.length}`;
}

function restartQuiz() {
  current = 0;
  score = 0;
  quizEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
  nextBtn.style.display = "none";
  loadQuestion();
}

nextBtn.style.display = "none";
loadQuestion();
