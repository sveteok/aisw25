/*
Create a new object, representing a fictional processor in a supercomputer, like the following:

{
  name: "Buutti SuperCalculator 6000",
  cache: "96 GB",
  clockSpeed: 9001.0
}
Then create two methods inside the object:

a function named overclock that increases the clockSpeed by 500
a function named savePower that cuts the clockSpeed to 2000 if it's greater than that. If the clock speed is already 2000 or lower, 
the function should instead reduce the clock speed by half.
Test your functions by calling them and printing your object to make sure they work.
*/

interface SuperCalculator {
  name: string;
  cache: string;
  clockSpeed: number;
  overclock: () => void;
  savePower: () => void;
}

const superCalculator: SuperCalculator = {
  name: "Buutti SuperCalculator 6000",
  cache: "96 GB",
  clockSpeed: 9001.0,
  overclock: function () {
    this.clockSpeed += 500;
  },
  savePower: function () {
    if (this.clockSpeed > 2000) {
      this.clockSpeed = 2000;
    } else {
      this.clockSpeed /= 2;
    }
  },
};

console.log(superCalculator);
/*
{
  name: 'Buutti SuperCalculator 6000',
  cache: '96 GB',
  clockSpeed: 9001,
  overclock: [Function: overclock],
  savePower: [Function: savePower]
}
  */

superCalculator.overclock();
console.log(superCalculator);
/*
{
  name: 'Buutti SuperCalculator 6000',
  cache: '96 GB',
  clockSpeed: 9501,
  overclock: [Function: overclock],
  savePower: [Function: savePower]
}
  */

superCalculator.savePower();
console.log(superCalculator);
/*
{
  name: 'Buutti SuperCalculator 6000',
  cache: '96 GB',
  clockSpeed: 2000,
  overclock: [Function: overclock],
  savePower: [Function: savePower]
}
  */

superCalculator.savePower();
console.log(superCalculator);
/*
{
  name: 'Buutti SuperCalculator 6000',
  cache: '96 GB',
  clockSpeed: 1000,
  overclock: [Function: overclock],
  savePower: [Function: savePower]
}
  */
