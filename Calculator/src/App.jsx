import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TipCalculator } from '../components/TipCalculator'
import { Route, Routes } from 'react-router-dom'
import TestTip from '../pages/TestTipCalculator'
import TipButton from '../components/TipButton'

export default function App() {
  return (
    <>
      {/* <TipButton percent={40} name="tip" />
      <TipButton percent={50} name="tip" />
    
    <TipCalculator /> */}

      <Routes>
        <Route index element={<TipCalculator />} />
        <Route path="/TestTipCalc" element={<TestTip />} />
        <Route path="/tipbutton" element={<TipButton percent={40}/>} />
      </Routes>
    </>
  )
}