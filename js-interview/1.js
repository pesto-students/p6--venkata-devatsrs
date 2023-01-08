
// base or parent class
class Person1 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName() {
      return this.firstName + " : " + this.lastName;
    }
  }
  
  // inheriting base class
  class Employee extends Person1 {
    newFullName() {
      return this.firstName + " : " + this.lastName;
    }
  }
  
  const employee1 = new Employee("Peter", "Parker");
  
  employee1.fullName(); // 'Peter Parker'
  console.log(employee1.newFullName()); // 'Peter : Parker'

  