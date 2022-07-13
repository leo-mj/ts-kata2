/**
 * Returns the sum total of all numbers in an array through recursion rather than a loop.
 * @param {number[]} inputElement - array of numbers to be summed
 * @returns {number} - the sum total of all numbers in inputElement
 */
function sumRecursively(inputElement: number[]): number {
  let total: number = inputElement[0];
  if (inputElement.length > 1) {
    inputElement.shift();
    total += sumRecursively(inputElement);
  }
  return total;
}

export default sumRecursively;
