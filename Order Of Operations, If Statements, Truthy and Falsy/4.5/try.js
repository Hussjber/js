
const language = prompt("Enter the language of the country (e.g., English, Spanish, etc):");


const isIslandInput = prompt("Is the country an island? (true or false):");
const isIsland = isIslandInput === "true";


const populationInput = prompt("Enter the population of the country:");
const population = Number(populationInput); 


const country = prompt("Enter the name of the country:");


if (language === "English" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`);
}
