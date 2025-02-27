import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TipCalculator } from '../components/TipCalculator'
import { Route, Routes } from 'react-router-dom'
import TestTip from '../pages/TestTipCalculator'

import TipButton from '../components/TipButton'
import ButtonTest from '../pages/ButtonTest'
import Xtest from '../components/Xtest'
import TipComponentsCombined  from '../components/TipComponentsCombined'



export default function App() {
  return (
    <>
      {/* <TipButton percent={40} name="tip" />
      <TipButton percent={50} name="tip" />
    
    <TipCalculator /> */}

      <Routes>
        <Route index element={<TipComponentsCombined />} />
        <Route path="/TestTipCalc" element={<TestTip />} />
        <Route path="/tipbutton" element={<ButtonTest />}  />
      </Routes>
    </>
  )
}