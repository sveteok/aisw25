/** handles user input validation */
import { INCORRECT_EXPRESSION } from "./constants.js";
import { command } from "./calculator.js";

export interface InputResponse {
  number1: number;
  number2: number;
  operation: command;
}

export default function handleInput(input: string): InputResponse {
  const inputGroup = String(input)
    .toLowerCase()
    .match(
      // /^(-?(?:\d+(?:\.\d+)?|\.\d+))([\+\-\/\*])(-?(?:\d+(?:\.\d+)?|\.\d+))$/
      /^(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)\s*([\+\-\/\*])\s*(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)$/
    );

  if (inputGroup === null) {
    throw new Error(`${INCORRECT_EXPRESSION}: ${input}`);
  }
  const number1: number = Number.parseFloat(inputGroup[1]);
  const number2: number = Number.parseFloat(inputGroup[3]);
  const operation: command = inputGroup[2] as command;

  return { number1, number2, operation };
}
