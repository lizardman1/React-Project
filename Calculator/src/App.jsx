import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import TestTip from '../pages/TestTipCalculator'
import { TipCalculator } from '../components/TipCalculator'
import TipButton from '../components/TipButton'


function App() {
  return (
    <>
      <TipButton percent={40} />
      <TipButton percent={50} />
    
    <TipCalculator />

    </>
  )
}

export default App
