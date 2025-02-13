import React from 'react'
import TipButton from '../components/TipButton'

export default function ButtonTest() {
  return (
    <>
    <TipButton percent={40}/>
    <TipButton percent={40}/>
    <TipButton percent={50}/>
    <TipButton percent={<input />}/>
</>
  )
}
