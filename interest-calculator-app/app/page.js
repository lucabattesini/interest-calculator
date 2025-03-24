
'use client';

import {InterestCalculation} from "../components/functions";
import { useState } from "react";

export default function MainPage() {
  // Estado
  // Onclick functions
  const [initialInvestment, setInitialInvestment] = useState(0)

  return (
      <main>
        <div className="mainDiv">
          <div className="header">
            <h1>Investment calculator</h1>
          </div>
          <div className="components">
            <div className="firstLine">
              <label>Initial investment</label>
              <input className="initialInvestment" type="number" placeholder="0,00"></input>

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