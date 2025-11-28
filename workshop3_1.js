let score = 83;

let grade = "F";

if (score >= 50) {
  grade = "D";
}

if (score >= 60) {
  grade = "C";
}

if (score >= 70) {
  grade = "B";
}

if (score >= 80) {
  grade = "A";
}

// 4. แสดงผล
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
