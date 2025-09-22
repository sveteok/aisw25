/** handles user input validation */
import { INCORRECT_EXPRESSION } from "./constants.js";
import { Command, Expression } from "./types.js";

export default function handleInput(input: string): Expression {
  const inputGroup = String(input)
    .toLowerCase()
    .match(
      /^(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)\s*([\+\-\/\*])\s*(-?(?:\d+(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?)$/
    );

  if (inputGroup === null) {
    throw new Error(`${INCORRECT_EXPRESSION}: ${input}`);
  }
  const number1: number = Number.parseFloat(inputGroup[1]);
  const number2: number = Number.parseFloat(inputGroup[3]);
  const operation: Command = inputGroup[2] as Command;

  return { number1, number2, operation };
}
