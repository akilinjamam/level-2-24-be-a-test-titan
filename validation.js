export function validationEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email address');
    };
    return email;
}

export function validateArrayNotEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Array must be a non-empty array');
    }
}
