/** handles output formatting */
import { InputResponse } from "./input.js";
import { RESULT } from "./constants.js";

export const printResult = (
  expression: InputResponse,
  result: number
): void => {
  console.log(
    `${RESULT} ${expression.number1} ${expression.operation} ${expression.number2} = ${result}`
  );
};

export const printError = (msg: string, error: boolean = false): void => {
  console.error(msg);
};
