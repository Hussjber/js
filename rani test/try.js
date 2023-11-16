// Write a function repeatString that takes a string and a number n, and returns a new string by repeating the original string n times.




function repeatString(names, num) {
    // return names.repeat(num)
    let res = ""

    for (let i = 0; i < num; i++) {
       
        res += names
    }
    return res
}








// Examples
console.log(repeatString("abc", 3)); // Output: "abcabcabc"
console.log(repeatString("123", 5)); // Output: "123123123123123"