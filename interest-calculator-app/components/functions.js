export function interestCalculation(initialInvestment, monthlyInvestment, 
    aplicationPeriod,interestRate) {
    
    // Turning the function vars into real numbers
    const functionInitialInvestment = Number(initialInvestment)
    const functionMonthlyInvestment = Number(monthlyInvestment)

    // vars
    let i = 0
    // let fixValue = Number(functionInitialInvestment + functionMonthlyInvestment)
    let interestResult = Number(0)
    let addedValue = functionInitialInvestment

    interestRate = Number(interestRate / 100)

    // Loop
    while (aplicationPeriod > i) {
        addedValue = addedValue + functionMonthlyInvestment
        interestResult = addedValue * interestRate

        console.log(interestResult)

        addedValue = addedValue + interestResult

        i++;
    }

    return addedValue
}