import { expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJS from "crypto-js";

it('should encrypt a message using a callback', async () => {
    const message = 'Hello world';
    const secretKey = 'mySecretKey';
    const encryptedData = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (encryptedMessage) => {
            resolve(encryptedMessage);
        })
    })

    expect(encryptedData).toBeDefined();
})

it('should encrypt a message using a Promise', async () => {
    const message = 'Hello world';
    const secret = 'mySecretKey';
    const encryptedData = await encryptMessagePromise(message, secret)
    expect(encryptedData).toBeDefined();

})

it('should encrypt the message correctly', async () => {
    const message = 'Hello world';
    const secret = 'mySecretKey';
    const encryptedData = await encryptMessagePromise(message, secret)
    expect(encryptedData).toBeDefined();

    const decryptedData = CryptoJS.AES.decrypt(encryptedData, secret).toString(CryptoJS.enc.Utf8);

    expect(decryptedData).toBe(message);

})   