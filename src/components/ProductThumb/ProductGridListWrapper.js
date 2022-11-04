import { Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import ProductGridList from "./ProductGridList";
import { addItemToCart } from "../../redux/slices/cart/slice";

const ProductGridListWrapper = ({ products, bottomSpace }) => {
  const { addToast } = useToasts();
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          return (
            <ProductGridList
              key={product.id}
              product={product}
              bottomSpace={bottomSpace}
              addToast={addToast}
              addToCart={addItemToCart}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridListWrapper;
