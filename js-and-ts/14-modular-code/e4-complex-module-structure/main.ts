/** orchestrates the other modules */
import printResultLine from "./display.js";
import handleInput, { InputStatus } from "./input.js";
import evaluateExpression from "./calculator.js";
import {
  PROMPT_TXT,
  WELCOME_TXT,
  HELP_TXT,
  GOODBYE_TXT,
  RESULT,
  UNKNOWN_ERROR,
  ERROR_OCCURRED,
} from "./constants.js";

const { createInterface } = await import("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: PROMPT_TXT,
});

rl.write("\r\n");
rl.write(WELCOME_TXT);
rl.write(HELP_TXT);
rl.prompt();
rl.on("line", (line: string) => {
  const rawInput = line.trim();
  const command = rawInput.toLowerCase();

  switch (command) {
    case "exit":
    case "e":
      rl.close();
      return;
    case "help":
    case "h":
      console.log(HELP_TXT);
      break;
    default:
      try {
        const { status, errorMsg, expression } = handleInput(rawInput);
        if (status === InputStatus.ERROR && errorMsg) {
          printResultLine(errorMsg, true);
        } else if (expression !== undefined) {
          const result = evaluateExpression(expression);
          printResultLine(
            `${RESULT} ${expression.number1} ${expression.operation} ${expression.number2} = ${result}`
          );
        }
      } catch (error) {
        printResultLine(
          `${ERROR_OCCURRED}: ${
            error instanceof Error ? error.message : UNKNOWN_ERROR
          }`,
          true
        );
      }

      break;
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log(GOODBYE_TXT);
});
