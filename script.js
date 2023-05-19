'use strict';

// Creating Variables for Selecting Elements:

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

const progressBarFull = document.getElementById('progressBarFull');

let shuffledQuestions, currentQuestionIndex;

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

// shuffling the questions so they do not appear the same every time

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

// starting the game

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
  // adding 1 to the current index position to move to next question
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log('started');
  //   hiding the start button once clicked
  startButton.classList.add('hide');

  //   shuffle the questions
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  //   current question index - so we always begin with the first Q
  currentQuestionIndex = 0;

  //   showing the answers an question
  questionContainerElement.classList.remove('hide');

  //   setting the next question
  setNextQuestion();
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  // update the progress bar
  progressBarFull.style.width = `${
    (currentQuestionIndex / shuffledQuestions.length) * 100
  }%`;
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function showQuestion(question) {
  // populating our question
  questionElement.innerText = question.question;

  //   populating our answers
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    // only setting this if the button is the correct button
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // adding an EventListener for clicking the Answer
    button.addEventListener('click', selectAnswer);

    // adding an eventListener for clicking on the Next button

    // appending the actual answers to the screen
    answerButtonsElement.appendChild(button);
  });
}

/* 

-- quick note: the question parameter is the question object

*/

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function resetState() {
  clearStatusClass(document.body);
  // hiding the next button after showing it, when clicking an answer
  nextButton.classList.add('hide');
  // looping through all answer button elements and removing children
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function selectAnswer(e) {
  // getting whichever button we actually select
  const selectedButton = e.target;

  // variable equal to checking dataset.correct on the selectedButton
  const correct = selectedButton.dataset.correct;

  // setting the status class of the body
  setStatusClass(document.body, correct);

  // looping through other buttons, selecting and setting their class
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  // check if there are any other questions left
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    // show the next button (still need to make it work)
    nextButton.classList.remove('hide');
  } else {
    // renaming start button to restart (because we at the end)
    startButton.innerText = 'Restart';
    // showing the newly renamed restart button
    startButton.classList.remove('hide');
  }
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

/* 

-- Notes


// ////////////////////////////////////////////////////////////////

-- Questions Array

 - we initialize it by creating an Array named questions and:

 - in this array we have Question Objects,

   - each object has a key/value pair of:
   
     - a question, which is plain text
     - and an array of answers consisting of multiple answer objects


 - each answer object consists of:

   - a text keywork with the value of the answer, and lastly
   - a correct keyword which is either true or false


 - eg:
   - question: 'what is 1 + 1';
   - answers: [
        { text: '2', correct: true },
        { text: '11', correct: false }
     ]



// ////////////////////////////////////////////////////////////////

-- shuffling the questions

 - we want to set our shuffledQuestions equal to the shuffled array:

   - shuffledQuestions = questions.sort(() => Math.random() - 0.5);


 - sorting the array to shuffle it:

   - this will take a function 
   
     - and if it is a negative number it is going to sort 
        it a certain way and if the number is positive 
         it will sort it another way, so it is always shuffled

   - essentially you can sort things by a negative number being one
      way and a positive number being another way


   - and if you just want a random number that is either going to be
      below zero or above zero yo can do the following:

     - .sort(() => Math.random() - .5 )

       - by subtracting .5 we are going to get a number that is
          either above zero or below zero 50% of the time

         - this will make a completely random array



 - now all there is left to do is start on the first question

   - currentQuestionIndex = 0;

   - this will begin with the first question in the shuffled array

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

-- Set Next Question function:

 - we call a new function inside the setNextQuestiton function
    called showQuestion. 

 - this will take our shuffledQuestions at the 
    current question index position as the parameter 
  
   - showQuestions(shuffledQuestions[currentQuestionIndex]);

 - the function showQuestion(question){code block} is created
    outside of the setNextFunction.

 - this is how shuffledQuestions is used within setNextQuestion()
    as the parameter to the showQuestion function
  

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

-- Show Question and Answers function:

 - questiton.answers.forEach(answer => ())
 
   - forEach loop is used to loop through each of the answers

   - we do this to get a single answer for each one of the loops

   - we create a button by using a function:
   
     question.answers.forEach (answer => {
      document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')

      if (answer.correct) {
        button.dataset.correct = answer.correct
      }

      button.addEventListener('click', selectAnswer)
    
     })



-- Adding an Event Listener 

 - button.addEventListener('click', selectAnswer)

 - the event listener is set to the selectAnswer function, so it 
    waits for an answer to be clicked basically






-- note on dataset.correct

 - dataset creates a data attribute to the element and in this case
    we are adding an attribute of correct only if it is correct


 - the reason we doing this only for the correct answer is because:

   - if it is false for the answer, we do not want to add it to the
      data attribute because:
      
      - it will make it difficult for us to tell which ones are
         correct or not since there will only be a string and
        no boolean value of true or false

 - so simply put: we are only setting this if the dataset is correct

   - this will make it easier later when we are checking if 
      the data set is correct or not



// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

-- selectAnswers function

 - - function selectAnswer(e) {}

   - this function takes our event (e) in, as a parameter: 


 - const selectedButton = e.target

   - creates a variable named selectedButton, based on whatever
      we click on, first thing we do is check if it is correct:



 - const correct = selectedButton.dataset.correct;

   - we make a variable equal to our selected button and then.

   - we want to check the dataset.correct on selectedButton

   - from here we need a few things done:


 - we need to set the status class of our body and so to do that:

   - we create a function:

   - setStatusClass(document.body, correct) {}

     - this function takes a parameter of the document.body and

     - it takes whether or not it is actually set to correct or wrong


 - Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);

   - we need to loop through our other different buttons and select 
      and set a class for them too


   - reason we convert this to an Array is because:

     - answerButtonElement.children is returning a live collection

     - this is not technically an array and it updates on its own

       - we need to convert it to an array to use it with forEach loops


  - forEach(button) => {setStatusClass(button, button.dataset.correct);}

    - takes all of our different buttons and we want to set
       the status for each of them 

       - this will set the status according to whether the selected
          answer was the correct answer or not

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////


-- resetState function

 - this will reset everything related to our form, 

   - the questions, the body, the answers, all back to default state

   - and this will happen every time we set a new answer


 - while loop explained:

   - loop through all children for answer button elements


   - while (answerButtonElement.firstChild) 

     - essentially means: if there is a child in the answer button
        element: we want to remove it:

     - answerButtonElement.removeChild(answerButtonElement.firstChild)







*/
