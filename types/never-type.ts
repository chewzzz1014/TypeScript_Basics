// never in ts
// when functions throw error/infinite loop


const createErr = (msg: string): never => {
    throw new Error(msg)
}

// use of never type
const isNumOrStr = (a: number | string): string => {
    if (typeof a === 'number')
        return 'number'
    if (typeof a === 'string')
        return 'string'

    return createErr('This should never happen!') // naver type
}

// use of type guard
const isNumOrStr1 = (a: any): string => {
    return (typeof a === 'number') ? 'number' : 'others'
}