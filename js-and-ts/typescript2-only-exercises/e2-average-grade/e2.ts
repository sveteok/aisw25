/*
Exercise 2. Average Grade
There are two classes which provide their student grades in different formats. 
One class provides the grades as a list of strings, and the other as a list of numbers.

Write a function averageGrade that takes two lists as parameters: 
a list of grades as strings and a list of grades as numbers, and 
returns the average of all the grades in both lists combined.

You can assume that all the elements in the lists are correct integers between 1 and 5
 (either as a number or a string).

averageGrade([1,2,3], ['1','2','3']);   // returns 2
*/

const averageGrade = (gradesAsNumber: number[], gradesAsString: string[]): number => {
	const grades = [...gradesAsNumber, ...gradesAsString];
	const sum = grades.reduce((sum: number, curr: string | number) => (sum += Number(curr)), 0);

	return sum / grades.length;
};

const avg = averageGrade([1, 2, 3], ['1', '2', '3']);
console.log(`Averege: ${avg}`); // 2

const avg2 = averageGrade([1, 2, 3, 5, 4], ['1', '2', '3', '5', '4']);
console.log(`Averege: ${avg2}`); // 3
