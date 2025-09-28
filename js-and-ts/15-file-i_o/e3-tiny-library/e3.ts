/* Write a TypeScript program that reads a library from a JSON file, and
includes methods to manage the library. Implement the following functions:

 getBook(id: number)
 printBookData(id: number)
 printReadingStatus(author: string, title: string)
 addNewBook(author: string, title: string)
 readBook(id: number)
 saveToJSON()
 loadFromJSON()
[
   {
       "author": "David Wallace",
       "title":  "Infinite Jest",
       "readingStatus": false,
       "id": 1
   },
   {
       "author": "Douglas Hofstadter",
       "title":  "Gödel, Escher, Bach",
       "readingStatus": true,
       "id": 2
   },
   {
       "author": "Harper Lee",
       "title":  "To Kill A Mockingbird",
       "readingStatus": false,
       "id": 3
   }
]
   */

//  getBook(id: number) {}
//  printBookData(id: number)
//  printReadingStatus(author: string, title: string)
//  addNewBook(author: string, title: string)
//  readBook(id: number)
//  saveToJSON()
//  loadFromJSON()

// import fs from "fs";
import { readFile, writeFile } from 'fs/promises';

interface Book {
	author: string;
	title: string;
	readingStatus: boolean;
	id: number;
}

class BookReader {
	private books: Book[];
	private filePath: string;
	constructor(books: Book[] = [], filePath: string = '../books.json') {
		this.books = books;
		this.filePath = filePath;
	}

	getBook(id: number): Book | undefined {
		return this.books.find((b) => b.id === id);
	}

	printBookData(id: number): void {
		const book = this.getBook(id);
		if (book) {
			console.log(book);
		} else {
			console.error(`Book #${id} not found`);
		}
	}

	printReadingStatus(author: string, title: string): void {
		const bookAuthor = author.toLowerCase();
		const bookTitle = title.toLowerCase();

		const found = this.books.find((b) => {
			return b.author.toLowerCase() === bookAuthor && b.title.toLowerCase() === bookTitle;
		});
		if (found) {
			console.log(`The book ${author}, ${title} ${found.readingStatus ? 'was' : 'was not'} read`);
		} else {
			console.error(`Book not found`);
		}
	}

	addNewBook(author: string, title: string): number {
		const id = this.books.length > 0 ? Math.max(...this.books.map((b) => b.id)) + 1 : 1;

		const newBook: Book = {
			author,
			title,
			readingStatus: false,
			id,
		};
		this.books.push(newBook);
		return id;
	}

	readBook(id: number): Book | null {
		const book = this.getBook(id);
		if (book) {
			book.readingStatus = true;
			return book;
		}
		return null;
	}

	//   saveToJSON(): void {
	//     try {
	//       const writeData: string = JSON.stringify(this.books, null, 4);
	//       fs.writeFileSync(
	//         this.filePath as fs.PathOrFileDescriptor,
	//         writeData,
	//         "utf8"
	//       );
	//       console.log(`Done. Books saved in ${this.filePath}`);
	//     } catch (error) {
	//       console.error(`Error saving to JSON: ${error}`);
	//     }
	//   }

	//   loadFromJSON(): Book[] | null {
	//     try {
	//       const readData: string = fs.readFileSync(
	//         this.filePath as fs.PathOrFileDescriptor,
	//         "utf8"
	//       );
	//       this.books = JSON.parse(readData);
	//       console.log("Books loaded from JSON");
	//       return this.books;
	//     } catch (error) {
	//       console.error(`Error loadiing from JSON: ${error}`);
	//     }
	//     return null;
	//   }

	async saveToJSON(): Promise<void> {
		try {
			const writeData: string = JSON.stringify(this.books, null, 4);
			await writeFile(this.filePath, writeData, 'utf8');
			console.log(`Done. Books saved in ${this.filePath}`);
		} catch (error) {
			console.error(`Error saving to JSON: ${error}`);
		}
	}

	async loadFromJSON(): Promise<Book[]> {
		try {
			const readData: string = await readFile(this.filePath, 'utf8');
			this.books = JSON.parse(readData);
			console.log('Books loaded from JSON');
			return this.books;
		} catch (error) {
			console.error(`Error loadiing from JSON: ${error}`);
			throw error;
		}
	}
}

const initialBooks: Book[] = [
	{
		author: 'David Wallace',
		title: 'Infinite Jest',
		readingStatus: false,
		id: 1,
	},
	{
		author: 'Douglas Hofstadter',
		title: 'Gödel, Escher, Bach',
		readingStatus: true,
		id: 2,
	},
	{
		author: 'Harper Lee',
		title: 'To Kill A Mockingbird',
		readingStatus: false,
		id: 3,
	},
];

async function main(): Promise<void> {
	console.log(`Initial books:`);
	console.log(initialBooks);

	const bookReader = new BookReader(initialBooks);
	console.log(`Save to JSON...`);
	try {
		bookReader.saveToJSON();

		console.log(`Get book #1 and read it...`);
		const id = 1;
		const bookForReading = bookReader.getBook(id);
		if (bookForReading) {
			bookReader.printReadingStatus(bookForReading.author, bookForReading.title);
			bookReader.readBook(id);
			bookReader.printReadingStatus(bookForReading.author, bookForReading.title);
		}

		console.log(`Add new book and read it...`);
		const newBookId = bookReader.addNewBook('Antoine de Saint-Exupéry', 'Citadelle');
		const citadelle = bookReader.getBook(newBookId);
		if (citadelle !== undefined) {
			bookReader.printReadingStatus(citadelle.author, citadelle.title);
			bookReader.readBook(newBookId);
			bookReader.printBookData(newBookId);
		}

		console.log(`Save changes...`);
		bookReader.saveToJSON();

		console.log(`Load...`);
		console.log(bookReader.loadFromJSON());
	} catch (error) {
		console.error('An error occurred: ', error);
	}
}

main();
