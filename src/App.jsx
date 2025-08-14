import { useState } from 'react'
import Card from './components/Card'
import Results from './components/Results'
import { Routes, Route} from 'react-router-dom';
import WelcmScreen from './components/WelcmScreen';

function App() 
{


  return (
     <Routes>
      <Route path="/" element={<WelcmScreen />} />
     <Route path="/Questions" element={<Card />} />
      <Route path="/results" element={<Results />} />
    </Routes>

  )
}

export default App
