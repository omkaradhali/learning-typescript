console.log("Hello from TS");

class Department {
  name: string;

  // making properties private makes them accessible only inside class.
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }

  // This is interpreted as a hint. When describeNew is executed then this parameters should always be of type Department.
  describeNew(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);

accounting.describe();

accounting.addEmployee("max");
accounting.addEmployee("Ins");

accounting.printEmployeeInfo();
