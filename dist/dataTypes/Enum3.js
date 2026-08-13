"use strict";
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["inProgress"] = "Project is inProgress";
    ProjectStatus["complete"] = "Project is completed";
    ProjectStatus["onHold"] = "Project is on Hold";
})(ProjectStatus || (ProjectStatus = {}));
console.log("What is the Project Status");
//console.log(ProjectStatus.inProgress);
let projectStatus = ProjectStatus.onHold;
if (projectStatus === ProjectStatus.onHold) {
    console.log("project is on Hold");
}
else {
    console.log("project is not on Hold");
}
