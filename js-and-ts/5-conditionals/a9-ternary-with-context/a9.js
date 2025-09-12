/*
We are evaluating two computer systems on which we perform an identical set of work.

Computer #1 does the job in 42 minutes with an average energy consumption of 600 watts.

Computer #2 does the job in 57 minutes and uses an average of 480 watts during the process.

Programmatically calculate which computer used less power for the job. 
Total power used is determined by average power consumption multiplied by the time 
it took for the job to finish.

Using a ternary operator, print the number of the computer which used less electricity.

EXTRA-extra: Use a ternary operator in the parameter that you give to console.log.
*/

const computer1 = {
  jobTime: 42,
  consumption: 600,
};

const computer2 = {
  jobTime: 57,
  consumption: 480,
};

const powerUsed1 = computer1.jobTime * computer1.consumption;
const powerUsed2 = computer2.jobTime * computer2.consumption;
console.log(
  `The computer ${powerUsed1 < powerUsed2 ? 1 : 2} used less electicity`
);
