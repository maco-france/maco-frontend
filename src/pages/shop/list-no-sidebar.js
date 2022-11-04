import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import {
  useGetProductByCategoryQuery,
  useGetProductsQuery,
} from "../../redux/slices/products/api";
import { useRouter } from "next/router";

const ListNoSidebar = () => {
  const [layout, setLayout] = useState("list");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const { data } = useGetProductsQuery();
  const pageLimit = 12;
  const router = useRouter();
  const category = router.query?.category;
  const { data: productsByCategory, isLoading } =
    useGetProductByCategoryQuery(category);

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  /*useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);*/

  if (!data) return null;
  if (isLoading && !productsByCategory) return null;

  const transformResponse = (dataToTransform) => {
    return dataToTransform?.map((el) => ({
      id: el.id,
      ...el.attributes,
    }));
  };

  const renderListByCategory = () => {
    if (category && productsByCategory.length > 0) {
      return (
        <div className="shop-content space-pt--r100 space-pb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                {/* shop page header */}
                <ShopHeader
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  shopTopFilterStatus={shopTopFilterStatus}
                  setShopTopFilterStatus={setShopTopFilterStatus}
                  layout={layout}
                />
                {/* shop products */}
                <ShopProducts
                  layout={layout}
                  products={transformResponse(productsByCategory)}
                />

                {/* shop product pagination */}
                <div className="pagination pagination-style pagination-style--two justify-content-center">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (!category && productsByCategory.length === 0) {
      return (
        <div className="shop-content space-pt--r100 space-pb--r100">
          <Container>
            <Row>
              <Col lg={12}>
                {/* shop page header */}
                <ShopHeader
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  shopTopFilterStatus={shopTopFilterStatus}
                  setShopTopFilterStatus={setShopTopFilterStatus}
                  layout={layout}
                />
                {/* shop products */}
                <ShopProducts
                  layout={layout}
                  products={transformResponse(data)}
                />

                {/* shop product pagination */}
                <div className="pagination pagination-style pagination-style--two justify-content-center">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else
      return (
        <div className="shop-content space-pt--r100 space-pb--r100">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="text-center">
                <div className="error-txt">404</div>
                <h5 className="mb-2 mb-sm-3">
                  Oops! Aucun produits n'existent dans cette catégorie.
                </h5>
                <Link href="/">
                  <a className="btn btn-fill-out">Retour à l'accueil</a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      );
  };

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={category ?? "Tous les produits"}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">
            {category ?? "Tous les produits"}
          </li>
        </ol>
      </BreadcrumbOne>
      {renderListByCategory()}
    </LayoutOne>
  );
};

export default ListNoSidebar;
