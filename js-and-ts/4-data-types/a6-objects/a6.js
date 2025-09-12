/*

We have the following books:

Dune, with 412 pages
The Eye of the World, with 782 pages
For each book, create an object that contains a name property, a pageCount property and a read property (indicating whether the book has been read). Give the properties fitting values.

a)
Print both of the book objects.

b)
Swap the read status of both books so they're true (or, change them to false in case you originally assigned them as true). Print the books again.

EXTRA: Instead of individual object variables, have the books in an array.

*/

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const book1 = {
  name: "Dune",
  pageCount: 12,
  read: false,
};

const book2 = {
  name: "The Eye of the World",
  pageCount: 782,
  read: false,
};

console.log(book1);
console.log(book2);

book1.read = true;
book2.read = true;

console.log(book1);
console.log(book2);

const books = [book1, book2];
console.log(books.map((b) => (b.read = b.read ? false : true)));
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]);
// }

printArr(books);
