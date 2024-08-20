export class NumberUtils {
  /**
   * Checks if a number is even.
   * @param num The number to check.
   * @returns True if the number is even, false otherwise.
   */
  static isEven(num: number): boolean {
    return num % 2 === 0;
  }

  /**
   * Checks if a number is odd.
   * @param num The number to check.
   * @returns True if the number is odd, false otherwise.
   */
  static isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

  /**
   * Rounds a number to a specified number of decimal places.
   * @param num The number to round.
   * @param decimalPlaces The number of decimal places to round to.
   * @returns The rounded number.
   */
  static round(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }

  /**
   * Calculates the sum of an array of numbers.
   * @param numbers The array of numbers to sum.
   * @returns The sum of the numbers.
   */
  static sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * Calculates the average of an array of numbers.
   * @param numbers The array of numbers to average.
   * @returns The average of the numbers.
   */
  static average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return this.sum(numbers) / numbers.length;
  }

  /**
   * Finds the maximum number in an array of numbers.
   * @param numbers The array of numbers to search.
   * @returns The maximum number in the array.
   */
  static max(numbers: number[]): number {
    if (numbers.length === 0) throw new Error('Array is empty');
    return Math.max(...numbers);
  }

  /**
   * Finds the minimum number in an array of numbers.
   * @param numbers The array of numbers to search.
   * @returns The minimum number in the array.
   */
  static min(numbers: number[]): number {
    if (numbers.length === 0) throw new Error('Array is empty');
    return Math.min(...numbers);
  }
}
