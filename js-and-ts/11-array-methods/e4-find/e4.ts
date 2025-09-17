/*
Using the same array as previously:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us the first animal that ends in letter t.
*/
{
  const animals: string[] = [
    "horse",
    "cow",
    "dog",
    "hamster",
    "donkey",
    "cat",
    "parrot",
  ];

  const animalEndingInT: string | undefined = animals.find((animal: string) =>
    animal.endsWith("t")
  );
  console.log(animalEndingInT); //cat

  //EXTRA: Find the first animal that ends in letter y and starts with letter d.
  const animalEndingInYStartingWithD: string | undefined = animals.find(
    (animal: string) => animal.endsWith("y") && animal.startsWith("d")
  );
  console.log(animalEndingInYStartingWithD); //donkey
}
