import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TipCalculator } from '../components/TipCalculator'
import TipButton from '../components/TipButton'

function App() {
  return (
    <>
      <TipButton percent={40} name="tip" />
      <TipButton percent={50} name="tip" />
    
    <TipCalculator />

    </>
  )
}

export default App
