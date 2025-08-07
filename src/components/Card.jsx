import {useState } from 'react'
import { useQuizContext } from '../contexts/QuizContext'
import data from '../assets/data/data.js'
import BtnCard from './BtnCard.jsx';




const Card = () => {
const {
    questionNumber,
    totalQuestions,
    questionIndex,
    optionIndex,
    AnswerQuestions,
    progressBar,
    isCorrect
} = useQuizContext();

let progress = 25;

return (

<div className="flex justify-center items-center flex-col h-full ">
<div className ="w-90 border-2 border-solid rounded-2xl shadow-2xl p-5"> 

{/* Display the current question number and total questions */}
<p> Question {questionNumber} of {totalQuestions}</p>

{/* Display the progress bar */}
<div class="mt-3">
<div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div 
style={{ width: `${progressBar}%` }} 
class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"></div>
</div>
</div>


{/* Display the current question text and image */}
<h1 className ="text-3xl font-bold mt-5">{data[questionIndex].question}</h1>

<img 
className =" h-60 m-auto  my-4"  alt="Traffic sign"
src = {`/image/${data[questionIndex].image}`}
/>

<ul className='flex gap-3 flex-col mt-7'>

{data[questionIndex]?.options?.map((option)=>{
console.log('option', option.isCorrect)

// Determine the class for each option based on whether it is selected and correct

let optionClass = 'border-2 border-solid rounded-2xl p-2 py-3 text-l font-semibold'
if ((optionIndex === option.key)  && isCorrect === true || (option.isCorrect === true && optionIndex !== null)) {
optionClass +=  ' bg-green-700 text-white';
} else if (optionIndex === option.key && isCorrect == false) {
optionClass +=  " bg-red-700 text-white";

} else if (optionIndex !== null && optionIndex !== option.key){
optionClass += " bg-gray-300 text-black cursor-not-allowed opacity-50";
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

<BtnCard />

</div>
</div>
)
}

export default Card
