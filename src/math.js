export const getRandom = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
