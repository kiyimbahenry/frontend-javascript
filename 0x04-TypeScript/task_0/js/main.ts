// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  // Create table element
  const table = document.createElement('table');
  table.border = '1';
  
  // Create header row
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);
  
  // Create rows for each student
  studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Append table to the body
  document.body.appendChild(table);
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderTable);
