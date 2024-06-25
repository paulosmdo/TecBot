function isSaturday() {
    const today = new Date();
    return today.getDay() === 6;  // 6 representa sábado
}

function isTimeWithinLimit() {
    const now = new Date();
    return now.getHours() >= 8 && now.getHours() < 12;
}

module.exports = {
    isSaturday,
    isTimeWithinLimit,
  };