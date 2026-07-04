"use strict";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {})); //enum allows to define a set of named constants 
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
