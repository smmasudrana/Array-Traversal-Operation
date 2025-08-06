const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reversed =[]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    reversed.unshift(numbers[i]);
}
console.log(reversed);


//type 2
for (let j =numbers.length-1; j >=0; j--){
    console.log(numbers[j]);
    reversed.push(numbers[j]);
}

console.log(reversed);



//type 3 (for of)
for (const num of numbers){
    reversed.unshift(num) ;
}
console. log(reversed);


//with reverse
numbers.reverse();   //it will reverse element in any array.
const result = numbers.reverse();   //its also push in any const var or let.
