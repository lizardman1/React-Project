import React, { createContext, useContext, useState} from 'react'


export function TipCalculator(){
  const [amount, setAmount] = useState('');
  const [persons, setPersons] = useState('1');
  const [service, setService] = useState('Select');
  const [total, setTotal] = useState(null);
  const [tip, setTip] = useState(null);
  const [showEach, setShowEach] = useState(false);

  const calculateTip = () => {

      if(isNaN(amount) || isNaN(persons) || isNaN(service)){
        alert('Please enter valid values');
        return;
      }

      const numPersons = parseInt(persons, 10);
      const tipPercentage = parseFloat(service);

      if (numPersons === '1')
        setShowEach(false);
      else
        setShowEach(true);

      const totalTip = (amount * tipPercentage);
      const tipPerPerson = totalTip / numPersons;
      const totalAmount = parseFloat(amount) + totalTip;
      const PersonsCalcTotal = totalAmount / numPersons;

      console.log(totalTip, tipPerPerson, totalAmount, PersonsCalcTotal);

      setTotal(totalAmount.toFixed(2));
      setTip(PersonsCalcTotal.toFixed(2));
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
                className='p-2 bg-[#f2f7fa] text-right'
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
                className='p-2 bg-[#f2f7fa] text-right'
                onChange={(e) => setPersons(e.target.value)} />
            </div>
            <button onClick={calculateTip} className='bg-[#dada33] px-3 py-2 rounded-full fomt-semibold hover:bg-[#c2cd5f]'>Calculate</button>
            {showEach && (<div className='tip'><p>Total: ${total}</p> </div>)}
            {showEach && persons > 1 && <div>Each person should pay: {tip}</div>}
            </div>
            );
}