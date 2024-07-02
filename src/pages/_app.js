import "../styles/global.css"; // Adjust the path according to your structure
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
