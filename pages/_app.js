import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import App from "next/app";
import { LOGIN_SUCCESS } from "../store/action_types/action_type_user";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const request = appContext.ctx.req;
  if(request){
    if(request.cookies.acc){
      // blm jalan !!!!
      appContext.ctx.store.dispatch({type:LOGIN_SUCCESS,payload:true})
    }
  }
  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

//makeStore function that returns a new store for every request

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
