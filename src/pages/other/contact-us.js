import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegMap, FaRegEnvelopeOpen, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Contactez Nous">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Contactez-nous</li>
        </ol>
      </BreadcrumbOne>
      <div className="contact-content space-pt--r100 space-pb--r100">
        <div className="contact-icon-area space-pb--r70">
          <Container>
            <Row>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegMap />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Adresse</span>
                    <p>85 Rue Louis Ampère</p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Email Address</span>
                    <a href="mailto:info@macofrance.fr">info@macofrance.fr</a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaMobileAlt />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Phone</span>
                    <p>01 43 00 89 91</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="heading-s1 space-mb--20">
                  <h2>
                    Vous avez des questions ? <br />
                    Vous souhaitez recevoir un devis ?
                  </h2>
                </div>
                <p className="leads">
                  Contactez-nous via ce formulaire ci dessous, nous vous
                  repondrons dans les plus bref délais.
                </p>
                <div className="field-form">
                  <form method="post">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Votre nom *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Votre e-mail *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Votre n° de téléphone *"
                          id="phone"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          placeholder="Votre sujet"
                          id="subject"
                          className="form-control"
                          name="subject"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          required
                          placeholder="Votre Message *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Submit Your Message!"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Envoyez mon message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <Col lg={6} className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.522540438177!2d2.5186891!3d48.8673144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6139c6a1abe6d%3A0x81f1dfdfcd3e1483!2sMACO%20France!5e0!3m2!1sfr!2sfr!4v1656698575409!5m2!1sfr!2sfr"
                    allowFullScreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
};

export default ContactUs;
