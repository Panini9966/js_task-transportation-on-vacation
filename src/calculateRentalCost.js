/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountBig = 50;
  const discountSmall = 20;
  const totalDays = days * 40;
  const shortPeriod = 3;
  const longPeriod = 7;

  if (days >= longPeriod) {
    return totalDays - discountBig;
  } else if (days >= shortPeriod) {
    return totalDays - discountSmall;
  }

  return totalDays;
}

module.exports = calculateRentalCost;
