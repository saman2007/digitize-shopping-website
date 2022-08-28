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

const getAllProductsInfos = (products = productsDatas) => {
  let allColors = [];
  let allBrands = [];
  let allPrices = [];
  let allKinds = [];

  //push the brand, colors and price of products to the arrays
  products.forEach((pr) => {
    allBrands.push(pr.brand);
    allColors.push(pr.colors);
    allPrices.push(pr.price);
    allKinds.push(pr.kind);
  });

  //remove all the same values of these arrays
  allColors = [...new Set(allColors.flat())];
  allBrands = [...new Set(allBrands)];
  allPrices = [...new Set(allPrices)];
  allKinds = [...new Set(allKinds)];

  //get the lowest and highest price
  let minPrice = Math.min(...allPrices);
  let maxPrice = Math.max(...allPrices);

  return {
    price: { min: minPrice, max: maxPrice },
    colors: allColors,
    brands: allBrands,
    kinds: allKinds,
  };
};

//a function to return the full products and its datas
const getAllProducts = () => {
  //sort the products datas by popularity
  productsDatas.sort(sortByPopularity);

  //paginate the products datas
  const pages = Math.ceil(productsDatas.length / 10);

  return {
    datas: paginateArray(productsDatas, 10, 1),
    pages,
    thisPage: 1,
    ...getAllProductsInfos(),
  };
};

//a function to return the products base the filters
const getFilteredProducts = (filters, getPagesInfos) => {
  const products = productsDatas.filter((data) => {
    let isProductOk = false;

    for (const key in filters) {
      if (key === "price") {
        const splitedPrice = filters.price.split(",");

        if (
          data.price >= Number(splitedPrice[0]) &&
          data.price <= Number(splitedPrice[1])
        ) {
          isProductOk = true;
        } else {
          isProductOk = false;
          break;
        }
      } else if (key === "kinds") {
        const splitedKinds = filters.kinds.split(",");

        if (splitedKinds.includes(data.kind)) {
          isProductOk = true;
        } else {
          isProductOk = false;
          break;
        }
      } else if (key === "colors") {
        const splitedColors = filters.colors.split(",");

        if (
          splitedColors.includes("all") ||
          data.colors.some((color) => splitedColors.includes(color))
        ) {
          isProductOk = true;
        } else {
          isProductOk = false;
          break;
        }
      } else if (key === "brands") {
        const splitedBrands = filters.brands.split(",");

        if (
          splitedBrands.includes("all") ||
          splitedBrands.includes(data.brand) ||
          splitedBrands.some(
            (value) =>
              data.brand.substring(
                data.brand.indexOf("(") + 1,
                data.brand.lastIndexOf(")")
              ) === value
          )
        ) {
          isProductOk = true;
        } else {
          isProductOk = false;
          break;
        }
      } else if (key === "path") {
        if (data.path === filters.path) {
          isProductOk = true;
        } else {
          isProductOk = false;
          break;
        }
      }
    }

    return isProductOk;
  });

  if (!getPagesInfos) return products;
  else {
    //paginate the products datas
    const pages = Math.ceil(products.length / 10);

    return {
      datas: paginateArray(products, 10, 1),
      pages,
      thisPage: 1,
      ...getAllProductsInfos(products)
    };
  }
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
  getAllProductsInfos,
  axios,
};
