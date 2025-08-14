import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../assets/data/data.js'
import { getItem,setItem } from '../utils/localeStorage.jsx'


// This context will allow us to share quiz state and functions across components
export const QuizContext = createContext();

//Custom hook to use the QuizContext
export const useQuizContext = () =>{
return useContext(QuizContext);
}

// This component will wrap around the parts of the app that need access to the quiz context

export const QuizProvider = ({children}) => {

// Use the useNavigate hook to programmatically navigate between routes
const navigate = useNavigate();




// State variables to manage quiz data
const [isCorrect, setIsCorrect] = useState(null);  // Whether is the answer correct or not
const [optionIndex, setOptionIndex] = useState(null); 
const [dataLength, setDataLength] = useState(0); // Total number of questions
const [randomIndexes, setRandomIndexes] = useState([]); // Randomly selected question indexes
const [questionIndex, setQuestionIndex] = useState(0); // Current question index

let newIndex = randomIndexes[questionIndex]; // Choose index utifrån Randomly selected questions // better way to do it?

// Adjusting to display question number starting from 1
let questionNumber = questionIndex + 1; 
const totalQuestions = dataLength;
let progressBar = questionNumber / totalQuestions * 100; // Calculate progress bar percentage


  // Local storage to save the result even after page refresh
//Easier way
  /*const [result, setResult] = useState(()=>{
return JSON.parse(localStorage.getItem('result')) || 0;
});*/


//Difficult way but more secure and robust.LocalStorage
const [result, setResult] = useState(()=>{
const item = localStorage.getItem('result');
return item? JSON.parse(item) : 0;
});// Number of correct answers

useEffect(() => {
 if (questionIndex === 0 && optionIndex === null) 
    {
      setResult(0); // Reset result when starting a new quiz
    }
  }, [questionIndex]);

// Effect to update the localStorage whenever the result changes
useEffect(() => {
 
  setItem('result', result);
}, [result]);

// Effect to navigate back to the home page if the user reloads the page

if (window.performance) {
   if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }
}


// This function will be called from the QuizStart component to set the number of questions
function handleDataLength(dtNumber){
setDataLength (dtNumber);
  navigate('/Questions')
}

// Effect to generate random indexes for questions based on the data length
  useEffect(() => {
    function getRandomIndexes(dataLength) {
      let indexes = [];
      while (indexes.length < dataLength) {
        let randomIndex = Math.floor(Math.random() * data.length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    }

    if (data.length >= dataLength) {
      setRandomIndexes(getRandomIndexes(dataLength));
    }
  }, [dataLength]);


// Function to handle the next question
function handleNext(){
if(questionIndex <dataLength - 1){
    setQuestionIndex(prevIndex => questionIndex+1); 
    setOptionIndex (null); // Reset option index for the next question
} else if (questionIndex === dataLength - 1) {
    // At the end of the quiz here, show the results component
      navigate('/Results');

}
}

/* Not longer used, but can be used if needed in the future*/
function handlePrevious(){
if (questionIndex>0){
setQuestionIndex(prevIndex => questionIndex - 1); 
}
}





// Function to handle answering a question
function AnswerQuestions(option,key) {
// only if no option is selected yet
  if (optionIndex === null) {
// Check if the current question has a correct answer.
setOptionIndex(key);
setIsCorrect(option.isCorrect);
// If the answer is correct, increment the result count.
if (option.isCorrect=== true){
    setResult(prevResult => prevResult +1);
}
}

}

// Function to reset the quiz
function resetQuiz() {
  setQuestionIndex(0);
  setIsCorrect(null);
  setOptionIndex(null);
  setResult(0);
  navigate('/'); // Navigate back to the quiz start
}


  return (
    <QuizContext.Provider value = {{
        questionNumber,
        totalQuestions,
        result,
        questionIndex,
        optionIndex,
        isCorrect,
        progressBar,
        dataLength,
        newIndex,
        resetQuiz,
        handlePrevious,
        handleNext,
        AnswerQuestions,
        handleDataLength

    }}>
      
{children}
    
</QuizContext.Provider>

  );
};