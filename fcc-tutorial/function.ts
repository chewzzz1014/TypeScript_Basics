// function in ts
// diff ways to write function:
/*
    // specify params type and return type
    1. Generic Function
    2. Optional Params (Use ? before type to indicated optional)
    3. Required Params
    4. Rest Params (..args as array type)
*/

function addNumbers(a: number, b: number): number {
    return a + b
}

// arraw function 
const addNumbersArrow = (a: number, b: number): number => a + b

function addNumbersOptional(a: number, b: number, c?: number): number {
    // check for situatuon where c is zero (0 is falsy)
    return (c || c === 0) ? a + b + c : a + b
}

console.log(addNumbersOptional(2, 5))
console.log(addNumbersOptional(2, 3, 0))
console.log(addNumbersOptional(1, 2, 3))