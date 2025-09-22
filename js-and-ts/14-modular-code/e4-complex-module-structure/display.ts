/** handles output formatting */

const printResultLine = (msg: string, error: boolean = false): void => {
  if (error) {
    console.error(msg);
  } else {
    console.log(msg);
  }
};
export default printResultLine;
