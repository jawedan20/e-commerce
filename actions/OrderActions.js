import * as types from "./action_types/action_type_order";

export const addShipment = (cartList) => dispacth => {
	const payload = cartList.map(item => item.product.id)
	dispacth({
		type:types.ADDSHIPMENT,
		payload
	})
}

export const addBuyNow = (product) => (dispatch) => {
	dispatch({
		type: types.ADD_BUYNOW,
		payload: {
			id: product.id,
			title: product.title,
			price: product.price,
			store: product.store,
			varian: null,
			quantity:1
		},
	});
};
