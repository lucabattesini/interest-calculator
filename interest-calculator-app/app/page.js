

export default function MainPage() {
  return (
    <body>
      <main>
        <div className="mainDiv">
          <div className="header">
            <h1>Investment calculator</h1>
          </div>
          <div className="components">
            Initial Investment
            <br/>
            <input className="initialInvestment"></input>
            <input className="monthlyInvestment"></input>
            <input className="aplicationPeriod"></input>
            <input className="interestRate"></input>
          </div>
        </div>
      </main>
    </body>
  );
}