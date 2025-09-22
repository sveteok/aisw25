/** handles user input validation */
import { INCORRECT_EXPRESSION, UNKNOWN_ERROR } from "./constants.js";
import { command } from "./calculator.js";

export enum InputStatus {
  ERROR,
  OK,
}

interface InputResponse {
  status: InputStatus;
  errorMsg?: string;
  expression?: { number1: number; number2: number; operation: command };
}

export default function handleInput(input: string): InputResponse {
  const inputGroup = String(input)
    .toLowerCase()
    .match(
      // /^(-?(?:\d+(?:\.\d+)?|\.\d+))([\+\-\/\*])(-?(?:\d+(?:\.\d+)?|\.\d+))$/
      /^(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)\s*([\+\-\/\*])\s*(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)$/
    );

  if (inputGroup === null) {
    return {
      status: InputStatus.ERROR,
      errorMsg: `${INCORRECT_EXPRESSION}: ${input}`,
    };
  }
  const number1: number = Number.parseFloat(inputGroup[1]);
  const number2: number = Number.parseFloat(inputGroup[3]);
  const operation: command = inputGroup[2] as command;

  return {
    status: InputStatus.OK,
    expression: {
      number1,
      number2,
      operation,
    },
  };
}
