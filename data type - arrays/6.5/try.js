
// Fill an array with 100 of the same object using the array fill
// method.


const exampleObject = { key: 'value' };

const arrayWithSameObject = Array(100).fill({ ...exampleObject });

console.log(arrayWithSameObject);


// . Create an array with numbers ranging from 1-100 using
// the Array.from method.
let array1 = [];

const arrayOfNumbers = Array.from({ length: 100 }, (_, index) => {
  array1.push(index + 1);
});

console.log(array1);


