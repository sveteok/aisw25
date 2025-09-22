/** contains the calculation logic */
import { ERROR_DIVISION_BY_ZERO } from "./constants.js";

export type command = "+" | "-" | "*" | "/";
type expression = {
  number1: number;
  number2: number;
  operation: command;
};

type Operations = Record<command, (n1: number, n2: number) => number>;

const Operations: Operations = {
  "+": (n1: number, n2: number): number => n1 + n2,
  "-": (n1: number, n2: number): number => n1 - n2,
  "*": (n1: number, n2: number): number => n1 * n2,
  "/": (n1: number, n2: number): number => {
    if (n2 === 0) {
      throw new Error(ERROR_DIVISION_BY_ZERO);
    }
    return n1 / n2;
  },
};

export const evaluateExpression = (expr: expression): number => {
  const { number1, number2, operation } = expr;
  return Operations[operation](number1, number2);
};

export default evaluateExpression;
