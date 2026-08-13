enum ProjectStatus{
    inProgress="Project is inProgress",
    complete="Project is completed",
    onHold="Project is on Hold"
}

console.log("What is the Project Status");
//console.log(ProjectStatus.inProgress);
let projectStatus = ProjectStatus.onHold;
if(projectStatus === ProjectStatus.onHold){
    console.log("project is on Hold");
    
}
else{
    console.log("project is not on Hold");
}
