import Link from "next/link";
import { LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

const NotFound = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Page Introuvable">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Page Introuvable</li>
        </ol>
      </BreadcrumbOne>
      <div className="not-found-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="text-center">
                <div className="error-txt">404</div>
                <h5 className="mb-2 mb-sm-3">
                  Oops! Cette page n'existe pas, veuillez retourner à la page
                  d'accueil.
                </h5>
                <p>
                  La page que vous recherchez a été déplacée, supprimée,
                  renommée ou pourrait ne jamais exister.
                </p>
                <Link href="/">
                  <a className="btn btn-fill-out">Retour à l'accueil</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default NotFound;
