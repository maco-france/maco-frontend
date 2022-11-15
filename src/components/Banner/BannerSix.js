import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BannerSix = () => {
  return (
    <div className="banner-area space-pb--r100">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sale-banner mb-0">
              <Link
                href={{
                  pathname: "/shop/list-no-sidebar",
                  query: {
                    category: "Drap plat",
                  },
                }}
              >
                <a className="hover-effect">
                  <img
                    src="/assets/images/banner5.jpeg"
                    alt="shop_banner_img11"
                  />
                </a>
              </Link>
              <div className="sale-banner-content">
                <h4>Nos produits éco-responsables</h4>
                <Link
                  href={{
                    pathname: "/shop/list-no-sidebar",
                    query: "Drap plat",
                  }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSix;
