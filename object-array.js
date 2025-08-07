const numbers =[1, 65, 6, 23, 64, 98]
const players =[{}, {}, {}]
const employees =[
    {name: 'ashik', designation:'content writer', salary:25000},
    {name: 'atik', designation:'devloper', salary:29000},
    {name: 'abdur rahim', designation:'digital marketer', salary:21000},
]

console.log(employees[1]);
console.log(employees[1].designation);


//with for
for (const emp of employees){
    const person =emp;
    const personInfo = person.name + ':' + person.salary;
    console.log(personInfo);
}