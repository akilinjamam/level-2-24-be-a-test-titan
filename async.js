import CryptoJS from "crypto-js"
export function encryptMessage(message, key, callback) {
    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();
            if (encryptMessage) {
                resolve(encryptMessage);
            } else {
                reject(new Error('Encryption failed'));
            }
        }, 2000)
    })
}

const message = {
    name: 'John Doe',
    email: 'johndoe@gmail.com'
}

const secretKey = 'mySecretKey';

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
    console.log('Encrypted message using callback:', encryptedMessage);
});


encryptMessagePromise(JSON.stringify(message?.email), secretKey).then((encryptedMessage) => {
    console.log('Encrypted message using Promise:', encryptedMessage);
});

console.log(JSON.stringify(message));