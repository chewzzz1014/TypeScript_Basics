// specifying the return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

// ts dont have module.exports
// module.exports = addNumbers;

export default addNumbers
export const addStrings = (s1: string, s2: string = 'Empty'): string => {
    return `${s1} ${s2}`
}

// union types
export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`
}

// void function
export const printFormat = (title: string, param: string | number) => {
    console.log(format(title, param))
}

// return promise
export const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`)
}

// rest parameter
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`
}

export function getName(user: { first: string; last: string }): string {
    return `${user?.first} ${user?.last}`
}