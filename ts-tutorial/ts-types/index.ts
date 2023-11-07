let myName1: string = 'chewzzz'
let myAge1: number = 21
let isStudent: boolean = true
let gpa: number[] = [3.88, 3.90, 3.79]

let person: {
    name: string,
    age: number
}
person = {
    name: 'chewzzz',
    age: 21
}

function greeting(name: string): string {
    return `Hallo ${name}!`
}

let items = [0, 1, null, 'Hi']; // inferred type is (number|string)[]

document.addEventListener('click', function (event) {
    console.log(event.button); // MouseEvent.button
});



// tuple
// order of type is important
let skill: [string, number]
skill = ['Programming', 5]

// optional element in tuple
let bgColor, headerColor: [number, number, number, number?]
bgColor = [0, 255, 255, 0.5]
headerColor = [0, 255, 255]


// enum
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
function isItSummer(month: Month) {
    let isSummer: boolean
    switch(month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
            break
        default:
            isSummer = false
            break
    }
    return isSummer
}

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
}
if (request.status === ApprovalStatus.approved) {
    console.log('Send email to the Applicant')
}