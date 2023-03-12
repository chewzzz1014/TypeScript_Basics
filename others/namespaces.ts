// 'something ||' portion allows function(something) to add stuff to an existing object
// '|| something = {}' portion starts a new object then add stuff to that object

(function (something) {
    something.foo = 123
})(something || (something = {}))

console.log(something) // {foo:123}

    (function (something) {
        something.bar = 456
    })(something || (something = {}))

console.log(something) // {foo:123, bar:456}