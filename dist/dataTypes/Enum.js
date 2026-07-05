"use strict";
//An enum (short for enumeration) is a special feature in TypeScript that allows you to define a set
//  of named constants. Using enums makes your code more readable, organized, and type-safe by 
// replacing confusing "magic numbers" or strings with descriptive labels.
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {})); //enum allows to define a set of named constants 
// IMP: enums in typescript are numeric in nature
// Usage
function checkAccess(role) {
    if (role === UserRole.Admin) {
        console.log("Full access granted.");
    }
    else if (role === UserRole.Viewer) {
        console.log("access for view was provided");
    }
    else
        (role === UserRole.Editor);
    console.log("access for edit was provided");
}
console.log(UserRole.Editor); // Output: "EDITOR"
checkAccess(UserRole.Editor); // Output: access for edit was provided.
