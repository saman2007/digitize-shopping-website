import Product from "./Product/Product";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useTransition } from "react";

const sort = {
  "محبوب ترین محصول": 0,
  "پر بازدید ترین محصول": 1,
  "گران ترین محصول": 2,
  "ارزان ترین محصول": 3,
};

const sortByPopularity = (pr1, pr2) =>
  pr1.popularity >= pr2.popularity ? -1 : 1;
const sortByMostVisits = (pr1, pr2) =>
  pr1.visits >= pr2.visits ? -1 : 1;
const sortByMostExpensives = (pr1, pr2) => (pr1.price >= pr2.price ? -1 : 1);
const sortByLessExpensives = (pr1, pr2) => (pr1.price <= pr2.price ? -1 : 1);

const Products = ({ datas }) => {
  const prices = useSelector((store) => store.filters.price);
  const brands = useSelector((store) => store.filters.brandsFilter);
  const colors = useSelector((store) => store.filters.brandColors);
  const kinds = useSelector((store) => store.filters.productsFilters);
  const sortText = useSelector((store) => store.filters.productsSortFilter);
  const [products, setProducts] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      let newDatas = JSON.parse(JSON.stringify(datas));
      if (sort[sortText] === 0) newDatas.sort(sortByPopularity);
      else if (sort[sortText] === 1) newDatas.sort(sortByMostVisits);
      else if (sort[sortText] === 2) newDatas.sort(sortByMostExpensives);
      else if (sort[sortText] === 3) newDatas.sort(sortByLessExpensives);

      const renderedProducts = newDatas.map((data) => {
        if (kinds.includes(data.kind)) {
          if (data.price >= prices.min && data.price <= prices.max) {
            const isBrandOk = brands.includes(data.brand);
            if (brands.includes("all") || isBrandOk) {
              const areColorsOk = data.colors.some((color) =>
                colors.includes(color)
              );
              if (colors.includes("all") || areColorsOk) {
                return <Product {...data} key={data.name} />;
              }
            }
          }
        }
      });

      setProducts(renderedProducts);
    });
  }, [prices, brands, colors, kinds, sortText]);

  return (
    <div className="col-start-1 flex-wrap justify-around gap-[10px] sm:col-end-8 col-end-9 row-start-4 sm:row-start-2 row-end-[8] flex w-full">
      {products}
    </div>
  );
};

export default Products;
