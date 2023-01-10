// null and undefined type in ts

/*

 - Behave differently based on strictNullCheck option
 - strictNullCheck OFF:  null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type
 - strictNullCheck ON:  when a value is null or undefined, you will need to test for those values before using methods or properties on that value

*/

// non-null assestion operator: postfix !
// assert that the value is not null or undefined
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed())
}

