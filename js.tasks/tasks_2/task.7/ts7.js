// 1. Prompt the user for input like "12.345px"
let input = prompt("Enter a value like '12.345px':");

// 2. Parse the numeric part
let floatVal = parseFloat(input);
let intVal = parseInt(input);

alert(`Float value: ${floatVal}`);
alert(`Integer value: ${intVal}`);

// 3. Format 1234.5678 to two decimal places
let formatted = 1234.5678.toFixed(2);
alert(`Formatted number: ${formatted}`);
