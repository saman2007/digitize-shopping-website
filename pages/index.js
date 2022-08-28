import ProductsLayout from "../components/ForProductsPage/ProductsLayout";
import { getAllProducts } from "../helpers/helpers";

export default function Home({ initProducts }) {
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
