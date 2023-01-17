// string, number and boolean
let myName: string = 'chewzzz'
let myNameUpper = myName.toUpperCase() // can apply string method on it
console.log(myNameUpper)

let myAge: number = 20
// boolean in js has no defalt value. Its default is undefined
let isFemale: boolean = true

// array
let empyList: string[] = ['q', 'w', 'e', 'r', 't', 'y']
let numList: number[] = [2, 4, 6, 8]

let greaterThan3 = numList.filter(n => n > 3) // number[]
let find2 = numList.find(n => n === 2) // number | undefined. the number might not found
let mapNumList = numList.map(n => `${n}`) // string[]
let sum = numList.reduce((acc, ele) => acc + ele, 0)

console.log(greaterThan3)
console.log(find2)
console.log(mapNumList)
console.log(sum)
