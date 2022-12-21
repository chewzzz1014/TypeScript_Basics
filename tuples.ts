// tuple is array in typescript

// define and using tuple
type ThreeCoordinate = [
    x: number,
    y: number,
    z: number
]

function add3DCoordinate(c1: ThreeCoordinate, c2: ThreeCoordinate): ThreeCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(add3DCoordinate([0, 0, 0], [1, 1, 1]))

/////////////////////////////////////////////////////////////////////////////////////////////