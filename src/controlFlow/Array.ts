//array
let mySkills:string[] = ["HTML","CSS","JAVASCRIPT"]
let myProfiency:number[] = [4,5,5];
let mySkillsAndProfiency:(string|number)[]= ["HTML",8,"CSS",5,"JAVASCRIPT",4];
console.log("my Skills and Profiency"+mySkillsAndProfiency);
console.log("my Skills"+mySkills);
mySkills.push("TYPESCRIPT");
myProfiency.push(8);
//mySkillsAndProfiency.pop(); //removes last value
console.log("After modification"+mySkills);
