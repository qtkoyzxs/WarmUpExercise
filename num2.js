let people = [
  { name: "Kurt", age: 24 },
  { name: "Keana", age: 22 },
  { name: "Kirsten", age: 20 },
  { name: "Sean", age: 14 },
  { name: "Oscar", age: 12 }
];

let adults = people.filter(person => person.age >= 18);
console.log(adults);