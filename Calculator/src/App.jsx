import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TipCalculator } from '../components/TipCalculator'
import { Route, Routes } from 'react-router-dom'
import TestTip from '../pages/TestTipCalculator'
import TipButton from '../components/TipButton'
import TipComponentsCombined from '../components/TipComponentsCombined'

export default function App() {
  return (
    <>
  <TipComponentsCombined />
    </>
  )
}