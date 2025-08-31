let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 },
  { name: "David", age: 35 },
  { name: "Eve", age: 28 },
  { name: "Frank", age: 30 },
];

let oldest = people.reduce((max, person) => person.age > max.age ? person : max, people[0]);
console.log(oldest);