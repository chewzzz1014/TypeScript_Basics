type One = string
type Two = string | number
type Three = 'hello' // literal type

// convert to more or less specific type
let varA: One = 'hello'
let varB = varA as 'hello' // varB has type 'hello' (literal type). To less specific
let varC = varA as Three // to more specific
