function checkAnswer() {
  const correctAnswer = "4";
  const selected = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById('feedback');

  // If nothing selected, treat as incorrect per spec (simple feedback)
  const userAnswer = selected ? selected.value : '';

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
