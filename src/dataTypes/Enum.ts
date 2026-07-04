enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
} //enum allows to define a set of named constants 

// Usage
function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted.");
  }
  else if (role === UserRole.Viewer){
    console.log("access for view was provided");
  }
  else (role === UserRole.Editor)
    console.log("access for edit was provided");
  }

console.log(UserRole.Editor); // Output: "EDITOR"
checkAccess(UserRole.Editor); // Output: access for edit was provided.
