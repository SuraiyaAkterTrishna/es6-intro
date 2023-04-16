const multiline = "There are some thing that \n"+
"I need to write in a single line \n"+
"but for the testing purpose I am writing in multiline\n"+
"to make muliline in single line";
// console.log(multiline);

// multiline with backtik
const newMultiLine = `I am very happy 
because now I can write multiline without 
any problem just with the backtik`;
// console.log(newMultiLine);

const a = 20; 
const b = 30;
const result = "The sum of: " + a + " and " + b + " is: " + (a+b);
// console.log(result);

const newResult = `The sum of ${a} and ${b} is: ${a+b}`;
console.log(newResult);