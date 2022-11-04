import { Fragment } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { IoIosClose } from "react-icons/io";
import { deleteFromCart } from "../../../redux/actions/cartActions";

const MiniCart = ({ cartItems, deleteFromCart }) => {
  const { addToast } = useToasts();
  return (
    <Fragment>
      {cartItems.length > 0 ? (
        <div className="cart-box">
          <ul className="cart-list">
            {cartItems.map((product, key) => {
              return (
                <li key={key}>
                  <button
                    className="item-remove"
                    onClick={() => deleteFromCart(product, addToast)}
                  >
                    <IoIosClose />
                  </button>
                  <div className="single-item">
                    <div className="single-item__image">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product?.slug}`}
                        as={"/shop/product-basic/" + product?.slug}
                      >
                        <a>
                          <img
                            src={product.images.data[0].attributes.url}
                            alt="cart_thumb1"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="single-item__content">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={"/shop/product-basic/" + product.slug}
                      >
                        <a>{product.name}</a>
                      </Link>
                      <span className="cart-quantity">
                        {" "}
                        Quantité: {product.quantity} x{" "}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-footer">
            <div className="cart-buttons">
              <Link href="/other/cart">
                <a className="btn btn-fill-line view-cart">Panier</a>
              </Link>
              <Link href="/other/checkout">
                <a className="btn btn-fill-out checkout">Devis</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(null, mapDispatchToProps)(MiniCart);
