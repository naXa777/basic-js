const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string')
    return false;
  const activity = +sampleActivity;
  if (activity > 0 && activity <= 15)
    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (LOG_2 / HALF_LIFE_PERIOD));
  return false;
};
