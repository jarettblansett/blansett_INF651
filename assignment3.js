//1. Even Number Finder (While Loop)
console.log("Challenge 1: Even Number Finder");
let num = 1;
while (num <= 50) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

//2. PIN Validator (Do-While Loop)
console.log("\nChallenge 2: PIN Validator");
const correctPIN = "1234";
let userPIN;
do {
  userPIN = prompt("Enter your 4-digit PIN:");
} while (userPIN !== correctPIN);
console.log("✅ Access granted. Welcome!");

//3. Multiplication Table with Skips (For Loop + Continue)
console.log("\nChallenge 3: Multiplication Table with Skips");
const tableNum = parseInt(prompt("Enter a number for its multiplication table:"));
for (let i = 1; i <= 10; i++) {
  const product = tableNum * i;
  if (product % 5 === 0) continue;
  console.log(`${tableNum} x ${i} = ${product}`);
}

//4. Positive/Negative Number Checker (If-Else)
console.log("\nChallenge 4: Positive/Negative Number Checker");
const inputNum = parseFloat(prompt("Enter a number:"));
if (inputNum > 0) {
  console.log("The number is positive.");
} else if (inputNum < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//5. Month Finder (Switch Statement)
console.log("\nChallenge 5: Month Finder");
const monthNum = parseInt(prompt("Enter a number between 1 and 12:"));
let monthName;
switch (monthNum) {
  case 1: monthName = "January"; break;
  case 2: monthName = "February"; break;
  case 3: monthName = "March"; break;
  case 4: monthName = "April"; break;
  case 5: monthName = "May"; break;
  case 6: monthName = "June"; break;
  case 7: monthName = "July"; break;
  case 8: monthName = "August"; break;
  case 9: monthName = "September"; break;
  case 10: monthName = "October"; break;
  case 11: monthName = "November"; break;
  case 12: monthName = "December"; break;
  default: monthName = "Invalid input.";
}
console.log(monthName);
