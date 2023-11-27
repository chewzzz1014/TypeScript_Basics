// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
import { showReviewTotal, populateUser, findLatestReview } from "./utils";
import { Review, MyInfo } from "./types";

let isOpen: boolean

const reviews: Review[] = [
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

const latestReview = findLatestReview(reviews)
showReviewTotal(reviews.length, latestReview.name, latestReview.loyaltyUser)

let you1: MyInfo = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

populateUser(you1.isReturning, you1.userName)
