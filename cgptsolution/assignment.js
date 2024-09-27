// Array to store student data
let students = [];

function addStudent() {
    // Get form values
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const grade = parseFloat(document.getElementById('grade').value);
    
    if (!studentName || !subject || isNaN(grade)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Check if student already exists
    let student = students.find(s => s.name === studentName);
    if (student) {
        // Add new subject and grade
        student.subjects.push({ subject, grade });
    } else {
        // Create new student object
        students.push({
            name: studentName,
            subjects: [{ subject, grade }]
        });
    }

    // Clear form
    document.getElementById('student-form').reset();

    // Render students table
    renderTable();
}

function calculateAverage(subjects) {
    const total = subjects.reduce((sum, s) => sum + s.grade, 0);
    return (total / subjects.length).toFixed(2);
}

function renderTable() {
    const tableBody = document.getElementById('students-table-body');
    tableBody.innerHTML = '';

    students.forEach(student => {
        student.subjects.forEach(({ subject, grade }) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${subject}</td>
                <td>${grade}</td>
                <td>${calculateAverage(student.subjects)}</td>
            `;
            tableBody.appendChild(row);
        });
    });
}
