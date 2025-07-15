let user = [
  { name: "Helga", age: 18 },
  { name: "Frank", age: 23 },
  { name: "Charlie", age: 17 }
];

user.sort((a, b) => a.age - b.age);

console.log(user);
