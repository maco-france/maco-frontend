import { LayoutFour } from "../layouts";
import { HeroSliderFour } from "../components/HeroSlider";
import { CategorySliderOne } from "../components/CategorySlider";
import { ProductGridTwo } from "../components/ProductGrid";
import { Row, Col } from "react-bootstrap";

import heroSliderFourData from "../data/hero-sliders/hero-slider-four.json";
import categorySliderData from "../data/category-sliders/category-slider-one.json";
import { useGetProductsQuery } from "../redux/slices/products/api";
import { BannerSix } from "../components/Banner";

const Index = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (!data) return null;

  return (
    <LayoutFour navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      {/* category slider */}
      <CategorySliderOne
        title="Top Catégories"
        text="Nos séléctions parmis différentes catégories"
        url="/shop/list-no-sidebar"
        categorySliderData={categorySliderData}
      />
      {/* grid product */}
      <Row className="justify-content-center">
        <Col lg={8} md={8}>
          <div className="section-title text-center space-mb--25">
            <h2>Qui sommes-nous ?</h2>
          </div>
          <p className="leads text-center">
            En activité depuis 2006, MACO est une société qui équipe les
            professionnels de l’hôtellerie, de la restauration et des
            collectivités. Spécialisée dans la vente de matériels et de
            fournitures (linges, matériels de nettoyage et produits
            d’entretien), une grande partie de sa production est éco responsable
            et permet de donner une seconde vie aux draps, serviettes,
            peignoirs, torchons et chiffons. Nous offrons un large choix de
            gamme de produits aux meilleurs prix tout en limitant notre
            empreinte écologique.
          </p>
        </Col>
      </Row>
      {/* grid product */}
      {!isLoading && (
        <>
          <div className="section-title text-center space-mb--25">
            <h2>Produits récents</h2>
          </div>
          <ProductGridTwo products={data.slice(0, 3)} />
        </>
      )}
      {/* countdown */}
      <BannerSix />
    </LayoutFour>
  );
};

export default Index;
