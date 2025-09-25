/*
Transform the student.courseGrades object into an array student.courses where each course is stored as an object:

{
  name: "Intro to Programming",
  grade: 3
}
Print to console "Aili got 3 from Intro to Programming" by referring to the course data inside the courses array.

Hint: .find method can be useful!

Now, create a new function to add a new course to the array: addCourse(courseName, courseGrade)

*/

interface Course {
  name: string;
  grade: number;
}
interface Student {
  name: string;
  credits: number;
  courses: Course[];
}

const student: Student = {
  name: "Aili",
  credits: 45,
  courses: [
    {
      name: "Intro to Programming",
      grade: 3,
    },
    {
      name: "JavaScript Basics",
      grade: 3,
    },
    {
      name: "Functional Programming",
      grade: 5,
    },
  ],
};

const grade =
  student.courses.find((c) => c.name === "Intro to Programming")?.grade ||
  "N/A";

console.log(`${student.name} got ${grade} from Intro to Programming`);
//Aili got 3 from Intro to Programming

const addCourse = (courseName: string, courseGrade: number): void => {
  student.courses.push({ name: courseName, grade: courseGrade });
};

addCourse("Program Design", 3);
console.log(student);
/*
{
  name: 'Aili',
  credits: 45,
  courses: [
    { name: 'Intro to Programming', grade: 3 },
    { name: 'JavaScript Basics', grade: 3 },
    { name: 'Functional Programming', grade: 5 },
    { name: 'Program Design', grade: 3 }
  ]
}
*/
