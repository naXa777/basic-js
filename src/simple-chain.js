const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    if (value === null) value = 'null';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(+position) || position > this.chain.length || position < 1) {
      this.chain = [];
      throw Error(`Position out of bounds: ${position}.`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finalChain = this.chain.length > 0 ? '( ' + this.chain.join(' )~~( ') + ' )' : '';
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
