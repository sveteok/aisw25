/*
We have the following number sequence: 0, 1, 1, 4, 7, 19, 40, 97, 117, ...

It can be presented as follows:

F(0) = 0
F(1) = 1
F(n) = (F(n - 2) * 3) + F(n - 1)
Create a function that calculates the value of F with any given n.

Calculate F(17) and print its value. 
If you got the implementation correct, your program should print 399331.
*/

const recursion = (n: number): number => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return recursion(n - 2) * 3 + recursion(n - 1);
    }
}
console.log(recursion(17)); //399331