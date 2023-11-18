let numSiblings = prompt('How many siblings do you have?');
numSiblings = parseInt(numSiblings);

if (numSiblings === 1) {
    console.log('1 sibling!', numSiblings);

} else if (numSiblings > 1) {
    console.log(`More than 1 sibling in case ${numSiblings} is greater than 1`);
}
else {

    console.log('No siblings');
}