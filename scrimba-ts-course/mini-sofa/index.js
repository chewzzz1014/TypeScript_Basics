"use strict";
exports.__esModule = true;
// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.
var utils_1 = require("./utils");
var isOpen;
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
var latestReview = (0, utils_1.findLatestReview)(reviews);
(0, utils_1.showReviewTotal)(reviews.length, latestReview.name, latestReview.loyaltyUser);
var you1 = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
(0, utils_1.populateUser)(you1.isReturning, you1.userName);
