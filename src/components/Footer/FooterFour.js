import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoIosArrowUp,
} from "react-icons/io";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const FooterFour = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer className="footer-dark">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Information de contact</h6>
                <ul className="contact-info contact-info-light">
                  <li>
                    <IoIosPin />
                    <p>85 Rue Louis Ampère</p>
                  </li>
                  <li>
                    <IoIosMailOpen />
                    <a href="mailto:info@macofrance.fr" target="_blank">
                      info@macofrance.fr
                    </a>
                  </li>
                  <li>
                    <IoIosPhonePortrait />
                    <p>01 43 00 89 91</p>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <ul className="social-icons mb-3 mb-lg-0">
                  <li>
                    <a href="#" className="sc_facebook">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="widget">
                <h6 className="widget-title">Liens utiles</h6>
                <ul className="widget-links">
                  <li>
                    <Link href="/other/about-us">
                      <a>A Propos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/other/contact-us">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-footer bg--dark-two">
        <Container>
          <Row>
            <Col md={12}>
              <p className="mb-3 mb-md-0 text-center text-md-left">
                Copyright &copy; {new Date().getFullYear() + " "}. Fait avec{" "}
                <FaHeart /> par{" "}
                <a href="https://www.hasthemes.com" target="_blank">
                  Qualiconnect
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowUp />
      </button>
    </footer>
  );
};

export default FooterFour;
