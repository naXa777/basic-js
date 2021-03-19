class VigenereCipheringMachine {
  ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  base = 'A'.charCodeAt(0);
  max = this.ALPHABET.length;

  constructor(direct = true) {
    this.reverse = !direct;
  }

  encrypt(message, key) {
    if (arguments.length < 2)
      throw new Error('Expected 2 arguments: message and key.');

    const encrypted = message.toUpperCase()
        .split('')
        .map((letter, i) => {
          if (!this.ALPHABET.includes(letter))
            return letter;
          const keyShift = key.charCodeAt(i % key.length) - this.base;
          const shift = letter.charCodeAt(0) - this.base;
          return this.ALPHABET[(keyShift + shift) % this.max];
        });

    return this.reverse ? encrypted.reverse().join('') : encrypted.join('');
  }

  decrypt(message, key) {
    if (arguments.length < 2)
      throw new Error('Expected 2 arguments: message and key.');

    const decrypted = message.toUpperCase()
        .split('')
        .map((letter, i) => {
          if (!this.ALPHABET.includes(letter))
              return letter;
          const keyShift = key.charCodeAt(i % key.length) - this.base;
          const shift = letter.charCodeAt(0) - this.base;
          return this.ALPHABET[(this.max + shift - keyShift) % this.max];
        });

    return this.reverse ? decrypted.reverse().join('') : decrypted.join('');
  }
}

module.exports = VigenereCipheringMachine;
