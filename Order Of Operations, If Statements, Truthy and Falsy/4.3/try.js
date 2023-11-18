
const johnScores = [89, 120, 103];


const mikeScores = [116, 94, 123];


const maryScores = [97, 134, 105];


const johnAverage = (johnScores[0] + johnScores[1] + johnScores[2]) / 3;
const mikeAverage = (mikeScores[0] + mikeScores[1] + mikeScores[2]) / 3;
const maryAverage = (maryScores[0] + maryScores[1] + maryScores[2]) / 3;


console.log("John average score: " + johnAverage);
console.log("Mike average score: " + mikeAverage);
console.log("Mary average score: " + maryAverage);


if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log("John team wins" + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log("Mike team wins" + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log("Marys team wins" + maryAverage);
} else {
    console.log("Its a draw!" + johnAverage);
}
