class VigenereCipheringMachine {
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    base = this.ALPHABET.charCodeAt(0);
    max = this.ALPHABET.charCodeAt(this.ALPHABET.length - 1);

    constructor(direct = true) {
        this.reverse = !direct;
    }

    encrypt(message, key) {
        if (arguments.length < 2)
            throw new Error('Expected 2 arguments: message and key.');

        key = key.toUpperCase();
        let skippedCount = 0;
        const encrypted = message.toUpperCase()
            .split('')
            .map((letter, i) => {
                if (!this.ALPHABET.includes(letter)) {
                    ++skippedCount;
                    return letter;
                }
                const keyShift = key.charCodeAt((i - skippedCount) % key.length) - this.base;
                const newLetter = (letter.charCodeAt(0) + keyShift);
                if (newLetter <= this.max)
                    return this.ALPHABET[newLetter - this.base];
                else
                    return this.ALPHABET[newLetter - this.max - 1];
            });

        return this.reverse ? encrypted.reverse().join('') : encrypted.join('');
    }

    decrypt(message, key) {
        if (arguments.length < 2)
            throw new Error('Expected 2 arguments: message and key.');

        key = key.toUpperCase();
        let skippedCount = 0;
        const decrypted = message.toUpperCase()
            .split('')
            .map((letter, i) => {
                if (!this.ALPHABET.includes(letter)) {
                    ++skippedCount;
                    return letter;
                }
                const keyShift = key.charCodeAt((i - skippedCount) % key.length) - this.base;
                const newLetter = (letter.charCodeAt(0) - keyShift);
                if (newLetter >= this.base)
                    return this.ALPHABET[newLetter - this.base];
                else
                    return this.ALPHABET[newLetter + this.ALPHABET.length - this.base];
            });

        return this.reverse ? decrypted.reverse().join('') : decrypted.join('');
    }
}

module.exports = VigenereCipheringMachine;
