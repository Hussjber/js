// Question 1:

// In your own words what will this point to and why?
// (Note this is the global scope)


console.log(this);


// it  will refers the upper of the parent and will open global scope
// you have to use it within function or object methods 

// Question 2:

// const myObj = {
//     name: "Timmy",
//     greet: () => {
//         console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();

// a. In your own words what will this point to and why?

// alos refers to the global scope because arrow function not working with this

// b. How can you fix this code?
const myObj = {
    name: "Timmy",
    greet: function() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();



// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};


