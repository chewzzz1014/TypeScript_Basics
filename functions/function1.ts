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
    ()
}

function fn(ctor: SomeConstructor) {
    return new ctor('Hello')
}