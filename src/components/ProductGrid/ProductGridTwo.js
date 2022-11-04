import { Container, Row } from "react-bootstrap";
import { ProductGridWrapperFour } from "../ProductThumb";

const ProductGridTwo = ({ products }) => {
  return (
    <div className="product-grid-area space-pb--r70">
      <Container>
        <Row>
          <ProductGridWrapperFour
            products={products}
            bottomSpace="space-mb--20"
          />
        </Row>
      </Container>
    </div>
  );
};

export default ProductGridTwo;
