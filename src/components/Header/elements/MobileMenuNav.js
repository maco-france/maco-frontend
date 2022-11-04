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
          <Link href="/shop/grid-left-sidebar">
            <a>Lingerie</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Linge d'hotelerie</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Drap plat</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Drap Housse</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Housse de Couette</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Couette</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Couverture</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Taie d’oreiller</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Serviette éponge</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Tapis de bain</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Peignoir</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Chausson</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Oreiller</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Traversin</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Sommier</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Matelas</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Protège matelas</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/grid-left-sidebar">
                <a>Linge de restauration</a>
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Nappe</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Serviette de table</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Torchon</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Tablier</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Veste</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Pantalon</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>Blouse</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
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
              <Link href="/shop/list-no-sidebar">
                <a>Chiffons</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Sacs Poubelle</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Essuie Tout</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Papier hygiénique</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/">
            <a>Matériels de nettoyages</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Manche et balai</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Eponge</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Pelle</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Seau et essoreur</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Mops</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Grattoir et lame</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Raclette</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Poignée inox</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Barrette pour poignée inox</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Gant</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Mouilleur vitrerie</a>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/blog/grid-four-columns">
            <a>Produits éco</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Chiffons</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Sacs Poubelle</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Essuie Tout</a>
              </Link>
            </li>
            <li>
              <Link href="/shop/list-no-sidebar">
                <a>Papier hygiénique</a>
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
