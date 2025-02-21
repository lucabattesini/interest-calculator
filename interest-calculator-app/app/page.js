

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
              <input className="initialInvestment" placeholder="Type"></input>

              <label for="investment">Monthly investment</label>
              <input className="monthlyInvestment" placeholder="Type"></input>
            </div>
            <div className="secondLine">
              <label for="investment">Aplication period</label>
              <input className="aplicationPeriod" placeholder="Type"></input>
              
              <label for="investment">Interest rate</label>
              <input className="interestRate" placeholder="Type"></input>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}