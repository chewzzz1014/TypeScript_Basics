// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
function showReviewTotal(value, reviewer, loyalty) {
    var iconDisplay = loyalty === Loyalty.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = "".concat(userName.firstName, " ").concat(userName.lastName);
}
function findLatestReview(reviews) {
    return reviews.reduce(function (prev, current) {
        return new Date(prev.date) < new Date(current.date) ? current : prev;
    }, reviews[0]);
}
var isOpen;
var Loyalty;
(function (Loyalty) {
    Loyalty[Loyalty["GOLD_USER"] = 0] = "GOLD_USER";
    Loyalty[Loyalty["SILVER_USER"] = 1] = "SILVER_USER";
    Loyalty[Loyalty["BRONZE_USER"] = 2] = "BRONZE_USER";
})(Loyalty || (Loyalty = {}));
var reviews = [
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
];
var you1 = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
var properties = [
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
            country: 'Poland'
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
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
];
var latestReview = findLatestReview(reviews);
showReviewTotal(reviews.length, latestReview.name, latestReview.loyaltyUser);
populateUser(you1.isReturning, you1.userName);
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.height = 200;
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
var currentLocation = ['Kuala Lumpur', '21:32', 27.5];
footer.innerHTML = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "C");
