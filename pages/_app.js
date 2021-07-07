import { Provider, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useEffect } from "react";
import { getCookie } from "../utils/cookies";
import { fetchCartAction } from "../actions/Cart";
import { whoami } from "../actions/user";
import { firebaseCloudMessaging } from "../utils/webPush";
import firebase from "firebase/app";

function MyApp({ Component, pageProps }) {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.user.is_auth);

	useEffect(() => {
		async function setToken() {
			try {
				const token = await firebaseCloudMessaging.init();
				if (token) {
					getMessage();
				}
			} catch (error) {
				console.log(error);
			}
		}
		function getMessage() {
			// masih belum mau nampilin data di depan
			firebase.messaging().onMessage((payload) => {
				console.log(payload);
			});
		}

		if (auth) {
			setToken();
			const cart = getCookie("cart");
			if (!cart) dispatch(fetchCartAction());
			return () => cart;
		} else if (!auth && getCookie("auth")) {
			return () => auth;
		} else {
			const Detail = getCookie("auth");
			if (Detail === undefined) dispatch(whoami());
		}
	}, [auth]);

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
