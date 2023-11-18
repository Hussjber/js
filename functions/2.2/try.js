const jobTitle = "programmer";
const currlocation = "New your";
const partnerName = "Rana";
const numberOfChildren = 2;
function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `you will be ${jobTitle} in ${currlocation} married to ${partnerName} with ${numberOfChildren} childrens`
}

let info = tellFortune(jobTitle, currlocation, partnerName, numberOfChildren)
console.log('', info)