import Link from "next/link";
import { Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={`d-flex ${
          positionClass ? positionClass : "justify-content-end"
        }`}
      >
        <li>
          <Link href="/">
            <a className="nav-link">Accueil</a>
          </Link>
        </li>
        <li className="has-children-mega">
          <Link href="#">
            <a className="nav-link">
              Lingerie <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Linge d'hotelerie</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Drap plat",
                      },
                    }}
                  >
                    <a>Drap plat</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Drap Housse",
                      },
                    }}
                  >
                    <a>Drap Housse</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Housse de Couette",
                      },
                    }}
                  >
                    <a>Housse de Couette</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Couette",
                      },
                    }}
                  >
                    <a>Couette</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Couverture",
                      },
                    }}
                  >
                    <a>Couverture</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Taie d'oreiller",
                      },
                    }}
                  >
                    <a>Taie d’oreiller</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Taie taversin",
                      },
                    }}
                  >
                    <a>Taie traversin </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Serviette éponge",
                      },
                    }}
                  >
                    <a>Serviette éponge</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Tapis de bain",
                      },
                    }}
                  >
                    <a>Tapis de bain</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Peignoir",
                      },
                    }}
                  >
                    <a>Peignoir</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Chausson",
                      },
                    }}
                  >
                    <a>Chausson</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Oreiller",
                      },
                    }}
                  >
                    <a>Oreiller</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Taversin",
                      },
                    }}
                  >
                    <a>Traversin</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Sommier",
                      },
                    }}
                  >
                    <a>Sommier</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Matelas",
                      },
                    }}
                  >
                    <a>Matelas</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Protège matelas",
                      },
                    }}
                  >
                    <a>Protège matelas</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">Linge de restauration</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Nappe",
                      },
                    }}
                  >
                    <a>Nappe</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Serviette de table",
                      },
                    }}
                  >
                    <a>Serviette de table</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Torchon",
                      },
                    }}
                  >
                    <a>Torchon</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Tablier",
                      },
                    }}
                  >
                    <a>Tablier</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Veste",
                      },
                    }}
                  >
                    <a>Veste</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Pantalon",
                      },
                    }}
                  >
                    <a>Pantalon</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Blouse",
                      },
                    }}
                  >
                    <a>Blouse</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Combinaison",
                      },
                    }}
                  >
                    <a>Combinaison</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="#">
            <a className="nav-link">
              Produits d'entretien <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner d-lg-flex ">
            <li className="sub-menu--mega__column">
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Chiffons",
                      },
                    }}
                  >
                    <a>Chiffons</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Sacs Poubelle",
                      },
                    }}
                  >
                    <a>Sacs Poubelle</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Essuie Tout",
                      },
                    }}
                  >
                    <a>Essuie Tout</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Papier hygiénique",
                      },
                    }}
                  >
                    <a>Papier hygiénique</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="#">
            <a className="nav-link">
              Matériels de nettoyage <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner d-lg-flex ">
            <li className="sub-menu--mega__column">
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Manche et balai",
                      },
                    }}
                  >
                    <a>Manche et balai</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Eponge",
                      },
                    }}
                  >
                    <a>Eponge</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Pelle",
                      },
                    }}
                  >
                    <a>Pelle</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Seau et essoreur",
                      },
                    }}
                  >
                    <a>Seau et essoreur</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Mops",
                      },
                    }}
                  >
                    <a>Mops</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Grattoir et lame",
                      },
                    }}
                  >
                    <a>Grattoir et lame</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Raclette",
                      },
                    }}
                  >
                    <a>Raclette</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Poignée inox",
                      },
                    }}
                  >
                    <a>Poignée inox</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Barrette pour poignée inox",
                      },
                    }}
                  >
                    <a>Barrette pour poignée inox</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Gant",
                      },
                    }}
                  >
                    <a>Gant</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Mouilleur vitrerie",
                      },
                    }}
                  >
                    <a>Mouilleur vitrerie</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="#">
            <a className="nav-link">
              Produits éco-responsables <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner d-lg-flex ">
            <li className="sub-menu--mega__column">
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Chiffons",
                      },
                    }}
                  >
                    <a>Chiffons</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Sacs Poubelle",
                      },
                    }}
                  >
                    <a>Sacs Poubelle</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Essuie Tout",
                      },
                    }}
                  >
                    <a>Essuie Tout</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/shop/list-no-sidebar",
                      query: {
                        category: "Papier hygiénique",
                      },
                    }}
                  >
                    <a>Papier hygiénique</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
