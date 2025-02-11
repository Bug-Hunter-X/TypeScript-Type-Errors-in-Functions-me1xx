function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); // Correct: result1 will be 8

let result2 = subtract(10, 5); // Correct: result2 will be 5

//Corrected code: Explicit type checking before calling the functions
let num1:number = parseFloat("5");
let num2:number = parseFloat("3");
if(isNaN(num1) || isNaN(num2)){
    console.log("Invalid input: Non-numeric values provided");
}else{
    let result3 = add(num1, num2); // Correct: result3 will be 8
    let result4 = subtract(10, num1); // Correct: result4 will be 5
}
//Alternative solution: Using Type Guard to handle possible string arguments
function isNumber(x: any): x is number{
    return typeof x === 'number'
}
function addOrSubtract(a: any, b: any, operation: string): number{
    if(isNumber(a) && isNumber(b)){
        if(operation === "add"){
            return a + b;
        }else if(operation === "subtract"){
            return a - b;
        }
    }else{
        throw new Error("Invalid input: Non-numeric values provided");
    }
}
let result5 = addOrSubtract(5,3, "add"); // Correct: result5 will be 8
let result6 = addOrSubtract(10, 5, "subtract"); // Correct: result6 will be 5
//let result7 = addOrSubtract("10", 5, "subtract"); //Throws error because of non numeric value
