/** orchestrates the other modules */
import { printResult, printError } from "./display.js";
import handleInput from "./input.js";
import evaluateExpression from "./calculator.js";
import { PROMPT_TXT, WELCOME_TXT, HELP_TXT, GOODBYE_TXT } from "./constants.js";

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
        const expression = handleInput(rawInput);
        const result = evaluateExpression(expression);
        printResult(expression, result);
      } catch (error) {
        printError(error);
      }

      break;
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log(GOODBYE_TXT);
});
