"use strict";
console.log("Hello from TS");
class Department {
    constructor(n) {
        // making properties private makes them accessible only inside class.
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    // This is interpreted as a hint. When describeNew is executed then this parameters should always be of type Department.
    describeNew() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
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
