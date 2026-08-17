/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountBig = 50;
  const discountSmall = 20;
  const shortPeriod = 3;
  const longPeriod = 7;
  const totalCost = days * 40;

  if (days >= longPeriod) {
    return totalCost - discountBig;
  } else if (days >= shortPeriod) {
    return totalCost - discountSmall;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
