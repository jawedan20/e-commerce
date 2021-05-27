import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper';
import store from "../store/store";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

//makeStore function that returns a new store for every request

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);