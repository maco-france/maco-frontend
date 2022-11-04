import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { useDispatch } from "react-redux";

const ProductGridFour = ({ product, addToCart, addToast }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Col lg={3} sm={6}>
        <div className="product-grid product-grid--style-two">
          <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.id}`}
              as={"/shop/product-basic/" + product.id}
            >
              <a>
                <img
                  src={product.images.data[0].attributes.url}
                  alt="product_img1"
                  style={{
                    width: "100%",
                    height: 260,
                  }}
                />
              </a>
            </Link>

            <div className="product-grid__action-box">
              <ul>
                <li>
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    <i className="icon-magnifier-add" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-grid__info text-center">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.id}`}
                as={"/shop/product-basic/" + product.id}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
          </div>
        </div>
      </Col>
      {/* product modal */}
      {
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          product={product}
          addToCart={addToCart}
          addtoast={addToast}
        />
      }
    </Fragment>
  );
};

export default ProductGridFour;
