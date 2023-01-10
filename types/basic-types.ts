// primitives: string, number, boolean
// ts will automatically infer the types
const myName: string = 'chewzzz'
const age: number = 20
const isFemale: boolean = true
console.log(`${myName}, age ${age}. Is female? ${isFemale}`)

/////////////////////////////////////////////////

// array
// syntax: type[] or Array<type>
const oddNum: number[] = [1, 3, 5, 7]
const evenNum: Array<number> = [2, 4, 6, 8]

/////////////////////////////////////////////////

// any: can access any properties of it
let myAnyObj: any = { x: 0 }
// myAnyObj.toUpperCase()
// myAnyObj = 'yoyoyoy'
// const n: number = myAnyObj

/////////////////////////////////////////////////

// function

// params type
function sayHi(name: string) {
    console.log(`Nice to meet you, ${name.toUpperCase()}!!`)
}
sayHi('chewzzz')

// return type
function powerTwo(num: number): number {
    return num ** 2
}
console.log(powerTwo(3))

// anonymous function
// params of function are automatially given types

/////////////////////////////////////////////////

// object 
// 1. list their props and types
// use , or ; to seperate the props
// add > after propertyname for optional property
function meetCat(cat: { name: string, age: number, hateHuman?: boolean }): void {
    console.log(`Meow! Meet ${cat.name} of age ${cat.age}`)
    if (cat.hateHuman !== undefined && !cat.hateHuman)
        console.log(`${cat.name} hates human!`)
}
meetCat({
    name: 'cjb',
    age: 4
})
meetCat({
    name: 'mm',
    age: 5,
    hateHuman: true
})

/////////////////////////////////////////////////

// union type
//formed from 2 or more types
function printId(id: number | string) {
    if (typeof id === 'string')
        console.log(`Your ID is: ${id.toUpperCase()}`)
    else
        console.log(`Your ID is: ${id}`)
}
// both works
printId(222222)
printId('g4853222')

// union type: array or non-array
function nameList(names: string[] | string) {
    if (Array.isArray(names)) {
        console.log(`Hello, ${names.join(' and ')}`)
    } else {
        console.log(`Welcome lone traveler - ${names}!`)
    }
}
nameList(['chewzzz', 'wwwwww', 'jkjkjkjkj', 'sdd'])
nameList('chewzzz')

/////////////////////////////////////////////////


