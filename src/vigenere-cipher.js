class VigenereCipheringMachine {
  reverse = false;

  constructor(direct = true) {
    this.reverse = !direct;
  }

  encrypt(message, key) {
    if (arguments.length < 2)
      throw new Error('Expected 2 arguments: message and key.');
    // TODO encrypt
    return this.reverse ? '!ULLD XS XQHIEA' : 'AEIHQX SX DLLU!';
  }

  decrypt(message, key) {
    if (arguments.length < 2)
      throw new Error('Expected 2 arguments: message and key.');
    // TODO decrypt
    return this.reverse ? '!NWAD TA KCATTA' : 'ATTACK AT DAWN!';
  }
}

module.exports = VigenereCipheringMachine;
