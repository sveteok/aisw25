/*
We have the following list of students:

const students = [
  { name: "Sami", score: 24.75 },
  { name: "Heidi", score: 20.25 },
  { name: "Jyrki", score: 27.5 },
  { name: "Helinä", score: 26.0 },
  { name: "Maria", score: 17.0 },
  { name: "Yrjö", score: 14.5 },
];
Create a function getGrades that takes a list of students as a parameter and returns the students' grades in a new array.

Scores are converted to grades in the following way:

< 14.0 results in grade 0
[14.0, 17.0] results in grade 1
]17.0, 20.0] results in grade 2
]20.0, 23.0] results in grade 3
]23.0, 26.0] results in grade 4
> 26.0 results in grade 5
Note the inclusive/exclusive bounds! For example, the range [14.0, 17.0] includes both 14.0 and 17.0, while the range ]17.0, 20.0] excludes 17.0 (but includes everything that is just above 17.0, even 17.000001).

EXTRA: Instead of returning only an array of grade numbers, return an array of new objects, where each object contains the student's name and their grade.

*/

interface Student {
  name: string;
  score: number;
}

type Grade = 0 | 1 | 2 | 3 | 4 | 5;

interface StudentGrade {
  name: string;
  grade: Grade;
}

const students: Student[] = [
  { name: "Sami", score: 24.75 },
  { name: "Heidi", score: 20.25 },
  { name: "Jyrki", score: 27.5 },
  { name: "Helinä", score: 26.0 },
  { name: "Maria", score: 17.0 },
  { name: "Yrjö", score: 14.5 },
];

const getGrades = (students: Student[]): number[] => {
  return students.map((student: Student): number => {
    let grade: Grade;
    if (student.score < 14.0) {
      grade = 0;
    } else if (student.score <= 17.0) {
      grade = 1;
    } else if (student.score <= 20.0) {
      grade = 2;
    } else if (student.score <= 23.0) {
      grade = 3;
    } else if (student.score <= 26.0) {
      grade = 4;
    } else {
      grade = 5;
    }

    return grade;
  });
};

console.log(getGrades(students));

const getGradesExtra = (students: Student[]): StudentGrade[] => {
  return students.map((student: Student): StudentGrade => {
    let grade: Grade;
    if (student.score < 14.0) {
      grade = 0;
    } else if (student.score <= 17.0) {
      grade = 1;
    } else if (student.score <= 20.0) {
      grade = 2;
    } else if (student.score <= 23.0) {
      grade = 3;
    } else if (student.score <= 26.0) {
      grade = 4;
    } else {
      grade = 5;
    }

    return { name: student.name, grade };
  });
};

console.log(getGradesExtra(students));
