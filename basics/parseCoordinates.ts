// overloading functions
// using 'unknown' in typescript (any, but need to cast when we use it)
interface Coordinate {
    x: number
    y: number
}

// 2 overloading function with diff params type
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return {
        ...obj,
    }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y
    }
}

/////////////////////////////////////////////

// function overloading in typescript
function parseCoordinates(obj: Coordinate): Coordinate;
function parseCoordinates(str: string): Coordinate;
function parseCoordinates(x: number, y: number): Coordinate;

// use '?' for optional params (since we have overloading function with 2 param and 1 param)
function parseCoordinates(arg1: unknown, arg2?: unknown): Coordinate {
    let coordinate: Coordinate = {
        x: 0,
        y: 0
    }

    // check the type of arg1 to decide the operation
    // we doing type check at run time (javascript), not compile time (typescript)

    if (typeof arg1 === 'object') {
        // convert type of arg1 (becuase arg1 is 'unknown')
        coordinate = {
            ...(arg1 as Coordinate)
        }
    } else if (typeof arg1 === 'string') {
        (arg1 as string).split(',').forEach(str => {
            const [k, v] = str.split(':')
            coordinate[k as 'x' | 'y'] = parseInt(v, 10)
        })
    } else {
        coordinate = {
            x: (arg1 as number),
            y: (arg2 as number)
        }
    }

    return coordinate
}

console.log(parseCoordinates(10, 20))
console.log(parseCoordinates({
    x: 52,
    y: 35
}))
console.log(parseCoordinates('x:12,y:22'))