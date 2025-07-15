let arr = [88, 76, 92, 45, 67];

let below_50 = arr.some(score => score < 50);
console.log(below_50);

let aboveOrequal_75 = arr.every(score => score >= 75);
console.log(aboveOrequal_75);
