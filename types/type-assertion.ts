type One = string
type Two = string | number
type Three = 'hello' // literal type

// convert to more or less specific type

// 1. use `as` alias
let varA: One = 'hello'
let varB = varA as 'hello' // varB has type 'hello' (literal type). To less specific
let varC = varA as Three // to more specific

// 2. use <Type> (can'ts be used in TSX)
let varD = <One>'world'
let varE = <string | number>'world'


// type narrowing
const addOrConcet = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add')
        return a + b
    return `${a}${b}`
}

// error if no type assertion (bcs function may return number or string)
let myAns: string = addOrConcet(2, 3, 'concat') as string


//////////////////////////////////////////////////////////////

// double casting/force casting
(10 as unknown) as string // number to string


//////////////////////////////////////////////////////////

// DOM
// TS infer as HTMLElement or null. Use ! (non-null assertion) to eliminate the null type
const img = document.querySelector('img') as HTMLImageElement// HTMLImageElement
const myImg = document.getElementById('#img')! as HTMLImageElement // HTMLElement. 
const alsoMyImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src