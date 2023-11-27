"use strict";
exports.__esModule = true;
exports.findLatestReview = exports.populateUser = exports.showReviewTotal = void 0;
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = "".concat(userName.firstName, " ").concat(userName.lastName);
}
exports.populateUser = populateUser;
function findLatestReview(reviews) {
    return reviews.reduce(function (prev, current) {
        return new Date(prev.date) < new Date(current.date) ? current : prev;
    }, reviews[0]);
}
exports.findLatestReview = findLatestReview;
