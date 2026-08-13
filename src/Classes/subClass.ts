class employeeInfo extends employeeDetails 
{
    getDetails()
    {
        let d = new employeeDetails("Prudhvi", 30, "Male");
        console.log(d.name);
 //       console.log(d.gender); // This will cause an error because 'gender
    }
}