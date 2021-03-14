module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    const depth = arr.reduce((max, subArray) => {
      return Math.max(max, 1 + this.calculateDepth(subArray));
    }, 1);
    return depth;
  }
};
