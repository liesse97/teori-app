import React from 'react'
import { useQuizContext } from '../contexts/QuizContext'


const BtnCard = () => {
  const {optionIndex,handlePrevious,handleNext,} = useQuizContext();

  return (
    <div className='flex justify-between mt-10'>
<button 
className='bg-gray-400 text-xl text-white font-semibold py-2 px-6 rounded-lg'
onClick={handlePrevious}
> 
Previous 
</button>
<button 
className={`text-xl text-white font-semibold py-2 px-6 rounded-lg ${
optionIndex === null ? "bg-gray-400 cursor-not-allowed" : "bg-green-700"}`}
onClick={handleNext}
disabled={optionIndex === null}
>
Next 
</button>

</div>
  )
}

export default BtnCard
