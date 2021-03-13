module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  date.getUTCMonth();  // throws error on fake date

  if (date.getMonth() < 2) return "winter";
  if (date.getMonth() < 5) return "spring";
  if (date.getMonth() < 8) return "summer";
  if (date.getMonth() < 11) return "autumn";
  if (date.getMonth() === 11) return "winter";
};
