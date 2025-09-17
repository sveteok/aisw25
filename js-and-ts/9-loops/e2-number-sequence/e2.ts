/*
Using a while loop, make a program that prints out the following number sequence:

3, 6, 9, 12, 15
*/

{
  const limit: number = 15;
  let num: number = 3;

  const result: number[] = [];
  while (num <= limit) {
    //   console.log(num);
    result.push(num);
    num += 3;
  }
  console.log(result.toString());
}
