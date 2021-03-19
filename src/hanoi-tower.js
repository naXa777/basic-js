module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const HOUR_IN_SECONDS = 60 * 60;
    const turns = 2 ** disksNumber - 1;
    return {
        turns: turns,
        seconds: Math.floor(HOUR_IN_SECONDS / turnsSpeed * turns),
    }
};
