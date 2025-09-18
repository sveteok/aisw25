/*
To demonstrate, create an infinitely recursive function that:

takes a number as a parameter, representing the depth of the recursion, 
iow. how many times it has been called
prints the parameter
then calls itself again, incrementing the parameter number
Make your program call the function. 
Do not include any stop condition in the recursion. 
Start your program and let it run until it crashes.

How big was the limit of your call stack?
 */

function recursiveFunction(depth: number): void {
    console.log(depth);
    recursiveFunction(depth + 1);
}   
recursiveFunction(1); //stack overflow at 1715
