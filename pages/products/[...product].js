import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsLayout from "../../components/ForProductsPage/ProductsLayout";
import Product from "../../components/Product/Product";
import { getFilteredProducts } from "../../helpers/helpers";
import { filtersActions } from "../../store/Filters";
import classifictionDatas from "../../data/Classifictions.json";
import textOfPaths from "../../data/TextOfPaths.json";
const fs = require("fs/promises");
const path = require("path");

const ProductsPage = ({ products, product }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    products && dispatch(filtersActions.changeAddress(products.kinds[0]));
  }, [products]);

  return (
    <>
      {products ? (
        <ProductsLayout initProducts={products} />
      ) : (
        <Product
          datas={product}
          classifiction={classifictionDatas[0].datas.find(
            (data) => data.text === product.kind
          )}
        />
      )}
    </>
  );
};

const originKinds = {
  phones: "تلفن همراه",
  laptops: "لپ تاپ",
  "smart-watches": "ساعت هوشمند",
};

const getPagePhotosAndReview = async (productName) => {
  const allDatas = { pageImages: [], review: null };

  try {
    const dirRelativeToPublicFolder = `about-${productName}`;
    const dir = path.resolve("./public", dirRelativeToPublicFolder);
    const filenames = await fs.readdir(dir, { encoding: "utf8" });

    for (let index = 0; index < filenames.length; index++) {
      const name = filenames[index];

      if (!isNaN(Number(name.split(".")[0]))) {
        allDatas.pageImages.push({
          src: `/${dirRelativeToPublicFolder}/${name}`,
          alt: productName,
        });
      } else if (name === "review.txt") {
        allDatas.review = await fs.readFile(path.join(dir, name), {
          encoding: "utf8",
        });
      }
    }
  } catch (error) {
  } finally {
    return allDatas;
  }
};

export async function getServerSideProps(context) {
  if (context.params.product.length > 3) {
    return { notFound: true };
  }

  if (context.params.product.length < 3) {
    const filters = {
      kinds: originKinds[context.params.product[0]] || " ",
    };

    if (context.params.product[1]) filters.brands = context.params.product[1];

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

  if (context.params.product.length === 3) {
    const filters = {
      path: context.resolvedUrl,
    };

    const product = getFilteredProducts(filters, false);

    if (product.length === 0) {
      return {
        notFound: true,
      };
    }

    const splitedPath = product[0].path.split("/");
    const pagePhotosAndReview = await getPagePhotosAndReview(
      splitedPath[splitedPath.length - 1]
    );

    if (pagePhotosAndReview === 404) return { notFound: true };

    product[0] = {
      ...product[0],
      ...pagePhotosAndReview,
    };

    product[0].addressArray = [
      textOfPaths[context.params.product[0]] || null,
      textOfPaths[context.params.product[1]] || null,
    ];

    return {
      props: {
        product: product[0],
      },
    };
  }
}

export default ProductsPage;
