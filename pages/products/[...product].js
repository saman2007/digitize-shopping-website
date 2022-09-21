import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsLayout from "../../components/ForProductsPage/ProductsLayout";
import Product from "../../components/Product/Product";
import { getFilteredProducts } from "../../helpers/helpers";
import { filtersActions } from "../../store/Filters";
const fs = require("fs/promises");
import classifictionDatas from "../../data/Classifictions.json";
import textOfPaths from "../../data/TextOfPaths.json";

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
  const root = process.cwd();
  let notFound = false;
  const allDatas = await fs
    .readdir(root + `/public/about-${productName}`, { encoding: "utf8" })
    .then((files) => {
      const allDatas = { pageImages: [], review: null };
      files.forEach((value) => {
        const image = value.split(".")[0];
        const imageInfos = {
          src: `/about-${productName}/${value}`,
          alt: productName,
        };
        if (Number(image)) {
          allDatas.pageImages.push(imageInfos);
        }
      });

      return allDatas;
    })
    .catch((reason) => (notFound = true));

  if (notFound) return 404;

  await fs
    .readFile(root + `/public/about-${productName}/review.txt`, {
      encoding: "utf-8",
    })
    .then((value) => {
      allDatas.review = value;
    })
    .catch((reason) => {
      allDatas.review = null;
    });

  return allDatas;
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
      textOfPaths[context.params.product[0]],
      textOfPaths[context.params.product[1]],
    ];

    return {
      props: {
        product: product[0],
      },
    };
  }
}

export default ProductsPage;
