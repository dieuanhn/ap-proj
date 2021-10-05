let questions = [
  {
    question: "Which driver do you prefer?",
    choice1: "Michael Schumacher",
    choice2: "Lewis Hamilton",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Lando Norris",
    choice2: "Charles Leclerc",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "George Russell",
    choice2: "Valtteri Bottas",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Max Verstappen",
    choice2: "Sergio Perez",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Nico Roseburg",
    choice2: "Nico Hulkenburg",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Sebastian Vettel",
    choice2: "Fernando Alonso",
    answer: 1,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Yuki Tsunoda",
    choice2: "Mick Schumacher",
    answer: 2,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Alain Prost",
    choice2: "Aryton Senna",
    answer: 2,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Carlos Sainz",
    choice2: "Danny Ricciardo",
    answer: 2,
  },
  {
    question: "Which driver do you prefer?",
    choice1: "Lance Stroll",
    choice2: "Esteban Ocon",
    answer: 1,
  },
];

const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let correctAnswers = true;
let score = 0; //score starts at 0
let questionCounter = 0; //questions start at 0
let availableQuestions = [];

const scorePoints = 10;
const maxQuestions = 10;

const beginQuiz = function () {
  console.log("started");
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; //collects values, reset html
  getNewQuestion();
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html");
  }

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length); //value of the question index
  currentQuestion = availableQuestions[questionsIndex]; //keeps track of what question count
  question.innerText = currentQuestion.question; //determines question to ask

  choices.forEach((choice) => {
    const number = choice.dataset["number"]; //recognizes what choice is being clicked on
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  correctAnswers = true;
};

const gradeUser = choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!correctAnswers) return;

    correctAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply == "correct") {
      incrementScore(scorePoints);

      console.log(score);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

const incrementScore = (num) => {
  score += num;
};

beginQuiz();
