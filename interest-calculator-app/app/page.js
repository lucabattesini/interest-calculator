

export default function MainPage() {
  return (
    <body>
      <main>
        <div className="mainDiv">
          <div className="header">
            <h1>Investment calculator</h1>
          </div>
          <div className="components">
            <div className="firstLine">
              <label for="investment">Initial investment</label>
              <input className="initialInvestment" placeholder="0,00"></input>

              <label for="investment">Monthly investment</label>
              <input className="monthlyInvestment" placeholder="0,00"></input>
            </div>
            <div className="secondLine">
              <label for="investment">Aplication period</label>
              <input className="aplicationPeriod" placeholder="0"></input>
              
              <label for="investment">Interest rate</label>
              <input className="interestRate" placeholder="0,00%"></input>
            </div>
          </div>
          <div className="submitButton">
              <button>Calculate</button>
          </div>
        </div>
      </main>
    </body>
  );
}