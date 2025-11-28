let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
];

console.log("=== รายชื่อนักศึกษา ===");

students.forEach(function (student, index) {
  console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
  let count = students.length;
  console.log(`Total students: ${count}`);
}
showStudentCount();
