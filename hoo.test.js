import { beforeEach, expect, it } from "vitest";
import { User } from "./hook";

const testEmail = 'test@gmail.com';


let user;

beforeEach(() => {
    user = new User(testEmail);
})

it('should have an email property', () => {

    expect(user).toHaveProperty('email');
});

it('should update the email property', () => {

    const newEmail = 'test2@gmail.com';
    user.updateEmail(newEmail);
    expect(user.email).toBe(newEmail);
});

it('should store the provided email value', () => {

    expect(user.email).toBe(testEmail);
});

it('should clear the email property', () => {

    user.clearEmail();
    expect(user.email).toBe('');
});

it('should still have an email property after clearing it', () => {

    user.clearEmail();
    expect(user).toHaveProperty('email');
});
