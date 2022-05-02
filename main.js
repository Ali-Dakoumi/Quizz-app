const quizData = [
  {
    question: "favourite team?",
    a: "FC barcelone",
    b: "Juve",
    c: "Milan",
    correct: "b",
  },
  {
    question: "favourite dog?",
    a: "husky",
    b: "german shepred",
    c: "akita",
    correct: "c",
  },
  {
    question: "favourite food?",
    a: "pasta",
    b: "pizza",
    c: "seafood",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");

const a = document.getElementById("atext");
const b = document.getElementById("btext");
const c = document.getElementById("ctext");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function loadQuiz() {
  deselect();
  console.log("your score", score);
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
}

function deselect(params) {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> your scrore is ${score} /  ${quizData.length}</h2> <button onClick="location.reload()">Reload</button>`;
    }
  }
});
