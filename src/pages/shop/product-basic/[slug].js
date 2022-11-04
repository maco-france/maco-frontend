import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { LayoutOne } from "../../../layouts";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
} from "../../../components/ProductDetails";
import { productsState } from "../../../redux/slices/products/selectors";
import { useRouter } from "next/dist/client/router";
import {
  endpoints,
  useGetProductQuery,
} from "../../../redux/slices/products/api";
import { useEffect, useState } from "react";
import { addItemToCart } from "../../../redux/slices/cart/slice";

const ProductBasic = ({ params }) => {
  const { addToast } = useToasts();
  const { slug } = params;
  const { data, isLoading } = useGetProductQuery(parseInt(slug));
  // get product data based on slug
  const transformResponse = (response) => {
    return { id: response?.id, ...response?.attributes };
  };
  const product = transformResponse(data);

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={product.name}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/list-no-sidebar">
              <a>Produits</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </BreadcrumbOne>
      {/* product details */}
      <div className="product-details space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--40">
              {/* image gallery */}
              <ImageGalleryBottomThumb product={product} />
            </Col>
            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                addToast={addToast}
                addToCart={addItemToCart}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default ProductBasic;
