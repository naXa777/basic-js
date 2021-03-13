module.exports = function countCats(matrix) {
    return matrix
        .flat(Infinity)
        .reduce((count, cat) => count + 1 * (cat === '^^'), 0);
};
