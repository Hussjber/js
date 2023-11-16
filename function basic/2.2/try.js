const jobTitle = "programmer";
const JobLocation = "New York";
const partnerName = "Rana";
const numberOfChildren = "2";

function tellFortune(jobTitle, JobLocation, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${JobLocation} married to ${partnerName} with ${numberOfChildren} children`;
}

const info = tellFortune(jobTitle, JobLocation, partnerName, numberOfChildren); 
console.log(info); 
