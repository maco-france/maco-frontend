import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { BsShield } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { GiSwapBag } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { cartState } from "../../../redux/slices/cart/selectors";

const ProductModal = (props) => {
  const { product, addToCart, addtoast } = props;

  const [quantityCount, setQuantityCount] = useState(1);
  const dispatch = useDispatch();

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});
  const cart = useSelector(cartState);
  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade",
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="product-quickview"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Row>
          <Col lg={6}>
            <div className="product-quickview__large-image-wrapper">
              <Swiper {...gallerySwiperParams}>
                {product.images.data[0] &&
                  product.images.data.map((single, key) => {
                    return (
                      <div key={key}>
                        <div className="single-image">
                          <img
                            src={single.attributes.url}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-quickview__content">
              <h2 className="product-quickview__title space-mb--10">
                {product.name}
              </h2>
              <div className="product-quickview__description space-mb--20">
                <p>{product.shortDescription}</p>
              </div>

              <div className="product-quickview__sort-info space-mb--20">
                <ul>
                  <li>
                    <BsShield /> 1 an de garantie
                  </li>
                  <li>
                    <AiOutlineReload /> Retours jusqu'a 30 jours
                  </li>
                  <li>
                    <GiSwapBag />
                    Paiement lors de la récéption du devis
                  </li>
                </ul>
              </div>

              <hr />
              <Fragment>
                <div className="product-quickview__button-wrapper d-flex align-items-center">
                  <div className="product-quickview__quantity">
                    <div className="cart-plus-minus">
                      <button
                        onClick={() =>
                          setQuantityCount(
                            quantityCount > 1 ? quantityCount - 1 : 1
                          )
                        }
                        className="qtybutton"
                      >
                        -
                      </button>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={quantityCount}
                        readOnly
                      />
                      <button
                        onClick={() => setQuantityCount(quantityCount + 1)}
                        className="qtybutton"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            categorie: product.categorie,
                            images: product.images,
                            size: selectedOption,
                            quantity: product.quantity,
                          })
                        );
                      }}
                      className="btn btn-fill-out btn-addtocart space-ml--10"
                    >
                      <i className="icon-basket-loaded" /> Ajouter au panier
                    </button>
                  }

                  {/*<button
                      className={`product-quickview__wishlist ${
                        wishlistitem !== undefined ? "active" : ""
                      }`}
                      title={
                        wishlistitem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={
                        wishlistitem !== undefined
                          ? () => deletefromwishlist(product, addtoast)
                          : () => addtowishlist(product, addtoast)
                      }
                    >
                      <i className="icon-heart" />
                    </button>*/}
                </div>
              </Fragment>
              <hr />
              <ul className="product-quickview__product-meta">
                <li>
                  Categorie:
                  {product.categorie ? (
                    <Link
                      href="/shop/grid-left-sidebar"
                      as={"/shop/grid-left-sidebar"}
                    >
                      <a>{product.categorie}</a>
                    </Link>
                  ) : (
                    <Link href="/shop/grid-left-sidebar">
                      <a>Aucune catégorie</a>
                    </Link>
                  )}
                </li>
              </ul>
              {product.Size ? (
                <div className="product-switch-wrap">
                  <p>Taille:</p>
                  {product.Size.map((single, key) => {
                    return (
                      <div key={key}>
                        <label htmlFor={single.id}>
                          <input
                            id={single.id}
                            type="radio"
                            name="size"
                            value={single.option}
                            onChange={() => setSelectedOption(single)}
                          />
                          &nbsp;
                          {single.option}
                        </label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
