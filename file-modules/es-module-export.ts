// ES Module syntax - export

// prefix 'export'
export let myName = 'chewzzz'
export type SomeType = {
    foo: string
}

// dedicated export stmt
let myName1 = 'chewzzz'
type SomeType1 = {
    foo: string
}
export {
    myName1,
    SomeType1
}

// dedicated export stmt with renaming
let myName3 = 'chewzzz'
export { myName3 as myRealName }


// default export
export default myName
// export default function myFunc(){}
// export default class myClass {}
