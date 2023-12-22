// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

function showReviewTotal(value: number, reviewer: string, loyalty: Loyalty) {
    const iconDisplay = loyalty === Loyalty.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay!.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`
}

function populateUser(isReturning : boolean, userName: UserName ) {
    if (isReturning == true){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = `${userName.firstName} ${userName.lastName}`
}

function findLatestReview(reviews: Review[]) {
    return reviews.reduce((prev, current) => {
        return new Date(prev.date)<new Date(current.date) ? current : prev
    }, reviews[0])
}

function showDetails(authoritiyStatus: boolean | Permissons, element: HTMLDivElement, price: number) {
    if (authoritiyStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

function makeMultiple(value: number): string {
    return (value>1 || value===0) ? 's' : ''
}

function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}

let count = 0
function addReviews(reviews: Review[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(reviews)
        for (let i=0; i<topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = `${topTwo[i].stars} stars from ${topTwo[i].name}`
            reviewContainer.appendChild(card)
        }
        container!.removeChild(button)
    }
}

class MainProperty {
    source: string
    title: string
    review: Review[]
    constructor(source: string, title: string, reviews: Review[]) {
        this.source = source
        this.title = title
        this.review = reviews
    }
}

enum Loyalty {
    GOLD_USER,
    SILVER_USER,
    BRONZE_USER
}

enum Permissons {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY'
}

interface Review {
    name: string;
    stars: number;
    loyaltyUser: Loyalty;
    date: string;
}

interface UserName {
    firstName: string;
    lastName: string;
}

interface MyInfo {
    userName: UserName;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
    permissions: Permissons;
}

interface MyLocation {
    firstLine: string;
    city: string;
    code: number | string;
    country: string;
}

interface Properties {
    image: string;
    title: string;
    price: number;
    location: MyLocation;
    contact: [number, string];
    isAvailable: boolean;
}

let isOpen: boolean
let isLoggedIn: boolean

const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalty.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalty.SILVER_USER,
        date: '27-03-2021'
    },
]

let you1: MyInfo = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    permissions: Permissons.ADMIN,
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: Properties[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland',
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malia-hotel.jpg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

const latestReview = findLatestReview(reviews)
showReviewTotal(reviews.length, latestReview.name, latestReview.loyaltyUser)
populateUser(you1.isReturning, you1.userName)

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.height = 200
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer!.appendChild(card)
    showDetails(you1.permissions, card, properties[i].price)
}

button?.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['Kuala Lumpur', '21:32', 27.5]
footer!.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}C`
