import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../assets/data/data.js'


// Create a context for the quiz
// This context will allow us to share quiz state and functions across components
export const QuizContext = createContext();

//Custom hook to use the QuizContext
export const useQuizContext = () =>{
return useContext(QuizContext);
}

// Create a provider component
// This component will wrap around the parts of the app that need access to the quiz context

export const QuizProvider = ({children}) => {

  // Use the useNavigate hook to programmatically navigate between routes
const navigate = useNavigate();

// State variables to manage quiz data
const [questionIndex, setQuestionIndex] = useState(0); // Current question index
const [isCorrect, setIsCorrect] = useState(null);  // Whether is the answer correct or not
const [optionIndex, setOptionIndex] = useState(null);   // Index of the selected option
const [result, setResult] = useState(0); // Number of correct answers




// Adjusting to display question number starting from 1
let questionNumber = questionIndex + 1; 
const totalQuestions = data.length;
let IncorrectQuestion = totalQuestions - result;
let resultPercentage = (result / totalQuestions) * 100;


// Function to handle the next question
function handleNext(){
if(questionIndex <data.length - 1){
    setQuestionIndex(prevIndex => questionIndex + 1); 
    setOptionIndex (null); // Reset option index for the next question
} else if (questionIndex === data.length - 1) {
    // At the end of the quiz here, show the results component
      navigate('/Results');

}
}

// Function to handle the previous question. Maybe not needed??
function handlePrevious(){
if (questionIndex>0){
setQuestionIndex(prevIndex => questionIndex - 1); 
}
}

// Function to handle answering a question
function AnswerQuestions(option,key) {
// Check if the current question has a correct answer.
setOptionIndex(key);
setIsCorrect(option.isCorrect);
// If the answer is correct, increment the result count.
if (option.isCorrect=== true){
    setResult(prevResult => prevResult +1);
}

}

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
        result,
        IncorrectQuestion,
        resultPercentage,
        resetQuiz,
        handlePrevious,
        handleNext,
        AnswerQuestions 

    }}>
      
{children}
    
</QuizContext.Provider>

  );
};