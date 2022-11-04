import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { useDispatch } from "react-redux";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  sliderClass,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const dispatch = useDispatch();

  const onSelectedChangeOption = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  return (
    <Fragment>
      <Col
        lg={4}
        sm={6}
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid">
          <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.id}`}
              as={"/shop/product-basic/" + product.id}
            >
              <a>
                <img
                  src={product.images.data[0].attributes.url}
                  alt="product_img1"
                />
              </a>
            </Link>
          </div>
          <div className="product-grid__info">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.id}`}
                as={"/shop/product-basic/" + product.id}
              >
                <a>
                  {product.name}
                  {product.quantity}
                </a>
              </Link>
            </h6>
            {product.Size && (
              <div className="product-switch-wrap">
                <p>Taille:</p>
                {product.Size.map((single, key) => (
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
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="product-list">
          <div className="product-list__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.id}`}
              as={"/shop/product-basic/" + product.id}
            >
              <a>
                <img
                  src={product.images.data[0].attributes.url}
                  alt="product_img1"
                />
              </a>
            </Link>
            <div className="product-grid__badge-wrapper">
              {product.new ? <span className="pr-flash">NEW</span> : ""}
              {product.featured ? (
                <span className="pr-flash bg-danger">HOT</span>
              ) : (
                ""
              )}
              {product.discount ? (
                <span className="pr-flash bg-success">SALE</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="product-list__info">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.id}`}
                as={"/shop/product-basic/" + product.id}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-description">
              {product.shortDescription}
            </div>
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
                          value={single}
                          defaultValue={product.Size[0]}
                          onChange={onSelectedChangeOption}
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
            <div className="product-list__actions">
              <ul>
                <li>
                  {product.affiliateLink ? (
                    <a
                      href={product.affiliateLink}
                      className="btn btn-fill-out btn-addtocart"
                      target="_blank"
                    >
                      <i className="icon-action-redo" /> Buy Now
                    </a>
                  ) : product.variation && product.variation.length >= 1 ? (
                    (<Link
                      href={`/shop/product-basic/[slug]?slug=${product.id}`}
                      as={"/shop/product-basic/" + product.id}
                    >
                      <a className="btn btn-fill-out btn-addtocart">
                        <i className="icon-wrench" /> Select Options
                      </a>
                    </Link> /* : product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/ /*: product.stock && product.stock > 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product, addToast))}
                      className={`btn btn-fill-out btn-addtocart ${"active"}`}
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  ) :*/)
                  ) : (
                    <button
                      className="btn btn-fill-out btn-addtocart"
                      onClick={() =>
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
                        )
                      }
                    >
                      <i className="icon-basket-loaded" /> Ajouter
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtocompare={addToCompare}
        deletefromcompare={deleteFromCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

export default ProductGridList;
