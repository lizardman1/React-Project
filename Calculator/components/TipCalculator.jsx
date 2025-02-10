import React, { createContext, useContext, useState} from 'react'

export default function Calculator() {
  return (
    <div>Calculator</div>
  )
}

export function TipCalculator(){
    const [amount, setAmount] = useState('');
    const [persons, setPersons] = useState('1');
    const [service, setService] = useState('Select');
    const [total, setTotal] = useState(null);
    const [showEach, setShowEach] = useState(false);

    const calculateTip = () => {
        if (amount === '' || service === 'Select') {
          alert('Please enter values');
          return;
        }
    
        if (persons === '1')
          setShowEach(false);
        else
          setShowEach(true);
    
        const CalcTotal = (amount * service) / persons;
        setTotal(CalcTotal.toFixed(2));
      };

    return (
        <div>
            <input
                id = "amount"
                type = "number"
                placeholder= "enter amount"
                value = {amount}
                onChange={(e) => setAmount(e.target.value)} />
            <input 
                id = "persons"
                type = "number"
                placeholder='Number of persons'
                value={persons}
                onChange={(e) => setPersons(e.target.value)} />
            <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}>
                <option value="Select">Select</option>
                <option value="0.5">50%</option>
                <option value="0.25">25%</option>
                <option value="0.15">15%</option>
                <option value="0.1">10%</option>
                <option value="0.05">5%</option>
            </select>
            <button onClick={calculateTip}>Calculate</button>
            {showEach && <div>Each person should pay: {total}</div>}
            {total && (<div className='tip'><p>Total Tip: ${total}</p> </div>)}
        </div>
    );
}