const getPercentOf = (number1, number2) => (number1 / number2) * 100;

const getNumberFromPercent = (number1, number2) => (number1 * number2) / 100;

const getMinMaxValues = ({ min, max, space }) => {
  const minimumValue = getNumberFromPercent(min, space);
  const maximumValue = getNumberFromPercent(max, space);

  return { minimumValue, maximumValue };
};

const debounce = (fn, delay, immidiateRunFirst = false) => {
  let timeout = null;
  let first = immidiateRunFirst ? true : false;

  return (...args) => {
    clearTimeout(timeout);

    if (!first) fn(...args);
    else
      timeout = setTimeout(() => {
        fn(...args);
      }, delay);

    first = true;
  };
};

export { getPercentOf, getNumberFromPercent, getMinMaxValues, debounce };
