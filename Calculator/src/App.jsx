import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import TestTip from '../pages/TestTipCalculator'
import { TipCalculator } from '../components/TipCalculator'


function App() {
  return (
    <TipCalculator />

    /*<Router>
      <Switch>
        <Route path="/Test" component={TestTip} />
      </Switch>
    </Router>
  */);
}

export default App
