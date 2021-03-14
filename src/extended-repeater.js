module.exports = function repeater(str, {
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator = '|',
}) {
    if (addition === null)
        addition = 'null';
    let appendix = addition;
    if (typeof addition !== 'undefined' && typeof additionRepeatTimes !== 'undefined' && additionRepeatTimes > 0)
        appendix = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    if (typeof repeatTimes !== 'undefined' && repeatTimes > 0)
        return Array(repeatTimes).fill(str + appendix).join(separator);
    return str + appendix;
};
