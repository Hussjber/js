const storm = {
    superPower: "flying",
    print: printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

console.log(storm.print());