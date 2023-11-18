
// 1. Write the command to remove "Greg" from the array.
let people = ["Greg", "Mary", "Devon", "James"];

people.shift()

console.log('results:', people)

// 2. Write the command to remove "James" from the array.

people.pop()
console.log('results:', people)

// 3. Write the command to add "Matt" to the front of the array.

people.unshift("matt")
console.log('results:', people)

// 4.. Write the command to add your name to the end of the array
people.push("hussein")
console.log('results:', people)

// 5. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt"

const sliceCopy = people.slice(1, 3);
console.log('results:', sliceCopy);

// 6. Write the command that gives the indexOf where "Mary"is located.

console.log(people.indexOf("Mary"));

// 7. Write the command that gives the indexOf where "Foo" is located. What is returning? Why?

// returning -1 because theres no fool in array 

console.log(people.indexOf("Fool"));

// 8. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from the array and add
// "Elizabeth" and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].

let people1 = ["Greg", "Mary", "Devon", "James"];

people1.splice(2, 1, "Elizabeth", "Artie")

console.log(people1);

// 9. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".

let withBob=["bob"]
people.concat(withBob)

console.log(people.concat(withBob));