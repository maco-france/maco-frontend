import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link href="#">
            <a>Lingerie</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Linge d'hotelerie</a>
              </Link>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Link href="#">
                <a>Linge de restauration</a>
              </Link>
              <ul className="mobile-sub-menu">
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

        <li className="menu-item-has-children">
          <Link href="#">
            <a>Produits d'entretiens</a>
          </Link>
          <ul className="mobile-sub-menu">
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

        <li className="menu-item-has-children">
          <Link href="#">
            <a>Matériels de nettoyages</a>
          </Link>
          <ul className="mobile-sub-menu">
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

        <li className="menu-item-has-children">
          <Link href="#">
            <a>Produits éco</a>
          </Link>
          <ul className="mobile-sub-menu">
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
                    category: "Drap housse",
                  },
                }}
              >
                <a>Drap housse</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/shop/list-no-sidebar",
                  query: {
                    category: "Housse de couette",
                  },
                }}
              >
                <a>Housse de couette</a>
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/shop/list-no-sidebar",
                  query: {
                    category: "Taie d’oreiller",
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
                    category: "Taie Taversin",
                  },
                }}
              >
                <a>Taie Taversin</a>
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

        <li>
          <Link href="/other/contact-us">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
