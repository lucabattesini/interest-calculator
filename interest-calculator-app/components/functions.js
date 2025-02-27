export default function InterestCalculation(InitialInvestment, MonthlyInvestment, 
    AplicationPeriod, InterestRate) {

    const repetitions = AplicationPeriod
    let monthlyResult = []
    let interest = 0

    for (let i = 0; i < repetitions; i++) {
        interest += MonthlyInvestment 
        interest = InitialInvestment * InterestRate * 1

        monthlyResult.push(interest)
    }

    console.log(monthlyResult, interest)
}