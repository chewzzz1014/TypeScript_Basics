// function as parameter

// function type expression
function greeter(fn: (s: string) => void) {
    fn('Hello~~')
}

function printToConsole(s: string) {
    console.log(s)
}

greeter(printToConsole)

// function as type 
type GreetFunction = (s: string) => void
function greeterType(fn: GreetFunction) {
    // function declaration here 
}

//////////////////////////////////////////////////////////

// function with callable properties
type DescribableFunction = {
    desc: string, // properties of function
    (someArg: number): boolean, // function params and return type
}

function doSmth(fn: DescribableFunction) {
    console.log(`${fn.desc} returned ${fn(6)}`)
}

//////////////////////////////////////////////////////////

// function with constructor
type SomeConstructor = {
    new(s: string): string;    // constructor signature
    (n?: number): number;
}

function fn(ctor: SomeConstructor) {
    return new ctor('Hello')
}


/////////////////////////////////////////////////////////

// generic function 
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

// the type is inferred(chosen) automatically by TS

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// multiple type
function map<Input, Output>(arr: Input[], fn: (ele: Input) => Output): Output[] {
    return arr.map(fn)
}

console.log(map(['1', '2', '3'], (n) => parseInt(n)))