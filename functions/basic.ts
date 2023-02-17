// function

type MyFunc = (a: number, b: number) => number

interface MyFunInterface {
    (a: number, b: number): number
}

const addNum: MyFunc = (a, b) => a + b

const subNum: MyFunc = (a, b) => a - b

const mulNum: MyFunc = (a, b) => a * b

const divNum: MyFunc = (a, b) => a / b

const powOf: MyFunc = (a, b) => a ** b


// narrowing VS optional params
const addAll = (a: number, b: number, c: number): number => {
    if (c === 0 || c)
        return a + b + c
    return a + b
}

const sumAll = (a: number, b: number, c: number = 0): number => {
    return a + b + c
}