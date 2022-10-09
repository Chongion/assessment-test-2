// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.lenght; i++) {
    return total
  }
}

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  let average = 0;

  let total = 0;

  for (let i = 0; i < items.lenght; i++) {
    total += items[i].price;

    average = total / items.lenght;
  }
  return average
}

export { calculateTotal, calculateAvg };

