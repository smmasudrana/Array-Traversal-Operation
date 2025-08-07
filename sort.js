const numbers = [6, 8, 9, 4, 5, 7, 3]
console.log(numbers);
numbers.sort();             //.sort() it will be sorted element serially.
console.log(numbers);


//sorting string
const friends =['dablu', 'bakkar', 'khablu', 'eunus', 'akib']
friends.sort();
console.log(friends);


//sorting advanced way 
const ages =[1, 5, 100, 10, 9, 7, 55, 32, 46, 26, 85, 63]
const sorted_ages =ages.sort(function (a, b) {return a-b})    //ascending
console.log(sorted_ages);

const sorted_ages_desc =ages.sort(function(a, b) {return b -a})    //descending
console.log(sorted_ages_desc)

