import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "../styles/globals.scss";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
