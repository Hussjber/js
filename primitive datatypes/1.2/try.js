/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b)string

1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/

const pizza = 9;
console.log('pizza:', pizza)
const pepsi = 5;
console.log('pepsi:', pepsi)
const burger = 12;
console.log('burger:', burger)

totalBill = burger + pizza + pepsi;
console.log('totalBill:', totalBill)

const tax=0.17
console.log('tax:', tax)
const totalBillAfterTax=totalBill+(totalBill*tax)
console.log('totalBillAfterTax:', totalBillAfterTax)


