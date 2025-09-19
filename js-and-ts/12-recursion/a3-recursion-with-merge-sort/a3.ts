/*
Merge-sort is a common recursive algorithm for sorting lists / arrays.

It works by splitting the list into two, resursively sorting the sub-lists and 
then merging the lists back into one.

What doing this recursively means is that when the list is divided into two sub-lists, 
the sub-lists are divided again into smaller sub-lists, those divided again into smaller lists.. and so on, 
until every sub-list only has 1 entry which is deemed sorted with itself.

Then, each 1-element sub-list is merged with another 1-element sub-list so that the 2 elements are in order. 
Then each 2-element sub-list is merged with another 2-element sub-list, forming a merged list of 4 elements. 
This merge process goes on until the entire list has been merged and sorted.

Below is an illustration of the algorithm:

[4, 19, 7, 1, 9, 22, 6, 13]
-> split into left and right

Left: [4, 19, 7, 1]   Right: [9, 22, 6, 13]
-> split these further

L [4, 19]   R: [7, 1]   L: [9, 22]   R: [6, 13]
-> split these further

L [4]   R [19]   L [7]   R [1]   L [9]   R [22]   L [6]   R[13]
-> merge these

L [4, 19]  R[1, 7]   L[9, 22]  R[6, 13]
-> merge these

L [1, 4, 7, 19]   R[6, 9, 13, 22]
-> merge these

Finally, the list is sorted!
[1, 4, 6, 7, 9, 13, 19, 22]

Implement the two functions mergeSort and mergeSubLists so 
that the program sorts the array of numbers as intended.

function mergeSort(array) {
  // Your code here.
  // You need to:
  // 1. handle the base case (if the array only has 1 element)
  // 2. split the list into two separate lists
  // 3. recursively merge the lists by calling this function for them
  // 4. call the mergeSubLists function for the "now-sorted" sublists and return its result
}

function mergeSubLists(leftList, rightList) {
  // Your code here.
  // Merge the sub-lists.
  // Add all elements from one list to the other list
  // to the correct index so that the "combined" list
  // remains sorted.
  // Then return the combined list.
}

const array = [4, 19, 7, 1, 9, 22, 6, 13];
const sorted = mergeSort(array);
console.log(sorted); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
EXTRA-extra: Add one more element to the above array. 
This makes it impossible to divide the array into one even bits of 1, 
because it has an uneven amount of numbers. 
This forces you to handle a case of empty lists in mergeSubLists and 
make a decision on how to split an array with an uneven number of elements 
(whether to include the "extra" element on the left or right list).
*/

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return mergeSubLists(left, right);
}

function mergeSubLists(leftList: number[], rightList: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < leftList.length && j < rightList.length) {
    const currentLeft = leftList[i];
    const currentRight = rightList[j];

    if (currentLeft !== undefined && currentRight !== undefined) {
      if (currentLeft < currentRight) {
        result.push(currentLeft);
        i++;
      } else {
        result.push(currentRight);
        j++;
      }
    } else if (currentLeft !== undefined) {
      result.push(currentLeft);
      i++;
    } else if (currentRight !== undefined) {
      result.push(currentRight);
      j++;
    }
  }
  // If there are any remaining elements in either list, add them to the result.
  return result.concat(leftList.slice(i)).concat(rightList.slice(j));
}

const array = [4, 19, 7, 1, 9, 22, 6, 13];
const sorted = mergeSort(array);
console.log(sorted);
/*
[
  1,  4,  6,  7,
  9, 13, 19, 22
]
*/

const arrayExtra = [4, 19, 7, 1, 9, 22, 6, 13, 5];
const sortedExtra = mergeSort(arrayExtra);
console.log(sortedExtra);
/*
[
  1,  4,  5,  6, 7,
  9, 13, 19, 22
]
*/
