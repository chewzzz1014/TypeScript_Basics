let username: string = 'Jack'
let hasLogged: boolean = true
let myNumber: number = 22
let myRegex: RegExp = /foo/
// array
const names: string[] = username.split(" ")
// generic array
const myValues: Array<number> = [1, 2, 3]

interface Person {
    first: string,
    last: string
}

const myPerson: Person = {
    first: 'zzz',
    last: 'chew'
}

const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
}
ids[30] = 'c'