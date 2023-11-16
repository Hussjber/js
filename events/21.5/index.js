// 1-creat web page -v
// 2-user can choose the nubmer-v
// on button click

// 2.1 get the value from the input -v
// 2.2 add the container to html this will host a new elemnts
// 2.3 get the smily
// 2.4 attach event lisetner to button
// 2.5.1 write funcntion isnide the event
// 2.5.2creat the same amount of elements







const input = document.querySelector("input")
const smily = document.querySelector("#smily")
const btn = document.querySelector("button")

let inputNum;
input.addEventListener("input", (event) => {
    inputNum = parseInt(event.target.value);


});

btn.addEventListener("click", (event) => {
    smily.innerHTML = " ";
    while (inputNum > 0) {
        // Create elements
        const p = document.createElement("p");
        p.innerText = "smily";
        smily.append(p);
        inputNum -= 1;
    }
});






