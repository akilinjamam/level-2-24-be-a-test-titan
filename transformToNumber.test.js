import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it('should transform an string to a number', () => {
    const stringNumber = '10';
    const result = transformToNumber(stringNumber);

    expect(result).toBeTypeOf('number')
    expect(isNaN(result)).not.toBe(true);
})