

export default function MainPage() {
  return (
    <body>
      <main>
        <div className="mainDiv">
          <h1>Investment calculator</h1>
          Initial Investment
          <br/>
          <input className="initialInvestment"></input>
          <input className="monthlyInvestment"></input>
          <input className="aplicationPeriod"></input>
          <input className="interestRate"></input>
        </div>
      </main>
    </body>
  );
}