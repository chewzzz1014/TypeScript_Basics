"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
// specifying the return type
function addNumbers(a, b) {
    return a + b;
}
// ts dont have module.exports
// module.exports = addNumbers;
exports["default"] = addNumbers;
var addStrings = function (s1, s2) {
    if (s2 === void 0) { s2 = 'Empty'; }
    return "".concat(s1, " ").concat(s2);
};
exports.addStrings = addStrings;
// union types
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void function
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// return promise
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// rest parameter
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
function getName(user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.first, " ").concat(user === null || user === void 0 ? void 0 : user.last);
}
exports.getName = getName;
