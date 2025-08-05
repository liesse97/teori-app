import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from '../assets/data/data.js'
import Results from '../components/Results.jsx';


// Create a context for the quiz
// This context will allow us to share quiz state and functions across components
export const QuizContext = createContext();

export const useQuizContext = () =>{
return useContext(QuizContext);
}

// Create a provider component
// This component will wrap around the parts of the app that need access to the quiz context

export const QuizProvider = ({children}) => {

const navigate = useNavigate();

const [questionIndex, setQuestionIndex] = useState(0);
const [isCorrect, setIsCorrect] = useState(null);  
const [optionIndex, setOptionIndex] = useState(null);  
const [result, setResult] = useState(0);




// Adjusting to display question number starting from 1
const questionNumber = questionIndex + 1; 
const totalQuestions = data.length;

function handleNext(){
if(questionIndex <data.length - 1){
    setQuestionIndex(prevIndex => questionIndex + 1); 
    setOptionIndex (null); // Reset option index for the next question
} else if (questionIndex === data.length - 1) {
    // At the end of the quiz here, show the results component
            navigate('/Results');

}
}

function handlePrevious(){
if (questionIndex>0){
setQuestionIndex(prevIndex => questionIndex - 1); 
}
}

function AnswerQuestions(option,key) {
// Check if the current question has a correct answer.
setOptionIndex(key);
setIsCorrect(option.isCorrect);
// If the answer is correct, increment the result count.
if (option.isCorrect=== true){
    setResult(prevResult => prevResult +1);
}
}


  return (
    <QuizContext.Provider value = {{
        questionNumber,
        totalQuestions,
        result,
        questionIndex,
        optionIndex,
        isCorrect,
        handlePrevious,
        handleNext,
        AnswerQuestions 

    }}>
      
{children}
    
</QuizContext.Provider>

  );
};