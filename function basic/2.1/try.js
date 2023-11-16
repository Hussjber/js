const country = "Spain";
const population = 47;
const capitalCity = "Madrid";

function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const info = countryInfo(country, population, capitalCity);
console.log(info);


// Q2

const name = "Hussein";
const age = 24;
const idNumber = 331679225;


function infoid(name, age, idNumber) {
    return `My name is ${name} is and my age is  ${age} and this my idNumber is ${idNumber}`
}
const myInfo = infoid(name, age, idNumber)
console.log(myInfo);

