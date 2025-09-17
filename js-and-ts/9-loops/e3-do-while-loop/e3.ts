/*
Make a copy of your answer to Exercise 2.
Modify the implementation to work as a do-while loop instead of a while loop. Test to make sure your program works.
Modify the condition so it's always false and test it again.
*/
{
  const limit: number = 15;
  let num: number = 3;

  const result: number[] = [];
  do {
    //   console.log(num);
    result.push(num);
    num += 3;
  } while (num <= limit);
  // } while (num <= 3); // the condition so it's always false

  console.log(result.toString());
}
