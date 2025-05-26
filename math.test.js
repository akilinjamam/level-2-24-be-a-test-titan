import { it, expect } from 'vitest';
import { add } from './math';

it('should add numbers', () => {
    // arrange
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((acc, sum) => acc + sum);

    // action
    const result = add(numbers);

    // assertion 
    expect(result).toBe(expectedResult);
})


it('it should provide NaN if at least one invalid number is provided', () => {
    // arrange
    const numbers = [1, 2, 'invalid', 4, 5];


    // action
    const result = add(numbers);

    // assertion 
    expect(result).toBeNaN();
})


it('it should provide correct sum if an array numeric string is provided', () => {
    // arrange
    const numbers = ['1', '2', '3', '4', '7'];
    const expectedResult = numbers.reduce((acc, sum) => +acc + +sum);

    // action
    const result = add(numbers);

    // assertion 
    expect(result).toBe(expectedResult);
})