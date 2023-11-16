
const btn = document.getElementById("btn")
const ageInput = document.getElementById("input")



btn.addEventListener("click",(event)=>{
    age= parseInt(ageInput.value);
    if (!isNaN(age)) {
        if (age >= 18) {
            console.log('You can drink.');
        } else {
            console.log('You are too young.');
        }
    }
})

ageInput.addEventListener("input", (event) => {
   
});
