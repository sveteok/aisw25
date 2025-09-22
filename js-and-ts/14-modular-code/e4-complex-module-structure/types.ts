export type Command = "+" | "-" | "*" | "/";
export type Expression = {
  number1: number;
  number2: number;
  operation: Command;
};
