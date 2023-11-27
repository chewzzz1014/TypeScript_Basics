// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

let isOpen: boolean

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal(numReviews: number, reviewer: string, isReviewerRoyalty: boolean) {
    reviewTotalDisplay.textContent = `reviews total ${numReviews} | lasted reviewed by ${reviewer}${isReviewerRoyalty ? '*' : ''}`
}

function findLatestReview() {
    return reviews.reduce((prev, current) => {
        return new Date(prev.date)<new Date(current.date) ? current : prev
    }, reviews[0])
}

const latestReview = findLatestReview()
showReviewTotal(reviews.length, latestReview.name, latestReview.loyaltyUser)

let you1: {
    userName: {firstName: string; lastName: string};
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

function populateUser(isReturning: boolean, userName: {firstName: string; lastName: string}) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = `${userName.firstName} ${userName.lastName}`
}

populateUser(you1.isReturning, you1.userName)
