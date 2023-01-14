// function overload

// overload signature
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date

// function name
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else {
        return new Date(mOrTimestamp)
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//const d3 = makeDate(1, 3);

console.log(`Date 1: ${d1}\nDate 2: ${d2} `)