import {useState } from 'react'
import data from '../assets/data/data.js'

const Card = () => {
const [questionIndex, setQuestionIndex] = useState(0);
const [isCorrect, setIsCorrect] = useState(null);  
const [optionIndex, setOptionIndex] = useState(null);  


// Adjusting to display question number starting from 1
const questionNumber = questionIndex + 1; 
const totalQuestions = data.length;

function handleNext(){
    if(questionIndex <data.length - 1){
        setQuestionIndex(prevIndex => questionIndex + 1); 
        setOptionIndex (null); // Reset option index for the next question
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
}


return (
<div className="flex justify-center items-center flex-col h-full ">
<div className ="w-90 border-2 border-solid rounded-2xl shadow-2xl p-5"> 
<p> Question {questionNumber} of {totalQuestions}</p>
<h1 className ="text-4xl font-bold mt-5">{data[questionIndex].question}</h1>
<img 

className =" h-60 m-auto  my-4"  alt="Traffic sign"
src = {`/image/${data[questionIndex].image}`}
/>

<ul 
className='flex gap-3 flex-col mt-7'
>
    
{data[questionIndex]?.options?.map((option,key)=>{

// Determine the class for each option based on whether it is selected and correct
    let optionClass = 'border-2 border-solid rounded-2xl p-2 py-4 text-xl font-semibold'
    if ((optionIndex === option.key)  && isCorrect == true) {
        optionClass +=  ' bg-green-700 text-white';
    } else if (optionIndex === option.key && isCorrect == false) {
        optionClass +=  " bg-red-700 text-white";

    }
    return(
    <li 
    key={option.key} 
    className={optionClass}
    onClick={ ()=>AnswerQuestions(option,option.key)}
    >
{option.text}
</li>
    )
})}

</ul>

<div className='flex justify-between mt-10'>
<button 
className='bg-gray-400 text-xl text-white font-semibold py-2 px-6 rounded-lg'
onClick={handlePrevious}
> 
Previous 
</button>
<button 
className={`text-xl text-white font-semibold py-2 px-6 rounded-lg ${
    optionIndex === null ? "bg-gray-400 cursor-not-allowed" : "bg-green-700"
  }`}onClick={handleNext}
disabled={optionIndex === null}


>
Next 
</button>

</div>
</div>
</div>
)
}

export default Card
