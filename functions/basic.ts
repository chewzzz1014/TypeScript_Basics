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
