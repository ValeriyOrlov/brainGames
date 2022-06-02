 export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

export const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };