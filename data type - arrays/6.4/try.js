let populations = [100000, 50000, 20000, 30000];

function populationPercentages(population) {
    let percentages = [];

    let sumPop = population.reduce((acc, curr) => acc + curr, 0)

    for (let i = 0; i < population.length; i++) {

        let percentage = (population[i] / sumPop ) * 100;

        percentages.push(percentage)

    }

    return percentages;


}
console.log(populationPercentages(populations));
