// ?: Optional properties
interface PaintOptions {
    shape: string,
    xPos?: number,
    yPos?: number
}

// use default value of xPos and yPos if they're undefined (given that we need to access these values inside function)
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log(xPos)
}
// all are correct
paintShape({ shape: 'eeee' })
paintShape({ shape: 'eeee', xPos: 100 }) // yPos is undefined
paintShape({ shape: 'eeee', yPos: 100 }) // xPos is undefined
paintShape({ shape: 'eeee', xPos: 100, yPos: 100 })


////////////////////////////////////////////////////////////

// readonly: can only be read, can't be written
// readonly object is mutable (similar like constant object: cant overwrite the whole object)

interface MyType {
    readonly id: string
}
interface MyObject {
    readonly info: { name: string, age: number }
}

function doFavor(t: MyType, obj: MyObject) {
    console.log(`My id is ${t.id}`)
    // error!
    // t.id = 'eeee'

    console.log(`My name is ${obj.info.name}`)
    obj.info.age++
    // error!
    // obj.info = {name: 'wwww', age: 33}
}