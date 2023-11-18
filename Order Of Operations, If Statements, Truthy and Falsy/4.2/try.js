let grade = prompt('Whats your grade?');

grade = parseInt(grade);

if (grade >= 0 && grade <= 64) {
    console.log('F:', grade);
} else if (grade >= 65 && grade <= 69) {
    console.log('D:', grade);
} else if (grade >= 70 && grade <= 79) {
    console.log('C:', grade);
} else if (grade >= 80 && grade <= 89) {
    console.log('B:', grade);
} else if (grade >= 90 && grade <= 100) {
    console.log('A:', grade);
} else {
    console.log('Invalid ');
}
