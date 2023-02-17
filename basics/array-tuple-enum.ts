// array
let myStringArr: string[] = ['one', 'two', 'three']
let myUnionArr: (number | string)[] = ['one', 'two', 3] // ts inferred as (number|string)[] type
let myUnionArr1 = ['one', 2, false] // ts inferred as (string | number | boolean)[] type


console.log(convertIt(['12', '233', '222']))
// convert string array to number array
function convertIt(a: string[]): number[] {
    return a.map((ele: string) => Number(ele))
}

////////////////////////////////////////////////////////

// tuple: order of the types matter
let myTuple: [string, number, boolean] = ['one', 1, true]
// error
// myTuple[0] = false 


// object: implicit or explixit type annotation
type StudentType = {
    name: string,
    matric: number | string,
    gender?: string // optional property
    gpa: number[]
}

interface StudentInterface {
    name: string,
    matric: number | string,
    gender?: string // optional property
    gpa: number[]
}

let student: StudentType = {
    name: 'chewzzz',
    matric: 22222,
    gpa: [2.50, 3.80]
}


////////////////////////////////////////////////////////

// enum
enum Grade {
    U = 1,
    D, //return 2
    C,
    B,
    A
}

console.log(Grade.U)