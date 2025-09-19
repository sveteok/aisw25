/*
Write a function sortNumberArray that takes an array as a parameter and sorts the array.

To accomplish this, you'll need to think of an algorithm for sorting an array.


Use loops, indexing and the methods in the learning material to sort the array.
Do not use Array.sort.
While in real productivity code you'd usually use Array.sort, it is still important for you to know
how it works under the hood, and one of the best ways to learn that is implementing it yourself.


For example:

const array = [4, 19, 7, 1, 9, 22, 6, 13];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
*/

// Bubble sort. Complexity O(n^2); stable
const sortNumberArray = (arr: number[]): void => {
  let needSorted: boolean,
    n: number = arr.length;

  do {
    needSorted = false;
    for (let i: number = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp: number = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        needSorted = true;
      }
    }
  } while (needSorted);
  n--;
};

const array: number[] = [4, 19, 7, 1, 9, 22, 6, 13];
sortNumberArray(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]

// Alternative solution using quick sort. Complexity O(n log n); unstable
const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot: number = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

quickSort(array);
console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
export {};
