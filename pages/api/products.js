import {
  getAllProducts,
  getFilteredProducts,
  paginateArray,
  sortProducts,
} from "../../helpers/helpers";

const Products = (req, res) => {
  if (req.method !== "GET") {
    res.status(400).json({ message: "please send a request with GET method" });
    return;
  }

  const filters = req.query;

  if (Object.keys(filters).length === 0) {
    res.status(200).json(getAllProducts());
    return;
  }

  const filteredProducts = getFilteredProducts(filters);

  sortProducts(filteredProducts, filters.sort);

  const pages = Math.ceil(filteredProducts.length / 10);

  res.status(200).json({
    datas: paginateArray(
      filteredProducts,
      10,
      filters.page ? Number(filters.page) : 1
    ),
    pages,
    thisPage: filters.page ? Number(filters.page) : 1,
  });
};

export default Products;
