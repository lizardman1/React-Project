import React, { createContext, useContext, useState} from 'react'
import TipButton from './TipButton';
import CustomButton from './CustomButton';

export function TipCalculator(){
  const [amount, setAmount] = useState('');
  const [persons, setPersons] = useState('1');
  const [service, setService] = useState('Select');
  const [total, setTotal] = useState(null);
  const [tip, setTip] = useState(null);
  const [showEach, setShowEach] = useState(false);

  function setservice(percent) {
    setService(percent)
  }


  const calculateTip = () => {

      if(isNaN(amount) || isNaN(persons) || isNaN(service) || amount >= 0){
        alert('Please enter valid values');
        return;
      }

      const numPersons = parseInt(persons, 10);
      const tipPercentage = parseFloat(service);

      if (numPersons === '1')
        setShowEach(false);
      else
        setShowEach(true);

      const totalTip = (amount * (tipPercentage/100));
      const tipPerPerson = totalTip / numPersons;
      const totalAmount = parseFloat(amount) + totalTip;
      const PersonsCalcTotal = totalAmount / numPersons;

      console.log(totalTip, tipPerPerson, totalAmount, PersonsCalcTotal);

      setTotal(totalAmount.toFixed(2));
      setTip(PersonsCalcTotal.toFixed(2));
    };

    return (
        <div className='p-6 flex flex-col gap-6 max-w-md mx-auto bg-white rounded-br-3xl'>
            <div className='flex gap-4 flex-wrap'>
            <label htmlFor="amount">Bill</label>
            <input
                id = "amount"
                type = "number"
                placeholder= "Enter Amount"
                value = {amount}
                className='p-2 bg-[#f2f7fa] text-right rounded-sm'
                onChange={(e) => setAmount(e.target.value)} />

            <label htmlFor="service">Tip Amount %</label>
            <div className="w-full grid grid-cols-3 gap-1"
                        id="service"
                        onChange={(e) => setService(e.target.value)}>
            
                          {
                            [5,10,15,20,25].map(s =>   <TipButton key={s} checked={service == s } percent={s} setservice={setservice} /> )
                          }
                      
                          <CustomButton percent={<input className="w-full" />} setservice={setservice}/> 
                        </div>

            <label htmlFor="persons">Number of People</label>
            <input 
                id = "persons"
                type = "number"
                placeholder='Number of Persons'
                value={persons}
                className='p-2 bg-[#f2f7fa] text-right rounded-sm'
                onChange={(e) => setPersons(e.target.value)} />
            </div>
            <button onClick={calculateTip} className='bg-[#dada33] px-3 py-2 rounded-full fomt-semibold hover:bg-[#c2cd5f]'>Calculate</button>
            {showEach && (<div className='tip'><p>Total: ${total}</p> </div>)}
            {showEach && persons > 1 && <div>Each person should pay: {tip}</div>}
            </div>
            );
}