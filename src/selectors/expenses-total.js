// Commented out below is my version without map that also works
// const initialValue = 0;
// export default (expenses = []) => expenses.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.amount, initialValue
// );

export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
