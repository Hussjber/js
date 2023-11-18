

let radius=5

function calc(radius) {
    
    const area = Math.PI * Math.pow(radius, 2);
    return area

}

let circle=calc(radius).toFixed(2)
console.log('circle:', circle)