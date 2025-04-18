// Indicate that this is a client component
'use client';

// Import the main function
import {interestCalculation} from "../components/functions";
import { useState } from "react";

export default function MainPage() {
  // Estado
  // Onclick functions

  // Declare the the main input vars
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [aplicationPeriod, setAplicationPeriod] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  // Button const
  const [resultButton, setResultButton] = useState(null);

  // Will be called when the user type in the input
  const handleInitialInvestmentChange = (event) => setInitialInvestment(event.target.value); // Update the const status with the input value
  const handleMonthlyInvestmentChange = (event) => setMonthlyInvestment(event.target.value);
  const handleAplicationPeriodChange = (event) => setAplicationPeriod(event.target.value);
  const handleInterestRateChange = (event) => setInterestRate(event.target.value);

  // Button function
  const handleButtonClick = () => {
    setResultButton(interestCalculation(initialInvestment, 
      monthlyInvestment, aplicationPeriod,interestRate));
  };

  // Main page html
  return (
      <main>
        <div className="mainDiv">
          <div className="header">
            <h1>Investment calculator</h1>
          </div>

          <div className="components">
            <div className="firstLine">
              <label>Initial investment</label>
              <input className="initialInvestment" placeholder="0,00" 
              type="number" value={initialInvestment} onChange={handleInitialInvestmentChange}/>

              <label>Monthly investment</label>
              <input className="monthlyInvestment" placeholder="0,00" 
              type="number" value={monthlyInvestment} onChange={handleMonthlyInvestmentChange}/>
            </div>

            <div className="secondLine">
              <label>Application period</label>
              <input className="aplicationPeriod" placeholder="0" 
              type="number" value={aplicationPeriod} onChange={handleAplicationPeriodChange}/>
              
              <label>Interest rate</label>
              <input className="interestRate" placeholder="0,00%"
              type="number" value={interestRate} onChange={handleInterestRateChange}/>
            </div>
          </div>

          <div className="submitButton">
              <button onClick={handleButtonClick}>Calculate</button>
          </div>
          <div className="result">
            {resultButton && resultButton.addedValue !== null && <h2 className="mainInfo">Valor total final: <br/>R${resultButton.addedValue.toFixed(2)}</h2>}
            {resultButton && resultButton.totalInterest !== null && <h2 className="mainInfo">Valor em juroz: <br/>R${resultButton.totalInterest.toFixed(2)}</h2>}
            {resultButton && resultButton.totalInvested !== null && <h2 className="mainInfo">Valor investido: <br/>R${resultButton.totalInvested.toFixed(2)}</h2>}
          </div>
        </div>
      </main>
  );
}