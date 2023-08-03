// interface for student
interface Student {
    firstName : string,
    lastName : string,
    age : number,
    location : string
}
//  student 1
const student_one : Student = {
    firstName : "martha",
    lastName : "drew",
    age : 20,
    location : "texas"
};
// stdent 2
const student_two : Student = {
    firstName : "dorothy",
    lastName : "kane",
    age : 26,
    location : "london"
};

const student_list: Student[] = [student_one, student_two];

// Vanilla JavaScript code to render a table and append rows for each student
document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
  
    student_list.forEach((student) => {
      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  });
  
  
  
  
  