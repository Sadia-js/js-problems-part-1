function getOddAvg(numbers){
    let odd = [];
    for(const number of numbers){
        if(number % 2 !== 0){
           odd. push(number);
        }
    }
    return odd;
}

function sumOfOdd(numbers){
    let sum = 0;
    let avg;
    for(const num of numbers){
        sum = sum + num;
    }
    avg = sum / numbers.length;
    return avg;
}
const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const oddNumbs = getOddAvg(numbers); // [ 13, 65, 81 ]
const oddAvg = sumOfOdd(oddNumbs);
console.log('Odd Numbers array is', oddNumbs);
console.log('Average of the Odd Numbers is', oddAvg);