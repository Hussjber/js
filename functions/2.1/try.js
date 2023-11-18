const country = "Spain";
const population = 74;
const capitalCity = "Madrid";

function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people, and its capital city is ${capitalCity}`;
}

const info = countryInfo(country, population, capitalCity);
console.log('info:', info);
