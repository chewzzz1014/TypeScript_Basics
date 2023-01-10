// type aliases vs interface aliases

// type: a name for any type
type CoordinatesType = {
    x: number,
    y: number
}

function displayCoordinateType(pt: CoordinatesType) {
    console.log(`The x coordinate is ${pt.x}`)
    console.log(`The y coordinate is ${pt.y}`)
}
displayCoordinateType({
    x: 20,
    y: 55
})

// type with union
type ID = number | string

///////////////////////////////////////////////////

// interface
interface CoordinatesInterface {
    x: number,
    y: number
}

function displayCoordinateInterface(pt: CoordinatesInterface) {
    console.log(`The x coordinate is ${pt.x}`)
    console.log(`The y coordinate is ${pt.y}`)
}
displayCoordinateInterface({
    x: 20,
    y: 55
})

///////////////////////////////////////////////////

// extending type
interface Coordinates3DInterface extends CoordinatesInterface {
    y: number
}
// extending interface
type Coordinates3DType = CoordinatesType & {
    y: number
}

