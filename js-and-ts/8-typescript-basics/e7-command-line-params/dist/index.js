"use strict";
/*
Create a new NPM TypeScript project that reads a number from the command line when the program is started. Then it prints the word "Hello" as many times as the number tells.

For example, if the program is started with npm run start 6 the program prints

Hello
Hello
Hello
Hello
Hello
Hello
Remember to:

Install both typescript and @types/node as dev dependencies
Configure "types": ["node"] in tsconfig.json for access to process.argv
Set "outDir": "./dist" in tsconfig.json
Development tip: Use tsx index.ts 6 to test your code during development.
*/
const arg = process.argv.slice(2);
const number = arg ? parseInt(arg[0]) : undefined;
if (!number || isNaN(number) || number <= 0) {
    console.log("Please provide a valid positive number as a command line argument.");
    process.exit(1);
}
for (let i = 0; i < number; i++) {
    console.log("Hello");
}
