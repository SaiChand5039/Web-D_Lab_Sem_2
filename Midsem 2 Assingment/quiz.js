const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timerInterval;
  const totalTime = 10; // Total time for each question in seconds
  let timeLeft = totalTime;
  
  const quizContainer = document.getElementById('quiz-container');
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  
  function displayQuestion() {
    clearInterval(timerInterval); // Reset the timer
    timeLeft = totalTime; // Reset the timer
  
    progressBar.style.width = '100%';
    quizContainer.appendChild(progressBar);
  
    timerInterval = setInterval(() => {
      timeLeft--;
      const progressPercentage = (timeLeft / totalTime) * 100;
      progressBar.style.width = ${progressPercentage}%;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        checkAnswer(null); // Automatically move to the next question
      }
    }, 1000);
  
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = quizData[currentQuestion].question;
  
    const answersElement = document.createElement('div');
    answersElement.classList.add('answers');
    
    quizData[currentQuestion].options.forEach(option => {
      const answerElement = document.createElement('div');
      answerElement.classList.add('answer');
      answerElement.textContent = option;
      answerElement.addEventListener('click', () => checkAnswer(option));
      answersElement.appendChild(answerElement);
    });
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(answersElement);
  }
  
  function checkAnswer(selectedOption) {
    clearInterval(timerInterval); // Stop the timer
  
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      score++;
      // Highlight the correct answer
      event.target.style.backgroundColor = '#5cb85c'; // Green
    } else if (selectedOption !== null) {
      // Highlight the wrong answer
      event.target.style.backgroundColor = '#d9534f'; // Red
      // Highlight the correct answer
      document.querySelector(.answer:nth-child(${quizData[currentQuestion].options.indexOf(correctAnswer) + 1})).style.backgroundColor = '#5cb85c'; // Green
    }
  
    // Move to the next question or display final score
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      setTimeout(displayQuestion, 1000); // Transition delay
    } else {
      setTimeout(() => {
        quizContainer.innerHTML = <h2>Your Score: ${score}/${quizData.length}</h2>;
      }, 1000);
    }
  }
  
  displayQuestion();