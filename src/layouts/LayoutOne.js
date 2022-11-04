import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterFour } from "../components/Footer";

const LayoutOne = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne navPositionClass={navPositionClass} />
      {children}
      <FooterFour />
    </Fragment>
  );
};

export default LayoutOne;
