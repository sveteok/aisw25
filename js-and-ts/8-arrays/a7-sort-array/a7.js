/*
Write a function sortNumberArray that takes an array as a parameter and sorts the array.

To accomplish this, you'll need to think of an algorithm for sorting an array.

Use loops, indexing and the methods in the learning material to sort the array. Do not use Array.sort. While in real productivity code you'd usually use Array.sort, it is still important for you to know how it works under the hood, and one of the best ways to learn that is implementing it yourself.

For example:

const array = [4, 19, 7, 1, 9, 22, 6, 13];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
*/

const sortNumberArray = (arr) => {
  let needSorted,
    n = arr.length;

  do {
    needSorted = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        needSorted = true;
      }
    }
  } while (needSorted);
  n--;
};

const array = [4, 19, 7, 1, 9, 22, 6, 13];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
