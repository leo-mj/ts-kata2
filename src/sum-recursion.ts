/**
 * Returns the sum total of all numbers in an array through recursion rather than a loop.
 * @param {number[]} inputElement - array of numbers to be summed
 * @returns {number} - the sum total of all numbers in inputElement
 */
function sumArray(inputElement: number[]): number {
  let total: number = inputElement[0];
  if (inputElement.length > 1) {
    inputElement.shift();
    total += sumArray(inputElement);
  }
  return total;
}

export default sumArray;
