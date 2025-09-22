/** handles output formatting */
import { Expression } from "./types.js";
import { RESULT, ERROR_OCCURRED } from "./constants.js";

export const printResult = (expression: Expression, result: number): void => {
  console.log(
    `${RESULT} ${expression.number1} ${expression.operation} ${expression.number2} = ${result}`
  );
};

export const printError = (error: Error): void => {
  console.error(`${ERROR_OCCURRED}: ${error.message}`);
};
