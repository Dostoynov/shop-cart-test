import formatCurrency from "./utlis";

test('Add $ to front of number and convert into a string', () => {
  const price = formatCurrency(22);
  expect(price).toBe('$22 ');
})