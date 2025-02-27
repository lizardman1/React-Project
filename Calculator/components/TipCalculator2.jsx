import React, { useState } from 'react';
import TipButton from './TipButton';
import CustomButton from './CustomButton';

export function TipCalculator2({ setTotal, setTip }) {
    const [amount, setAmount] = useState('');
    const [persons, setPersons] = useState('1');
    const [service, setService] = useState('Select');
    const [showEach, setShowEach] = useState(false);
    const [customValue, setCustomValue] = useState('');

    function setservice(percent) {
        setService(percent);
        setCustomValue('');
    }

    const handleCustomService = (value) => {
        setService(value);
        setCustomValue(value);
    };

    const calculateTip = () => {
        if (isNaN(amount) || isNaN(persons) || service === 'Select') {
            alert('Please enter valid values');
            return;
        }

        const numPersons = parseInt(persons, 10);
        const tipPercentage = parseFloat(service);

        if (numPersons === 1) {
            setShowEach(false);
        } else {
            setShowEach(true);
        }

        const totalTip = amount * (tipPercentage / 100);
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
                    id="amount"
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    className='p-2 bg-[#f2f7fa] text-right'
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label htmlFor="service">Tip Amount %</label>
                <div className="grid grid-cols-3 gap-1 max-w-md" id="service">
                    {[5, 10, 15, 20, 25].map((s) => (
                        <TipButton key={s} checked={service == s} percent={s} setservice={setservice} />
                    ))}
                    <CustomButton setservice={handleCustomService} checked={service === customValue} />
                </div>

                <label htmlFor="persons">Number of People</label>
                <input
                    id="persons"
                    type="number"
                    placeholder='Number of Persons'
                    value={persons}
                    className='p-2 bg-[#f2f7fa] text-right'
                    onChange={(e) => setPersons(e.target.value)}
                />
            </div>
            <button onClick={calculateTip} className='bg-[#dada33] px-3 py-2 rounded-full font-semibold hover:bg-[#c2cd5f]'>Calculate</button>
        </div>
    );
}