interface Cat {
    name: string;
    breed: string
}

// make Cat read only
type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
    return {
        name,
        breed
    }
}

const nyanCat = makeCat('nyan cat', 'Tabby')

// error
//nyanCat.name = 'Jacky'

/////////////////////////////////////////////////////////

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
    return [x, y, x]
}

const c1 = makeCoordinate(10, 20, 30)

// error
//c1[0] = 22



/////////////////////////////////////////////////////////

// make an array constant
const reallyConst = [1, 2, 3] as const

// error
//reallyConst[0] = 22