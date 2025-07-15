let arr=["Bloodhounds", "Mouse", "My Name", "House of Anubis", "Divergent"];

alert(arr[2]);

alert("the length before: "+ arr.length);

arr[0]="Game of Thrones"

arr.push("Superman","Goblin");
alert(arr);

arr.unshift("Alice in wonderland")
alert(arr);

arr.pop();
arr.shift();
alert(arr);

alert("the length after: "+ arr.length);

console.log(arr.slice(1,4));

console.log(arr.splice(1, 1, "Whiplash"));

arr.forEach(function(movie, index){
    alert(`${index}: ${movie}`);
});


let newArr = arr.map((movie, index) => `${index + 1}: ${movie}`);
alert(newArr); 
