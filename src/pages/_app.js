import "../styles/global.css"; // Adjust the path according to your structure
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import { SessionProvider } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";
import { fetchAccessToken } from "../../redux/thunks/ytAccessThunk";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import IntroVideoProvider from "@/components/IntroVideoProvider";

import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [authUrl, setAuthUrl] = useState("");
  config.autoAddCss = false;

  return (
    <SessionProvider>
      <Provider store={store}>
      <IntroVideoProvider>
        <MyAppContent Component={Component} pageProps={pageProps} />
      </IntroVideoProvider>
      </Provider>
    </SessionProvider>
  );
}

function MyAppContent({ Component, pageProps }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchOneInstructor(userId));
    }
  }, [userId, dispatch]);

  return <Component {...pageProps} />;
}

export default MyApp;
