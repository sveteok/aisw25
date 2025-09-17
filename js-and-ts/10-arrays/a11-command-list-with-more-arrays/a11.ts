/*
We can also put functions into arrays.

Create a program where we have variables x and y coordinates representing the position of a robot, and a command string that tells the robot where it should move.

The robot has the following command string:

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

Go through this command string and convert it into an array of numbers, so that:

N is turned to 0
E is turned to 1
S is turned to 2
W is turned to 3
C is turned to 4
B is turned to 5
Then create an array of functions where:

element 0 is a function that increments Y
element 1 is a function that increments X
element 2 is a function that decrements Y
element 3 is a function that decrements X
element 4 is a function that does nothing
The number 5 is a special case: if found, the remaining commands are skipped. It doesn't need to exist in the function array.

Then, use a loop to go through your command list, now converted into an array of numbers, and call functions from the function array depending on the number of each element in the command array.

Print the final values of X and Y once the string has been processed.
*/

let x: number = 0;
let y: number = 0;

const commandList: string = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const functions: (() => void)[] = [
  () => y++,
  () => x++,
  () => y--,
  () => x--,
  () => {},
];

const commandToNumber = (command: string): number => {
  switch (command.toLowerCase()) {
    case "n":
      return 0;
    case "e":
      return 1;
    case "s":
      return 2;
    case "w":
      return 3;
    case "c":
      return 4;
    case "b":
      return 5;
    default:
      console.log("Not supported");
      throw new Error(`Unknow command ${command}`);
  }
};

const commandArray: number[] = [];
for (let i: number = 0; i < commandList.length; i++) {
  const currChar: string = commandList.charAt(i);
  const commandNumber: number = commandToNumber(currChar);
  if (commandNumber === 5) {
    break;
  }
  commandArray.push(commandNumber);
}
// console.log(commandArray);
// [
//   0, 0, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 0, 0, 0, 4, 1, 1, 2, 2, 2, 3, 0, 0,
//   0, 1, 4, 1, 1, 2, 3, 3, 0, 0, 0, 1, 1, 1,
// ];

for (let i: number = 0; i < commandArray.length; i++) {
  const commandNumber: number = commandArray[i];
  functions[commandNumber]();
}

console.log(`Final position: (${x}, ${y})`);
// Final position: (8, 7)
