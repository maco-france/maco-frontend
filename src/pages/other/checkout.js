import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCash } from "react-icons/io";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { cartState } from "../../redux/slices/cart/selectors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateQuoteMutation } from "../../redux/slices/products/api";
import toast, { Toaster } from "react-hot-toast";
import { deleteAllItemToCart } from "../../redux/slices/cart/slice";

const Checkout = () => {
  const { cart } = useSelector(cartState);
  const [createQuote] = useCreateQuoteMutation();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop Long!")
      .required("Champs requis."),
    lastName: Yup.string()
      .min(2, "Trop court !")
      .max(50, "Trop Long!")
      .required("Champs requis."),
    company: Yup.string().required("Champs requis."),
    email: Yup.string().email("Email invalide").required("Champs requis."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      products: cart,
    },
    validationSchema,

    onSubmit: (values) => {
      const data = {
        data: {
          CompanyName: values.company,
          email: values.email,
          name: `${values.firstName} ${values.lastName}`,
          products: JSON.stringify(
            cart.map((p) => ({
              nom: p.name,
              taille: p.size.option,
              quantité: p.quantity,
            }))
          ),
        },
      };

      createQuote(data)
        .unwrap()
        .then((payload) => {
          console.log("fulfilled", payload);
          toast.success("Commande avec devis envoyé.", {
            duration: 3000,
          });
          dispatch(deleteAllItemToCart());
        })
        .catch((error) => {
          console.error("rejected", error);
          toast.error("Erreur interne: Veuillez contacter l'administrateur.", {
            duration: 3000,
          });
        });
    },
  });

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Devis">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Devis</li>
        </ol>
      </BreadcrumbOne>
      <div className="checkout-content space-pt--r100 space-pb--r100">
        <Container>
          <Toaster position="top-right" />
          {cart && cart.length >= 1 ? (
            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={6}>
                  <div className="heading-s1 space-mb--20">
                    <h4>Information du devis</h4>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="Nom *"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <span className="errors">{formik.errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Prénom *"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <span className="errors">{formik.errors.lastName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="company"
                      placeholder="Nom de l'Entreprise"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.company && formik.errors.company && (
                      <span className="errors">{formik.errors.company}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Adresse e-mail *"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="errors">{formik.errors.email}</span>
                    )}
                  </div>
                </Col>

                <Col md={6}>
                  <div className="order-review space-mt-mobile-only--40">
                    <div className="heading-s1 space-mb--20">
                      <h4>Votre commande</h4>
                    </div>
                    <div className="table-responsive order_table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Produit(s)</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((product, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  {product.name}{" "}
                                  <span className="product-qty">
                                    x {product.quantity}
                                  </span>
                                </td>
                                <td>{product.quantity} article(s)</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {formik.touched.products && formik.errors.products && (
                      <span className="errors">{formik.errors.products}</span>
                    )}
                    <button
                      className="btn btn-fill-out btn-block"
                      type="submit"
                    >
                      Envoyer cette commande
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      Aucun article(s) a été trouvé(s).
                    </p>
                    <Link href="/shop/grid-left-sidebar">
                      <a className="btn btn-fill-out">Achetez maintenant</a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Checkout;
