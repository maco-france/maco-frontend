import { Fragment } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "../assets/scss/style.scss";
import Preloader from "../components/Preloader";
import { initializeStore } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  const store = initializeStore();
  const persistor = persistStore(store);

  return (
    <Fragment>
      <Head>
        <title>Maco France</title>
        <meta
          name="description"
          content="Grossiste de Linge neuf et d'occasion pour Hôtels et
            les restaurants à Neuilly-sur-Marne"
        />
        <meta
          name="keywords"
          content="ecommerce, grossiste, linges, lingerie, occasions, hotels, restaurants"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ToastProvider placement="bottom-left">
        <Provider store={store}>
          <PersistGate loading={<Preloader />} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ToastProvider>
    </Fragment>
  );
};

export default MyApp;
