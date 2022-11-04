import { useState, Fragment } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { IoIosClose } from "react-icons/io";
import { cartState } from "../../redux/slices/cart/selectors";
import {
  addItemToCart,
  decreaseItemQuantity,
  deleteAllItemToCart,
  deleteItemToCart,
  increaseItemQuantity,
} from "../../redux/slices/cart/slice";

const Cart = () => {
  const [quantityCount] = useState(1);
  const { cart } = useSelector(cartState);
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  let cartTotalPrice = 0;
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Panier">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Panier</li>
        </ol>
      </BreadcrumbOne>
      {/* cart content */}
      <div className="cart-content space-pt--r100 space-pb--r100">
        <Container>
          {cart && cart.length >= 1 ? (
            <Fragment>
              <Row>
                <Col lg={12}>
                  <div className="table-responsive shop-cart-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">#</th>
                          <th className="product-name">Product</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-remove text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((product, key) => {
                          return (
                            <tr key={key}>
                              <td className="product-thumbnail">
                                <Link
                                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                  as={"/shop/product-basic/" + product.slug}
                                >
                                  <a>
                                    <img
                                      src={
                                        product.images.data[0].attributes.url
                                      }
                                      alt="product1"
                                    />
                                  </a>
                                </Link>
                              </td>
                              <td className="product-name" data-title="Product">
                                <Link
                                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                                  as={"/shop/product-basic/" + product.slug}
                                >
                                  <a>{product.name}</a>
                                </Link>
                              </td>
                              <td
                                className="product-quantity"
                                data-title="Quantity"
                              >
                                <div className="cart-plus-minus">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        decreaseItemQuantity(product, addToast)
                                      )
                                    }
                                    className="qtybutton"
                                  >
                                    -
                                  </button>
                                  <input
                                    className="cart-plus-minus-box"
                                    type="text"
                                    value={product.quantity}
                                    readOnly
                                  />
                                  <button
                                    onClick={() =>
                                      dispatch(increaseItemQuantity(product.id))
                                    }
                                    className="qtybutton"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="product-remove">
                                <button
                                  onClick={() =>
                                    dispatch(deleteItemToCart(product))
                                  }
                                >
                                  <IoIosClose />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="6" className="px-0 pb-0">
                            <Row className="no-gutters align-items-center">
                              <Col
                                lg={12}
                                md={12}
                                className="text-left text-md-right"
                              >
                                <button
                                  className="btn btn-line-fill btn-sm"
                                  type="submit"
                                  onClick={() =>
                                    dispatch(deleteAllItemToCart(addToast))
                                  }
                                >
                                  Supprimer tout
                                </button>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="border p-3 p-md-4 mt-3">
                    <div className="heading-s1 mb-3">
                      <h6></h6>
                    </div>

                    <Link href="/other/checkout">
                      <a className="btn btn-fill-out">Passer au devis</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <i className="icon-basket-loaded" />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      Aucun articles dans votre panier.
                    </p>
                    <Link href="/shop/list-no-sidebar">
                      <a className="btn btn-fill-out">Achetez maintenant</a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Cart;
