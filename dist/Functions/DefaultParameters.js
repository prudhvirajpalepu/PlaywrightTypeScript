"use strict";
function createUser(username, age = 18, // default value
isActive = true // default value
) {
    return {
        username,
        age,
        isActive,
        createdAt: new Date()
    };
}
// Different ways to call it
console.log(createUser("john_doe"));
// { username: 'john_doe', age: 18, isActive: true, ... }
console.log(createUser("jane_smith", 25));
// { username: 'jane_smith', age: 25, isActive: true, ... }
console.log(createUser("bob", 30, false));
// { username: 'bob', age: 30, isActive: false, ... }
