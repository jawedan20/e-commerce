import axios from "../utils/axios";
import * as type from "./action_types/action_type_user";
import { removeCookie } from "../utils/cookies";
import { sendAlert } from "./AlertActions";

export const logout = () => (dispatch) => {
	axios
		.post("api/auth/logout/", {})
		.then((res) => {
			removeCookie("auth");
			removeCookie("cart");
			dispatch(sendAlert("Logout Successfuly ", 1));

			location.href = "/login";
		})
		.catch((err) => console.log(err));
};

export const login = (email, password) => (dispatch) => {
	const data = {
		email: email,
		password: password,
	};
	axios
		.post("api/auth/login/", JSON.stringify(data))
		.then((res) => {
			dispatch(is_login(true));
			dispatch(whoami());
		})
		.catch((err) => console.log(err.request));
};

export const is_login = (py) => (dispatch) => {
	dispatch({
		type: type.LOGIN_SUCCESS,
		payload: py,
	});
};

export const fetchDataUser = (data) => (dispatch, getState) => {
	const { store, id } = getState().user.detail_user;
	const user = {
		id,
		email: data.email,
		username: data.username,
		profile: data.profile,
		phone: data.phone,
		store,
	};

	dispatch({
		type: type.FETCH_USER,
		payload: user,
	});
};

export const whoami = () => (dispatch) => {
	axios
		.get(`api/auth/whoiam/`)
		.then((res) => {
			let data = res.data;

			const location = data.location;
			const { id, email, username, profile, phone, store } = data;
			const token = data.tokens;

			const user = {
				id,
				email,
				username,
				profile,
				phone,
				store,
			};

			dispatch({
				type: type.LOGIN_USER,
				payload: {
					user,
					location,
				},
			});
			dispatch({
				type: type.SET_TOKEN,
				payload: token,
			});
		})
		.catch((err) => dispatch({ type: type.USER_IS_UNAUTHORIZED }));
};

export const setPrimaryLocation = (id) => (dispatch) => {
	dispatch({
		type: type.SET_PRIMARY_LOCATION,
		payload: id,
	});
};

export const deleteLocation = (id) => (dispatch, getState) => {
	const primary = getState().user.location_primary;
	if (id === primary) {
		dispatch({
			type: type.SET_PRIMARY_LOCATION,
			payload: null,
		});
	}
	axios
		.delete(`api/auth/location/${id}/`)
		.then((res) => {
			dispatch({
				type: type.DELETE_LOCATION,
				payload: id,
			});
			dispatch(sendAlert("Delete Address Successfuly ", 1));
		})
		.catch((err) => {
			console.log(err.request);
			dispatch(sendAlert("Delete Address Failed ", 3));
		});
};

export const bookMarkProduct = (productId) => (dispatch) => {
	const data = {
		product: productId,
	};
	axios
		.post("api/auth/bookmark/", data)
		.then((res) => dispatch(sendAlert("Add BookMark", 1)))
		.catch((err) => console.log(err));
};

export const massageUser = (value) => (dispatch) => {
	dispatch({ type: "GET_SUCCESS_MASSAGE", payload: value });
};

export const appendLocation = (data) => (dispatch) => {
	dispatch({
		type: type.APPEND_LOCATION,
		payload: data,
	});
};
