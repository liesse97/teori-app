import React from 'react'
import { useQuizContext } from '../contexts/QuizContext'
import '../components/Card.css'

const WelcmScreen = () => {
    const {handleDataLength} = useQuizContext();
return (
<div>
<main className="flex justify-center items-center flex-col text-center">
<section className ="w-90 border-2 border-solid rounded-2xl shadow-2xl p-5 ">
<p className='pb-11 font-semibold'>Theory Test</p>
<img src="/image/Welcom.png" 
alt="welcome"
className='w-50 h-50 mx-auto my-5 rounded-4xl' />
<h1 className='text-4xl font-bold pt-6 pb-3.5'>Welcome</h1>
<p className='text-xl'>
    An app to help you prepare for your driving theory exam.
</p>
<p className='text-l mt-10'> How many questions do you want to tackle?</p>

<div className='flex justify-center items-center flex-col mt-6 mb-10'>

 {/* Build function to handle button (send number)*/}
<button
class='btnDataLegnth'
onClick={() => handleDataLength(5)}
> 5 Questions</button>

<button
class='btnDataLegnth'
onClick={() => handleDataLength(10)}
> 10 Questions</button>

<button
class='btnDataLegnth'
onClick={() => handleDataLength(20)}
> 20 Questions</button>

</div>

</section>
</main>

</div>
)
}

export default WelcmScreen
