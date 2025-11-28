let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 58 },
  { name: "David", score: 90 },
  { name: "Eva", score: 40 },
  { name: "Frank", score: 65 },
];

function filterPassedStudents(minScore) {
  console.log(
    `=== รายชื่อนักเรียนที่ผ่านเกณฑ์ (คะแนนขั้นต่ำ: ${minScore}) ===`
  );

  students.forEach(function (student) {
    if (student.score >= minScore) {
      console.log(
        `Student ${student.name} passed with score ${student.score}`
      );
    }
  });
}

filterPassedStudents(60);
