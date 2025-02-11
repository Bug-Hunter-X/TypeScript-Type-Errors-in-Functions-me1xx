function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); // Correct: result1 will be 8

let result2 = subtract(10, 5); // Correct: result2 will be 5

let result3 = add( "hello", " world"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.

let result4 = subtract(10, "5"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.