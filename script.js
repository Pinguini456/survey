const questions = [
  {
    question: "When you’re feeling stressed, what are you most likely to do?",
    answers: {
      A: "Push harder to show my capabilities.",
      B: "Get things in order.",
      C: "Reach out for encouragement.",
      D: "Relax or distract myself."
    }
  },
  {
    question: "What motivates you the most?",
    answers: {
      A: "Being the best or standing out.",
      B: "Having control over the outcome.",
      C: "Feeling accepted and valued by others.",
      D: "Feeling at ease and stress-free."
    }
  },
  {
    question: "How do you feel about criticism?",
    answers: {
      A: "It makes me angry.",
      B: "I try to improve myself.",
      C: "It makes me feel rejected.",
      D: "I try to ignore it."
    }
  },
  {
    question: "What is most important to you in relationships?",
    answers: {
      A: "Being respected and admired.",
      B: "Having reliability and order.",
      C: "Being accepted and appreciated.",
      D: "Having freedom without demands."
    }
  },
  {
    question: "How do you approach conflict?",
    answers: {
      A: "I tend to get assertive or angry.",
      B: "I try to organize and solve it myself.",
      C: "I try to avoid it and keep the peace.",
      D: "I avoid it or distract myself."
    }
  },
  {
    question: "What do you worry about most?",
    answers: {
      A: "Being insignificant.",
      B: "Losing control or feeling uncertain.",
      C: "Being disliked or rejected.",
      D: "Feeling pressured or stressed."
    }
  },
  {
    question: "How do you feel about setting goals?",
    answers: {
      A: "I strive to achieve and be the best.",
      B: "I like having control over my plans.",
      C: "I seek others’ approval and support.",
      D: "I avoid pressure and take things easy."
    }
  },
  {
    question: "When things don’t go as planned, how do you react?",
    answers: {
      A: "I get frustrated or angry.",
      B: "I try to regain control.",
      C: "I feel like people don’t value me.",
      D: "I tend to withdraw or shut down."
    }
  }
];

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

function showQuestion() {
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('next-button').disabled = true;

  const question = questions[currentQuestion];
  document.getElementById('question').innerText = question.question;
  document.getElementById('answerA').innerText = question.answers.A;
  document.getElementById('answerB').innerText = question.answers.B;
  document.getElementById('answerC').innerText = question.answers.C;
  document.getElementById('answerD').innerText = question.answers.D;
}

function selectAnswer(answer) {
  scores[answer]++;
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('next-button').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';

  // Sort the scores to determine the highest and second-highest
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryIdol = sortedScores[0][0];
  const secondaryIdol = sortedScores[1][0];

  let primaryText = "";
  let secondaryText = "";

  // Define results for each deep idol
  switch (primaryIdol) {
    case 'A':
      primaryText = "Power: You may strive for significance through success, winning, or influence.";
      break;
    case 'B':
      primaryText = "Control: You may seek certainty through control over yourself and your environment.";
      break;
    case 'C':
      primaryText = "Approval: You may seek affirmation and acceptance through relationships.";
      break;
    case 'D':
      primaryText = "Comfort: You may seek avoidance of stress or discomfort through freedom from responsibility.";
      break;
  }

  switch (secondaryIdol) {
    case 'A':
      secondaryText = "Power: You may strive for significance through success, winning, or influence.";
      break;
    case 'B':
      secondaryText = "Control: You may seek certainty through control over yourself and your environment.";
      break;
    case 'C':
      secondaryText = "Approval: You may seek affirmation and acceptance through relationships.";
      break;
    case 'D':
      secondaryText = "Comfort: You may seek avoidance of stress or discomfort through freedom from responsibility.";
      break;
  }

  // Display the results
  document.getElementById('result').innerHTML = `
    <strong>Primary Idol:</strong> ${primaryText}<br><br>
    <strong>Secondary Idol:</strong> ${secondaryText}
  `;
}


function restartQuiz() {
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  document.getElementById('next-button').style.display = 'block';
  showQuestion();
}

// Initialize the quiz with the first question
showQuestion();
