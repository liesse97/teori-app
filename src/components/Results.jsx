import React from 'react'

const Results = () => {

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
<circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
</svg>

{/*Percentage Text */}
<div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
<span class="text-center text-5xl font-bold text-blue-600 dark:text-blue-500">85%</span>
    <span class="text-xl text-blue-600 dark:text-blue-500 block">Passed</span>

</div>
</div>
{/* End Circular Progress */}

    </div>

    <p className="border-2 border-solid rounded-2xl p-2 mb-5">Correct Answers  40</p>
    <p  className="border-2 border-solid rounded-2xl p-2">Incorrect Answers 10</p>

<div className="items-center my-20">
    <button className="w-40 bg-blue-500 text-white px-4 py-2 rounded-full">
        Retry
        </button>
</div>

</section>
</main>

)
}

export default Results
