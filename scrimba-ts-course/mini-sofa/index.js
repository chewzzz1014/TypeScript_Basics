// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
var reviewTotalDisplay = document.querySelector('#reviews');
var userNameDisplay = document.querySelector('#user');
var returningUserDisplay = document.querySelector('#returning-user');
var reviews = [
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
];
function showReviewTotal(numReviews, reviewer, isReviewerRoyalty) {
    reviewTotalDisplay.textContent = "reviews total ".concat(numReviews, " | lasted reviewed by ").concat(reviewer).concat(isReviewerRoyalty ? '*' : '');
}
function findLatestReview() {
    return reviews.reduce(function (prev, current) {
        return new Date(prev.date) < new Date(current.date) ? current : prev;
    }, reviews[0]);
}
var latestReview = findLatestReview();
showReviewTotal(reviews.length, latestReview.name, latestReview.loyaltyUser);
var you1 = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: 'yes'
};
function populateUser(isReturning, userName) {
    if (isReturning === 'yes') {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = "".concat(userName.firstName, " ").concat(userName.lastName);
}
populateUser(you1.isReturning, you1.userName);
