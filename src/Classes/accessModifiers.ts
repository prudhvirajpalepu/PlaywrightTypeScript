class employeeDetails {
    public name: string; //accessible from anywhere
    private age: number; //accessible only within the class where declared
    protected gender: string; //accessible within the class and its subclasses
    static company: string = "ABC Corp"; //accessible without creating an instance of the class

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }   

    getemployeeDetails() 
    {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }

}  
    let employee1 = new employeeDetails("Prudhvi", 30, "Male");
    employee1.getemployeeDetails();
    console.log(employeeDetails.company); // Accessing static property without creating an instance
    console.log(employee1.name); // Accessible
    // console.log(employee1.age); // Error: Property 'age' is private and only accessible within class 'employeeDetails'.
    // console.log(employee1.gender); // Error: Property 'gender' is protected and only accessible
