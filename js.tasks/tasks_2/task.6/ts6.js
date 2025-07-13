let id=Symbol('id');

let user= {

    name: "Harry",
    age: 25,
    [id]: 34567

};

//it is showing only name and age, but not id
for (let key in user){

    alert(key);
}

//here also
let keys=Object.keys(user);
alert(keys);

//but i can access the symbol
let sym=Object.getOwnPropertySymbols(user);
console.log(sym);