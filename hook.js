export class User {
    constructor(email) {
        this.email = email;
    }

    updateEmail(newEmail) {
        return this.email = newEmail;
    }

    clearEmail() {
        return this.email = '';
    }

}