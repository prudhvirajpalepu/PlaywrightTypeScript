interface Employee {
  name: string;
  employeeId: number;
}

interface Manager extends Employee {
  teamSize: number;
  department: string;
}

const manager: Manager = {
  name: "Prudhvi",
  employeeId: 1001,
  teamSize: 12,
  department: "QA Automation"
};

console.log(manager);