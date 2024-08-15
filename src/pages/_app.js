import "../styles/global.css"; // Adjust the path according to your structure
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import { SessionProvider } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneInstructor } from "../../redux/thunks/instructorThunk";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      {/* Ensure the entire app is wrapped with the Provider */}
      <Provider store={store}>
        <MyAppContent Component={Component} pageProps={pageProps} />
      </Provider>
    </SessionProvider>
  );
}

function MyAppContent({ Component, pageProps }) {
  const userId = useSelector((state) => state.auth.user);
  const id = useSelector((state) => state.singleInstructor.id);
  console.log("fetched instructor id in profession.js is:", id);
  const dispatch = useDispatch();
  console.log("Inst id", id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchOneInstructor(userId));
    }
  }, [userId, dispatch]);

  return <Component {...pageProps} />;
}

export default MyApp;
