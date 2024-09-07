// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// 75

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feet = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = `${feet} ft ${inchRemaining} inch.`; 
    return result;
}


const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);

// mile to km
function mileToKm(mile){
    const km = 1.60934 * mile;
    return km;
}
const kilometer = mileToKm(6);
console.log(kilometer);


