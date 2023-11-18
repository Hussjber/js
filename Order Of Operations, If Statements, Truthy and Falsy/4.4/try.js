function boomText(n, current = 1) {
    if (current <= n) {
        if (current % 7 === 0 && current.toString().includes('7')) {
            console.log("BOOM-BOOM");
        } else if (current % 7 === 0) {
            console.log("BOOM");
        } else {
            console.log(current);
        }
        boomText(n, current + 1);
    }
}


const n = 18; 
boomText(n);
