/*
----------------Leap Year----------
1. Those year that is not divisible by 100 but divisible by 4 or only divible by 400
*/ 

function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return 'leap year';
    }
    return 'No leap year';
}

const leap1 = isLeapYear(2023);
const leap2 = isLeapYear(2024);
const leap3 = isLeapYear(2026);
const leap4 = isLeapYear(5050);
const leap5 = isLeapYear(1990);
console.log(leap1, ',', leap2, ',', leap3, ',', leap4, ',', leap5);