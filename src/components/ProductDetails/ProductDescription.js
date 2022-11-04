import { Fragment, useState } from "react";
import Link from "next/link";
import { getProductCartQuantity } from "../../lib/product";
import { ProductRating } from "../Product";
import { BsShield } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { GiSwapBag } from "react-icons/gi";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io";
import { useDispatch } from "react-redux";

const ProductDescription = ({
  product,
  addToast,
  addToCart,
  productContentButtonStyleClass,
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState({});
  const dispatch = useDispatch();

  return (
    <div className="product-content">
      <h2 className="product-content__title space-mb--10">{product.name}</h2>
      <div className="product-content__description space-mb--20">
        <p>{product.shortDescription}</p>
      </div>

      <div className="product-content__sort-info space-mb--20">
        <ul>
          <li>
            <BsShield /> 1 an de garantie
          </li>
          <li>
            <AiOutlineReload /> Retours sous 30 jours
          </li>
          <li>
            <GiSwapBag /> Devis en ligne personnalisé
          </li>
        </ul>
      </div>
      <hr />
      <Fragment>
        <div
          className={`${
            productContentButtonStyleClass
              ? productContentButtonStyleClass
              : "product-content__button-wrapper d-flex align-items-center"
          }`}
        >
          <div className="product-content__quantity">
            <div className="cart-plus-minus">
              <button
                onClick={() =>
                  setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
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

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  name: product.name,
                  description: product.description,
                  categorie: product.categorie,
                  image: product.image,
                  size: selectedOption,
                  quantity: product.quantity,
                })
              )
            }
            className="btn btn-fill-out btn-addtocart space-ml--10"
          >
            <i className="icon-basket-loaded" /> Ajouter
          </button>
        </div>
      </Fragment>

      <hr />
      <ul className="product-content__product-meta">
        {product.categorie && (
          <li>
            Catégorie:
            <span> {product.categorie}</span>
          </li>
        )}
      </ul>
      <br />
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
  );
};

export default ProductDescription;
