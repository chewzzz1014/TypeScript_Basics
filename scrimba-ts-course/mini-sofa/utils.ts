import { Review, UserName } from "./types"

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: UserName ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = `${userName.firstName} ${userName.lastName}`
}

export function findLatestReview(reviews: Review[]) {
    return reviews.reduce((prev, current) => {
        return new Date(prev.date)<new Date(current.date) ? current : prev
    }, reviews[0])
}