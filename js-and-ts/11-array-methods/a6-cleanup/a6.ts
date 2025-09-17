/*
const objectArray = [
  { x: 14, y: 21, type: "tree", toDelete: false },
  { x: 1, y: 30, type: "house", toDelete: false },
  { x: 22, y: 10, type: "tree", toDelete: true },
  { x: 5, y: 34, type: "rock", toDelete: true },
  null,
  { x: 19, y: 40, type: "tree", toDelete: false },
  { x: 35, y: 35, type: "house", toDelete: false },
  { x: 19, y: 40, type: "tree", toDelete: true },
  { x: 24, y: 31, type: "rock", toDelete: false },
];
There are some entries in the above array that are marked to be deleted.
*/

interface MapObject {
  x: number;
  y: number;
  type: string;
  toDelete: boolean;
}

const objectArray: (null | MapObject)[] = [
  { x: 14, y: 21, type: "tree", toDelete: false },
  { x: 1, y: 30, type: "house", toDelete: false },
  { x: 22, y: 10, type: "tree", toDelete: true },
  { x: 5, y: 34, type: "rock", toDelete: true },
  null,
  { x: 19, y: 40, type: "tree", toDelete: false },
  { x: 35, y: 35, type: "house", toDelete: false },
  { x: 19, y: 40, type: "tree", toDelete: true },
  { x: 24, y: 31, type: "rock", toDelete: false },
];

//a) Erase the entries by finding them and setting them to null. Do not replace the original array, but modify it instead.

for (let i: number = 0; i < objectArray.length; i++) {
  if (objectArray[i] !== null && objectArray[i]?.toDelete) {
    objectArray[i] = null;
  }
}
console.log(objectArray);

//b)Erase the entries by generating a new array with Array.map
// where the objects to be deleted have been replaced with null and the rest stay as-is.

const cleanupObjectArray = objectArray.map((e: null | MapObject) => {
  return e !== null && e.toDelete ? null : e;
});
console.log(cleanupObjectArray);

// Imagine that instead of 9 entries, the above array would have 100,000 entries.
// What would be the implications for performance and memory use between doing it like in a) or like in b)?
/*
Perfomance:
Both are O(n)
Option b) with map:
- iterates once
- creates a new array of the same size, allocates memory for new array, copies the transformed values in.

Option a) for loop 
- iterates once, mutating the same array

=> Option a) works faster

Memory:
Option b) need more memory
*/
