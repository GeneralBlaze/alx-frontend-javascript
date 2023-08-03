interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  };

  // Create a teacher object with all the required attributes
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
  };
  
  // Create a teacher object with additional attributes
  const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    yearsOfExperience: 5,
    contract: true,
  };

  console.log(teacher1);

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create a director object
  const director1: Directors = {
    firstName: "Michael",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "Chicago",
    numberOfReports: 10,
  };
  
  console.log(director1);

  // Function definition
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstLetter}. ${formattedLastName}`;
  };
  
  // Function interface
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  };

  // Interface for the constructor of the StudentClass
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class definition
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Creating an instance of StudentClass
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });