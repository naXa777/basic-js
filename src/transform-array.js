const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))
    throw new CustomError('Not implemented');

  console.log('input');
  console.log(arr);

  const transformed = [];
  let doubleNext = false;
  let skipNext = false;
  let skippedPrev = false;
  arr.forEach(e => {
    switch (e) {
      case '--discard-next':
        skipNext = true;
        break;
      case '--discard-prev':
        if (skippedPrev) {
          // advanced: do not discard previous, if it was already discarded by '--discard-next'
          skippedPrev = false;
        } else {
          transformed.pop();
        }
        break;
      case '--double-next':
        doubleNext = true;
        break;
      case '--double-prev':
        if (skippedPrev) {
          // advanced: do not double previous, if it was discarded by --discard-next
          skippedPrev = false;
        } else {
          const prev = transformed.pop();
          if (prev) {
            transformed.push(prev);
            transformed.push(prev);
          }
        }
        break;
      default:
        if (!skipNext) {
          transformed.push(e);
          if (doubleNext) {
            transformed.push(e);
          }
          skippedPrev = false;
        } else {
          skippedPrev = true;
        }
        skipNext = false;
        doubleNext = false;
    }
  });

  console.log('output');
  console.log(transformed);

  return transformed;
};
