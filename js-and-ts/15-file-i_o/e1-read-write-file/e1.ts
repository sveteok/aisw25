/*
Implement a program that can read your given file, and print out all the information in it.

Print out word for word, and every time the word you're trying to print is "joulu", 
you replace that word with "kinkku", and 
every time your printing "lapsilla" you print "poroilla".

Finally, write the altered text to a new file.

For this exercise, you can create a textFile.txt, with this content:

Joulu on taas, joulu on taas, kattilat täynnä puuroo. Nyt sitä saa, nyt sitä saa vatsansa täyteen puuroo.

Joulu on taas, joulu on taas, voi, kuinka meill on hauskaa! Lapsilla on, lapsilla on aamusta iltaan hauskaa.
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Transform } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.join(__dirname, '../../textFile.txt');
const outputFilePath = path.join(__dirname, '../../alteredTextFile.txt');

// fs.createReadStream(filePath, "utf-8").on("data", (txt) => console.log(txt));

const replaceStream = new Transform({
	transform(chunk, _, callback) {
		const text = chunk.toString();
		const parts = text.split(/(\b)/);

		const processed = parts
			.map((word: string) => {
				if (/^\w+$/u.test(word)) {
					if (/^joulu$/i.test(word)) {
						console.log('kinkku');
						return 'kinkku';
					}
					if (/^lapsilla$/i.test(word)) {
						console.log('poroilla');
						return 'poroilla';
					}
					console.log(word);
				}
				return word;
			})
			.join('');

		this.push(processed);
		callback();
	},
});

const readStream = fs.createReadStream(inputFilePath, 'utf-8');
const writeStream = fs.createWriteStream(outputFilePath, 'utf-8');

readStream
	.pipe(replaceStream)
	.pipe(writeStream)
	.on('finish', () => {
		console.log(`Done. Altered text written to ${outputFilePath}`);
	})
	.on('error', (err) => {
		console.error('Error:', err);
	});

/*
alteredTextFile.txt
kinkku on taas, kinkku on taas, kattilat täynnä puuroo. Nyt sitä saa, nyt sitä saa vatsansa täyteen puuroo.

kinkku on taas, kinkku on taas, voi, kuinka meill on hauskaa! poroilla on, poroilla on aamusta iltaan hauskaa.
*/
