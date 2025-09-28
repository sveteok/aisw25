/*
Exercise 1. Primitives
Write a function that takes in a string of arbitrary length and 
outputs info in form of an object with the length of the given string and 
the amount of words it contains.

Eg. { length: 32, words: 4 }.

Do it in TypeScript of course!
*/

type StringInfo = { length: number; words: number };

const getStringInfo = (str: string): StringInfo => {
	const trimmedStr = str.trim();
	const wordsNumber = trimmedStr === '' ? 0 : trimmedStr.split(/\s+/).length;
	return { length: str.length, words: wordsNumber };
};

const text1 = `Tyr­nä­vän pe­ru­na­mark­ki­noil­la koet­tiin ylei­sö­ryn­täys`;
console.log(getStringInfo(text1));
//{ length: 62, words: 4 }

const text2 = `Ka­ve­ri­po­ruk­ka ko­koon­tuu jää­kyl­mään Ou­lu­jo­keen aina samalla kel­lon­lyö­mäl­lä`;
console.log(getStringInfo(text2));
//{ length: 89, words: 7 }

const textEmpty = ` `;
console.log(getStringInfo(textEmpty));
//{ length: 1, words: 0 }
