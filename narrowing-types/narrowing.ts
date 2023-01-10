// to perform different operation based on params (of union type)

// if it's number, prepend with given number of spaces to input string
// if it's string, prepend to input string
function paddingLeft(padding: number | string, input: string): string {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input
    }
    return padding + input
}


////////////////////////////////////////////////////////////////

// truthiness narrowing
// using 'typeof' null results in object! Thus, use truthiness narrowing for truthy and falsy values 

function printAll(strs: string | string[] | null) {

    // string[]
    if (strs && typeof strs === 'object') {
        for (const s of strs)
            console.log(s)
    } else if (typeof strs === 'string') // able to handle empty string
    {
        console.log(strs)
    }
}


//////////////////////////////////////////////////////////////

// equality narrowing

// use equality checks for params of same type
function example(x: string | number, y: string | boolean) {

    // x and y are of same type
    if (x === y) {
        x.toUpperCase()
        y.toUpperCase()
    } else {
        console.log(x)  // x is number
        console.log(y)  // y is boolean
    }
}

// for the above printAll that uses equality narrowing
// did not ignore empty string
function printAll2(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            strs.forEach(s => console.log(s.toUpperCase()))
        } else if (typeof strs === 'string') {
            console.log(strs.toUpperCase())
        }
    }
}


////////////////////////////////////////////////////////////////

// in operator narrowing

type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim: () => void; fly: () => void }

function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        return animal.swim()    // Fish | Human
    }
    return animal.fly() // Bird | Human
}


////////////////////////////////////////////////////////////////

// type predicates
// syntax: parameterName is Type
// to define a user-defined type guard
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}