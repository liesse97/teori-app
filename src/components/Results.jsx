import React from 'react'
import { useQuizContext } from '../contexts/QuizContext'


const Results = () => {
      const {result,totalQuestions,resetQuiz} = useQuizContext();

      let IncorrectQuestion = totalQuestions - result;
     let resultPercentage = (result / totalQuestions) * 100;
      let progress = 100 - resultPercentage;
      



    // Determine the class and text based on the result percentage
      let progressClass;
      let progressText;
      let progressTextClass;
      let txtChange = 'Failed'
        if (progress > 55){
            progressClass = 'stroke-current text-red-600 dark:text-red-500';
            progressText = 'text-center text-5xl font-bold text-red-600 dark:text-red-500';
            progressTextClass = "text-xl text-red-600 dark:text-red-500 block"
            
        } else if (progress => 55){
            progressClass = 'stroke-current text-green-600 dark:text-green-500';
            progressText = 'text-center text-5xl font-bold text-green-600 dark:text-green-500';
            progressTextClass = "text-xl text-green-600 dark:text-green-500 block"
            txtChange = 'Passed'


        }
return (
<main className="flex justify-center items-center flex-col text-center">
<section className ="w-90 border-2 border-solid rounded-2xl shadow-2xl p-5 "> 

    <h2 className='text-2xl font-bold pt-2'>Results</h2>
    <div className="my-20">

    {/*  Circular Progress */}
<div class="relative size-60  mx-auto">
<svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

{/*Background Circle */}
<circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
  
    {/*Progress Circle */}
<circle cx="18" cy="18" r="16" fill="none" class={progressClass} stroke-width="2" stroke-dasharray="100" stroke-dashoffset={progress} stroke-linecap="round"></circle>
</svg>

{/*Percentage Text */}
<div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
<span class={progressText}>{resultPercentage}%</span>
    <span class={progressTextClass}>{txtChange}</span>

</div>
</div>
{/* End Circular Progress */}

    </div>

    <p className="border-2 border-solid rounded-2xl p-2 mb-5 bg-green-200">Correct Answers  {result}</p>
    <p  className="border-2 border-solid rounded-2xl p-2 bg-red-200">Incorrect Answers {IncorrectQuestion}</p>

<div className="items-center my-20">
    <button 
    className="w-40 border-2 border-solid px-4 py-2 rounded-full cursor-pointer"
    onClick={resetQuiz}>
        Retry
        </button>
</div>

</section>
</main>

)
}

export default Results
