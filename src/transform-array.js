function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`Expected array, got ${arr}`);

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
          if (typeof prev !== 'undefined') {
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

  return transformed;
}

module.exports = transform;
