const nbYear = (population, percent, migrationRate, populationTarget) => {
    let years = 0
    const decPercent = (percent/100) + 1
    while (population < populationTarget && population > 0){
        population = population * decPercent + migrationRate
        years++
        console.log(population)
        // console.log(years)

    }
    population = Math.floor(population)
    return `${population} total population, after ${years} years`
}

console.log(nbYear(1000, 2, 50, 1200))