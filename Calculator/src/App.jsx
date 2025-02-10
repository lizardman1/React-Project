import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TipButton from '../components/TipButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TipButton percent={40} />
      <TipButton percent={50} />
    </>
  )
}

export default App
