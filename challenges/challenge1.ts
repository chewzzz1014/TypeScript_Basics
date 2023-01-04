interface House {
    name: String,
    planets: Array<string> | string
}

interface HouseWithId extends House {
    id: number
}

const houses: Array<House> = [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
]

type filterFunction = (house: House) => boolean


// overloading functions

// 1
function findHouses(houses: string): HouseWithId[]; // params is json stringify of houses

// 2
function findHouses(houses: House[]): HouseWithId[]; // params is array of house

// 3
function findHouses(
    houses: string,
    filter: (house: House) => boolean
): HouseWithId[]

// 4
function findHouses(
    houses: House[],
    filter: (house: House) => boolean
): HouseWithId[];


function findHouses(houses: unknown, func?: filterFunction): HouseWithId[] {

    // stringify json is passed
    // else if houses is array, do nothing
    if (typeof houses === 'string')
        houses = JSON.parse(houses)

    let result: HouseWithId[] = (houses as House[]).map((h, idx) => {
        return {
            id: idx,
            ...h,
        }
    })

    if (func) {
        result = result.filter(func)
    }

    return result
}


// testing
console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));