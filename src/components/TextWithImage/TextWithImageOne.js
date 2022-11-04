import { Container, Row, Col } from "react-bootstrap";

const TextWithImageOne = ({ title, imgUrl, description }) => {
  return (
    <div className="text-image-section space-pt--r100 space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-img scene mb-4 mb-lg-0">
              <img src={imgUrl} alt="about_img" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="heading-s1 space-mb--20">
              <h2>{title}</h2>
            </div>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
