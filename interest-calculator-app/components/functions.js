export function interestCalculation(initialInvestment, monthlyInvestment, 
    aplicationPeriod,interestRate) {

    const repetitions = aplicationPeriod;
    let monthlyResult = [];
    let interest = 0;

    for (let i = 0; i < repetitions; i++) {
        interest += monthlyInvestment 
        interest = initialInvestment * interestRate * 1

        monthlyResult.push(interest)
    }
    return monthlyResult
}