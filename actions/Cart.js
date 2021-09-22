import axios from "axios";
import axiosInstance, { source } from "../utils/axios";
import * as types from "./action_types/actions_type_cart";
import { sendAlert } from "./AlertActions";

export const addToCartAction = (product) => (dispatch) => {
	dispatch({
		type: types.ADD_CART,
		payload: {
			id: product.id,
			title: product.title,
			price: product.price,
			store: product.store,
			varian: null,
		},
	});
	dispatch(sendAlert("Cart Add Successfuly ", 1));
};

export const addToCartAuthAction = (product) => (dispatch, getState) => {
	let CartItem = getState().cart.cartList.filter(
		(item) => item.product.id === product.id
	);
	let quantity = 1;
	if (CartItem.length !== 0) {
		quantity = CartItem[0].quantity + 1;
	}
	const data = {
		quantity,
		product: product.id,
	};
	axiosInstance
		.post("api/cart/", data, { cancelToken: source.token })
		.then((res) => {
			dispatch({
				type: types.ADD_CART,
				payload: {
					id: product.id,
					title: product.title,
					price: product.price,
					store: product.store,
					varian: null,
				},
			});
			dispatch(sendAlert("Cart Add Successfuly ", 1));
		})
		.catch((err) => {
			if (axios.isCancel(err)) {
				console.clear();
			} else {
				console.log(err.request);
				dispatch(sendAlert("Cart Add Failed ", 3));
			}
		});
};

export const reduceQuantityCarAction = (productId) => (dispatch) => {
	dispatch({
		type: types.REDUCE_QUANTITY,
		payload: productId,
	});
};
export const reduceQuantityCarAuthAction =
	(productId) => (dispatch, getState) => {
		let CartItem = getState().cart.cartList.filter(
			(item) => item.product.id === productId
		);
		if (CartItem.length <= 0) return;
		if (CartItem[0].quantity === 1)
			return dispatch(removeFromCartAuthAction(productId));
		let quantity = CartItem[0].quantity - 1;
		const data = {
			quantity,
			product: productId,
		};
		axiosInstance
			.post("api/cart/", data, { cancelToken: source.token })
			.then((res) => {
				dispatch({
					type: types.REDUCE_QUANTITY,
					payload: productId,
				});
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.clear();
				} else {
					console.log(err.request);
				}
			});
	};

export const removeFromCartAction = (productId) => (dispatch) => {
	dispatch({
		type: types.REMOVE_CART,
		payload: productId,
	});
	dispatch(sendAlert("Remove Cart Successfuly ", 1));
};

export const removeFromCartAuthAction = (productId) => (dispatch) => {
	axiosInstance.delete(`api/cart/${productId}/delete/`).then((res) => {
		dispatch({
			type: types.REMOVE_CART,
			payload: productId,
		});
		dispatch(sendAlert("Remove Cart Successfuly ", 1));
	});
};

export const FormCartAction = (payload) => (dispatch) => {
	dispatch({
		type: types.REMOVE_SELECT_CART,
		payload,
	});
	dispatch(sendAlert("Add Cart Successfuly ", 1));
};
export const FormCartAuthAction = (payload) => (dispatch) => {
	const data = payload;
	axiosInstance
		.post("api/cart/delete/", data, { cancelToken: source.token })
		.then((res) => {
			dispatch({
				type: types.REMOVE_SELECT_CART,
				payload,
			});
			dispatch(sendAlert("Add Cart Successfuly ", 1));
		})
		.catch((err) => {
			if (axios.isCancel(err)) {
				console.clear();
			} else {
				console.log(err.request);
				dispatch(sendAlert("Remove Cart Failed ", 3));
			}
		});
};
export const AddFormCartAction = (product, quantity) => (dispatch) => {
	dispatch({
		type: types.FORM_CART,
		payload: {
			product,
			quantity,
		},
	});
};
export const AddFormCartAuthAction = (product, quantity) => (dispatch) => {
	const data = {
		quantity,
		product: product.id,
	};
	axiosInstance
		.post("api/cart/", data, { cancelToken: source.token })
		.then((res) => {
			dispatch({
				type: types.FORM_CART,
				payload: {
					product,
					quantity,
				},
			});
			dispatch(sendAlert("Add Cart Successfuly ", 1));
		})
		.catch((err) => {
			if (axios.isCancel(err)) {
				console.clear();
			} else {
				console.log(err.request);
				dispatch(sendAlert("Remove Cart Failed ", 3));
			}
		});
};

export const fetchCartAction = () => (dispatch) => {
	axiosInstance
		.get("api/cart/")
		.then((res) => {
			const { items } = res.data;
			const payload = {
				cartList: items,
			};
			dispatch({
				type: types.FECTH_CART,
				payload,
			});
		})
		.catch((err) => console.log(err.request));
};
