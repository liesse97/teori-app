import { useState } from 'react'
import Card from './components/Card'
import Results from './components/Results'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
     <Routes>
            <Route path="/results" element={<Results />} />

      <Route path="/" element={<Card />} />
    </Routes>

  )
}

export default App
