let price = 25;
let comp_price = price;

price =20;
comp_price=15;                    //it never impact main price its change induvidually.

console.log(price);
console.log(comp_price);


//with array its change both when you change any.
const products = [25, 25, 25]
const comp_products=products;

products[0]=15;
comp_products[1]=50;              //if you change anything it will change both elements.

console.log(products);
console.log(comp_products);


//solve this problem i mean when i copy array its dosen't change anything other array.
const medicines = [25, 25, 25]
const comp_medicines=medicines;

for(const medicine of medicines){        //declare new name medicine and push all medicines to medicine array.
    comp_products.push(medicine);
}

medicines[0]=15;
comp_medicines[1]=50;    

console.log(medicines);
console.log(comp_medicines);


//type 2 to solve this problem. shortcut
const numbers = [1, 2, 3, 4, 5]

const new_numbers=Array.from(numbers);
// const new_numbers= [].concat(numbers);    //with concat.
// const new_numbers=[...numbers]   //another type.


new_numbers.push(100);

console.log(numbers);
console.log(new_numbers);




