import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosShuffle,
  IoIosHeartEmpty,
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="top-header d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <ul className="contact-detail text-center text-lg-left">
                <li>
                  <IoIosPhonePortrait />
                  <span>01 43 00 89 91</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
