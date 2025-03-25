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
  const handleChange = (event) => {
    setInitialInvestment(event.target.value); // Atualiza o estado da const com o valor do input
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
              type="number" value={initialInvestment} onChange={handleChange}/>
              <p> Seu numero é {initialInvestment}</p>

              <label>Monthly investment</label>
              <input className="monthlyInvestment" type="number" placeholder="0,00"></input>
            </div>

            <div className="secondLine">
              <label>Aplication period</label>
              <input className="aplicationPeriod" type="number" placeholder="0"></input>
              
              <label>Interest rate</label>
              <input className="interestRate" type="number" placeholder="0,00%"></input>
            </div>
          </div>

          <div className="submitButton">
              <button>Calculate</button>
          </div>
        </div>
      </main>
  );
}