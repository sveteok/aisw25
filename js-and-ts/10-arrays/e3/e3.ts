/*
Modifying the array from the previous exercise, use the push method to add the words "over", "lazy" and "dog" to the end of the array.

Print the array afterwards to make sure the array looks as expected.

Afterwards, use the unshift method to add the element "pangram:" to the beginning of the array.
*/

{
  const arr: string[] = ["the", "quick", "brown", "fox"];
  console.log(arr);
  console.log(arr[1]);
  console.log(arr[2]);
  arr[2] = "gray";

  console.log(arr);

  arr.push("over");
  arr.push("lazy");
  arr.push("dog");
  console.log(arr);
  arr.unshift("pangram:");
  console.log(arr);
}
