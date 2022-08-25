import { useTransition } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "../helpers/helpers";
import { paginationAction } from "../store/Pagination";

const useProducts = (init, page) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInited, setIsInited] = useState(init);
  const prices = useSelector((store) => store.filters.price);
  const brands = useSelector((store) => store.filters.brandsFilter);
  const colors = useSelector((store) => store.filters.brandColors);
  const kinds = useSelector((store) => store.filters.productsFilters);
  const [isPending, transition] = useTransition();
  const sortText = useSelector((store) => store.filters.productsSortFilter);
  const dispatch = useDispatch();

  const getFilters = () => {
    return {
      price: `${prices.min},${prices.max}`,
      kinds: kinds.join(","),
      brands: brands.join(","),
      colors: colors.join(","),
      sort: sortText,
      page,
    };
  };

  const getProducts = (abortController) => {
    transition(async () => {
      setHasError(false);
      setIsLoading(true);

      await axios
        .get("products", {
          params: getFilters(),
          signal: abortController.signal,
        })
        .then((value) => {
          setIsLoading(false);
          setProducts(JSON.parse(value.data));
        })
        .catch((error) => {
          setIsLoading(false);
          setHasError(true);
        });
    });
  };

  useEffect(() => {
    if (page !== 1) {
      const id = setTimeout(() => {
        dispatch(paginationAction.goToPage(1));
      }, 500);

      return () => {
        clearTimeout(id);
      };
    }
  }, [prices, brands, colors, kinds, sortText]);

  useEffect(() => {
    if (isInited) {
      const abortController = new AbortController();
      const id = setTimeout(getProducts.bind(null, abortController), 500);

      return () => {
        clearTimeout(id);
        abortController.abort();
      };
    } else {
      setIsInited(true);
    }
  }, [prices, brands, colors, kinds, sortText, page]);

  return {
    hasError,
    isLoading,
    datas: products,
    getProducts,
  };
};

export default useProducts;
