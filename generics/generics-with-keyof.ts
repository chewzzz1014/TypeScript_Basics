// generic objects
// KeyType has to be one of the keys in DataType

function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
): DataType[KeyType][] {
    return items.map(item => item[key])
}

const dogs = [
    { name: 'Doggie', age: 12 },
    { name: 'Jacky', age: 3 },
]

console.log(pluck(dogs, "age")) // [ 12, 3 ]
console.log(pluck(dogs, "name")) // [ 'Doggie', 'Jacky' ]


/////////////////////////////////////////////////////////////

interface BaseEvent {
    time: number,
    user: string
}

interface EventMap {
    // BaseEven type + the rest
    addToCart: BaseEvent & { quantity: number; productId: string; }
    checkOut: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
    name: string,
    data: EventMap[Name]
): void {
    console.log([name, data])
}

sendEvent("addToCart", { productId: 'foo', user: 'chewzzz', quantity: 1, time: 10 })
// [
// 'addToCart',
//     { productId: 'foo', user: 'chewzzz', quantity: 1, time: 10 }        
// ]

sendEvent("checkout", { time: 20, user: 'zjzjzjjz' }) // [ 'checkout', { time: 20, user: 'zjzjzjjz' } ]