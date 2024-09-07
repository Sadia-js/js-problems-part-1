/**
 * array has some duplicates elements  
 * []
 */ 

const students = ['abul', 'fahad', 'sadia', 'abul', 'kabul', 'sadia', 'dabul', 'ema', 'fahad'];

const numbers = [21, 89, 56, 21, 9, 56, 89, 10, 76];

function noDuplicate(array){
    const unique = [];
    for(const arr of array){
        if(!unique.includes(arr)){
            unique.push(arr);
        }
   }
   return unique;
}

const uniqueArray = noDuplicate(students);
const numbsArray = noDuplicate(numbers);
// console.log(uniqueArray);
console.log(numbsArray);