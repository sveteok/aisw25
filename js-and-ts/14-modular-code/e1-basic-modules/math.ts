const addition = (n1: number, n2: number): number => {
  return n1 + n2;
};

const subtraction = (n1: number, n2: number): number => {
  return n1 - n2;
};

const multiplication = (n1: number, n2: number): number => {
  return n1 * n2;
};

const division = (n1: number, n2: number): number => {
  if (n2 === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return n1 / n2;
};

export { addition, subtraction, multiplication, division };
