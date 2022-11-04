import { Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import ProductGridFour from "./ProductGridFour";
import { addItemToCart } from "../../redux/slices/cart/slice";

const ProductGridWrapperFour = ({ products }) => {
  const { addToast } = useToasts();
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          /*const wishlistItem = wishlistItems.filter(
            (wishlistItem) => wishlistItem.id === product.id
          )[0];*/
          const productItem = { ...product.attributes, id: product.id };
          return (
            <ProductGridFour
              key={product.id}
              product={productItem}
              addToCart={addItemToCart}
              addToast={addToast}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapperFour;
