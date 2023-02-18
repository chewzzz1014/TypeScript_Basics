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