// Indica que esse é um componente de cliente
'use client';

// Import the main function
import {InterestCalculation} from "../components/functions";
import { useState } from "react";

export default function MainPage() {
  // Estado
  // Onclick functions

  // Declare the the main input vars
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [aplicationPeriod, setAplicationPeriod] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  // Vai ser chamada quando o usuário digitar o input
  const handleInitialInvestmentChange = (event) => setInitialInvestment(event.target.value); // Atualiza o estado da const com o valor do input
  const handleMonthlyInvestmentChange = (event) => setInitialInvestment(event.target.value);
  const handleAplicationPeriodChange = (event) => setInitialInvestment(event.target.value);
  const handleInterestRateChange = (event) => setInitialInvestment(event.target.value);

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
              <label>Aplication period</label>
              <input className="aplicationPeriod" placeholder="0" 
              type="number" value={aplicationPeriod} onChange={handleAplicationPeriodChange}/>
              
              <label>Interest rate</label>
              <input className="interestRate" placeholder="0,00%"
              type="number" value={interestRate} onChange={handleInterestRateChange}/>
            </div>
          </div>

          <div className="submitButton">
              <button>Calculate</button>
          </div>
        </div>
      </main>
  );
}