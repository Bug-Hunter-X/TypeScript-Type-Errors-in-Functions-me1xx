# TypeScript Type Errors

This repository demonstrates a simple example of type errors in TypeScript. The `bug.ts` file contains code that attempts to pass string arguments to functions expecting numbers.  The `bugSolution.ts` file provides a corrected version.

## Bug
The bug arises because the TypeScript compiler enforces type safety. The `add` and `subtract` functions are explicitly typed to accept only numbers. Passing strings violates this type constraint, leading to compilation errors.

## Solution
The solution involves ensuring that only numbers are passed to the functions. This can be achieved through explicit type checking, input validation, or using type guards.