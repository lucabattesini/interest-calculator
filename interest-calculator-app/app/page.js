

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
              <input className="monthlyInvestment"></input>
            </div>
            <div className="secondLine">
              <input className="aplicationPeriod"></input>
              <input className="interestRate"></input>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}