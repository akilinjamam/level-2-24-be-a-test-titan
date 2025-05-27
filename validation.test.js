import { expect, it } from "vitest";
import { validateArrayNotEmpty, validationEmail } from "./validation";

it('should validate the input', () => {
    const email = 'example@gmail.com';
    const resultFn = () => validationEmail(email);
    expect(resultFn).not.toThrow();
})
it('throw an error for a empty string pass', () => {
    const email = '';
    const resultFn = () => validationEmail(email);
    expect(resultFn).toThrow();
})
it('throw an error for null email address', () => {

    const resultFn = () => validationEmail(null);
    expect(resultFn).toThrow('Invalid email address');
})
it('throw an error for undefine email address', () => {

    const resultFn = () => validationEmail(undefined);
    expect(resultFn).toThrow('Invalid email address');
})

it('should validate non empty array', () => {

    const resultFn = () => validateArrayNotEmpty([1, 2, 3]);
    expect(resultFn).not.toThrow();
})
it('through an error for a undefined input ', () => {

    const resultFn = () => validateArrayNotEmpty(undefined);
    expect(resultFn).toThrow();
})
it('through an error for a null input ', () => {

    const resultFn = () => validateArrayNotEmpty(null);
    expect(resultFn).toThrow();
})