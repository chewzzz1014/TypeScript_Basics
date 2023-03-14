// index signature: decribe types of possible values 
interface StringArr {
    // when a StringArray is indexed with a number, it will return a string
    [index: number]: string
}

const myArr: StringArr = {
    1: 'qwww'
}

