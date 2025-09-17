/*
Create a program that finds out the smallest number that has a factorial that is divisible by 600.

Print the number.

Do not pre-calculate the answer, but use an infinite loop to find the number and use the break statement to stop the loop once the number has been found.

(Technically this is also doable without using break or an infinite loop, but we don't yet have enough knowledge of TypeScript so it'd be difficult to make a task where break is absolutely necessary)
*/
{
  let factorial: number = 1;
  let i: number = 1;

  while (true) {
    factorial *= i;

    if (factorial % 600 === 0) {
      console.log(
        `${i} - the smallest number that has a factorial that is divisible by 600`
      );
      break;
    }
    i++;
  }
}
//10 - the smallest number that has a factorial that is divisible by 600
