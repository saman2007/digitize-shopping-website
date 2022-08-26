import { Axios } from "axios";
import productsDatas from "../data/Products.json";

const sorts = {
  "محبوب ترین محصول": 0,
  "پر بازدید ترین محصول": 1,
  "گران ترین محصول": 2,
  "ارزان ترین محصول": 3,
};

//all products sort methods
const sortByPopularity = (pr1, pr2) =>
  pr1.popularity >= pr2.popularity ? -1 : 1;
const sortByMostVisits = (pr1, pr2) => (pr1.visits >= pr2.visits ? -1 : 1);
const sortByMostExpensives = (pr1, pr2) => (pr1.price >= pr2.price ? -1 : 1);
const sortByLessExpensives = (pr1, pr2) => (pr1.price <= pr2.price ? -1 : 1);

//a function to return percentage of the number 1 from number 2
const getPercentOf = (number1, number2) => (number1 / number2) * 100;

//a function to return the number of percent from the number 2
const getNumberFromPercent = (number1, number2) => (number1 * number2) / 100;

//a function to return the min and max numbers
const getMinMaxValues = ({ min, max, space }) => {
  const minimumValue = getNumberFromPercent(min, space);
  const maximumValue = getNumberFromPercent(max, space);

  return { minimumValue, maximumValue };
};

//debounce function
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

//a function to paginate an array
const paginateArray = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

//axios
const axios = new Axios({
  baseURL: typeof window === "object" && window.location.origin + "/api/",
});

//a function to return the full products and its datas
const getAllProducts = () => {
  let allColors = [];
  let allBrands = [];
  let allPrices = [];

  //push the brand, colors and price of products to the arrays
  productsDatas.forEach((pr) => {
    allBrands.push(pr.brand);
    allColors.push(pr.colors);
    allPrices.push(pr.price);
  });

  //remove all the same values of these arrays
  allColors = [...new Set(allColors.flat())];
  allBrands = [...new Set(allBrands)];
  allPrices = [...new Set(allPrices)];

  //get the lowest and highest price
  let minPrice = Math.min(...allPrices);
  let maxPrice = Math.max(...allPrices);

  //sort the products datas by popularity
  productsDatas.sort(sortByPopularity);

  //paginate the products datas
  const pages = Math.ceil(productsDatas.length / 10);

  return {
    datas: paginateArray(productsDatas, 10, 1),
    colors: allColors,
    brands: allBrands,
    pages,
    price: { min: minPrice, max: maxPrice },
    thisPage: 1,
  };
};

//a function to return the products base the filters
const getFilteredProducts = (filters) => {
  const products = productsDatas.filter((data) => {
    const splitedPrice = filters.price.split(",");
    const splitedKinds = filters.kinds.split(",");
    const splitedColors = filters.colors.split(",");
    const splitedBrands = filters.brands.split(",");

    if (
      data.price >= Number(splitedPrice[0]) &&
      data.price <= Number(splitedPrice[1]) &&
      splitedKinds.includes(data.kind) &&
      (splitedColors.includes("all") ||
        data.colors.some((color) => splitedColors.includes(color))) &&
      (splitedBrands.includes("all") || splitedBrands.includes(data.brand))
    )
      return true;
    else return false;
  });

  return products;
};

//a function to sort the products
const sortProducts = (products, sort) => {
  const whatSort = sorts[sort];

  products.sort(
    whatSort === 0
      ? sortByPopularity
      : whatSort === 1
      ? sortByMostVisits
      : whatSort === 2
      ? sortByMostExpensives
      : whatSort === 3
      ? sortByLessExpensives
      : sortByPopularity
  );
};

export {
  getPercentOf,
  getNumberFromPercent,
  getMinMaxValues,
  debounce,
  paginateArray,
  getAllProducts,
  getFilteredProducts,
  sortProducts,
  axios,
};
