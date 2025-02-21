

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
              <input className="initialInvestment"></input>
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