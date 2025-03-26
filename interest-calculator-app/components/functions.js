export function interestCalculation(initialInvestment, monthlyInvestment, 
    aplicationPeriod,interestRate) {
    
    // Turning the function vars into real numbers
    const functionInitialInvestment = Number(initialInvestment)
    const functionMonthlyInvestment = Number(monthlyInvestment)

    // vars
    let i = 0
    let fixValue = Number(functionInitialInvestment + functionMonthlyInvestment)
    let interestResult = Number(0)

    interestRate = Number(interestRate / 100)

    // Loop
    while (aplicationPeriod >= i + 2) {
        interestResult = fixValue * interestRate

        fixValue = fixValue + interestResult + functionMonthlyInvestment
        i++;
    }

    return fixValue
}