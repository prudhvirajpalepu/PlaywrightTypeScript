"use strict";
//tuple: In TypeScript, a tuple is an array with a fixed number of elements, 
// where each position has a specific type.
/**let user: [string, number, boolean];

user = ["Prudhvi", 28, true];   // ✅ Correct
user = [28, "Prudhvi", true];   // ❌ Error – wrong order of types
user = ["Prudhvi", 28];         // ❌ Error – missing element **/
/*let interviewDetails : [string,string,number] = ["Google","SDET-II",30];
let [companyName,Role,interviewDuration] = interviewDetails;
console.log("company Name:"+companyName);
console.log("Role:"+Role);
console.log("interview Duration: "+interviewDuration+" mins");*/
let interviewDetails = [["Google", 'SDET-1', 30], ["Microsoft", 'SDET-1', 45], ["Amazon", 'SDET-2', 60]];
interviewDetails.map((interview) => {
    console.log(interview);
    let [companyName, Role, interviewDuration] = interview;
    console.log("company Name:" + companyName);
    console.log("Role:" + Role);
    console.log("interview Duration: " + interviewDuration + " mins");
});
