//1. Variables and Data Types
let name = "Jarett";
let age = 20;
let isStudent = true;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

//2. Basic Arithmetic Operations
let num1 = 52;
let num2 = 85;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

//3. Working with Strings
let sentence = "I like the San Fransisco 49ers!";
console.log("Length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

//4. Math Object
let negativeNum = -10;
console.log("Square root:", Math.sqrt(Math.abs(negativeNum)));
console.log("Squared:", Math.pow(negativeNum, 2));
console.log("Absolute value:", Math.abs(negativeNum));

//5. Boolean Logic and Comparison
let a = 9;
let b = 21;

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a === b:", a === b);

//6. Logical Operators
let hasFootball = true;
let hasBasketball = false;

console.log("AND:", hasFootball && hasBasketball);
console.log("OR:", hasFootball || hasBasketball);
console.log("NOT hasBasketball:", !hasBasketball);

//7. Using Template Literals
let firstName = "Jarett";
let lastName = "Blansett";

let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);