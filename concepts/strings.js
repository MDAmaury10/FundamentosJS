//strings en JavaScript
//Hello, I'm Amaury and I'm from Apizaco
let name = 'Amaury';
let city = 'Apizaco';
let message = "Hello, I'm " + name + " and I'm from " + city;
console.log(message);
message = 'Hello, I\'m ' + name + ' and I\'m from ' + city;
console.log(message);
//template literals
message = `Hello, I'm ${name} and I'm from ${city}`;
console.log(message);
//funciones para strings
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));