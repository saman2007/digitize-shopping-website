import ProductsLayout from "../../components/ForProductsPage/ProductsLayout";
import {
  getAllProductsInfos,
  getFilteredProducts,
} from "../../helpers/helpers";

const ProductsPage = ({ products }) => {
  return <ProductsLayout initProducts={products} />;
};

const originKinds = {
  phones: "تلفن همراه",
  laptops: "لپ تاپ",
  "smart-watches": "ساعت هوشمند",
};

export async function getServerSideProps(context) {
  if (context.params.product.length > 3) {
    return { notFound: true };
  }

  const filters = {
    kinds: originKinds[context.params.product[0]],
  };

  if (context.params.product[1]) filters.brands = context.params.product[1];
  if (context.params.product[2]) filters.path = context.resolvedUrl;

  const products = getFilteredProducts(filters, true);

  if (products.datas.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: { ...products },
    },
  };
}

export default ProductsPage;
