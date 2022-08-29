import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsLayout from "../components/ForProductsPage/ProductsLayout";
import { getAllProducts } from "../helpers/helpers";
import { filtersActions } from "../store/Filters";

export default function Home({ initProducts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersActions.changeAddress("خانه"));
  }, []);
  return (
    <>
      <ProductsLayout initProducts={initProducts} />
    </>
  );
}

export async function getServerSideProps() {
  const products = getAllProducts();

  return {
    props: { initProducts: products },
  };
}
