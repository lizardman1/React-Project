import React, { createContext, useContext, useState} from 'react'

export default function Calculator() {
  return (
    <div>Calculator</div>
  )
}

export function TestTipCalculator(){
    const [amount, setAmount] = useState('');
    const [persons, setPersons] = useState('1');
    const [service, setService] = useState('Select');
    const [total, setTotal] = useState(null);
    const [showEach, setShowEach] = useState(false);

    const calculateTip = () => {

        console.log(amount, persons, service);

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
        <div className='p-6 flex flex-col gap-6 max-w-md mx-auto'>
            <div className='flex gap-4 flex-wrap'>
            <label htmlFor="amount">Bill</label>
            <input
                id = "amount"
                type = "number"
                placeholder= "Enter Amount"
                value = {amount}
                onChange={(e) => setAmount(e.target.value)} />

            <label htmlFor="service">Tip Amount %</label>
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

            <label htmlFor="persons">Number of People</label>
            <input 
                id = "persons"
                type = "number"
                placeholder='Number of Persons'
                value={persons}
                onChange={(e) => setPersons(e.target.value)} />
            </div>
            <button onClick={calculateTip} className='bg-[#dada33] px-3 py-2 rounded-full fomt-semibold'>Calculate</button>
            {showEach && <div>Each person should pay: {total}</div>}
            {total && (<div className='tip'><p>Total Tip: ${total}</p> </div>)}
            </div>
            );
}