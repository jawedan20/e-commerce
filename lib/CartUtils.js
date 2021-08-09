import {
    addToCartAction,
    addToCartAuthAction,
    reduceQuantityCarAction,
    reduceQuantityCarAuthAction,
    removeFromCartAction,
    removeFromCartAuthAction,
    FormCartAction,
    FormCartAuthAction,
    AddFormCartAction,
    AddFormCartAuthAction
} from "../actions/Cart";

export const countCart = (cart) => {
    if (cart.length > 0) {
        const cartItemCount = cart
            .map((item) => item.quantity)
            .reduce((total, num) => total + num, 0);
        const cartTotal = cart
            .map((item) => item.product.price * item.quantity)
            .reduce((total, num) => total + num, 0);
        return { cartItemCount, cartTotal };
    }
    return { cartItemCount: 0, cartTotal: 0 };
};

export const sortCartWithStore = (cart) => {
	const data = new Object();
	cart.length > 0 &&
		cart.map((item) => {
			const { name } = item.product.store;
			if (name in data) {
				data[name] = [...data[name], item];
			} else {
				data[name] = [item];
			}
		});
	return data 
};


export const addToCart = (auth, product) =>
    auth ? addToCartAuthAction(product) : addToCartAction(product);

export const addFormToCart = (auth, product,quantity) =>
    auth ? AddFormCartAuthAction(product,quantity) : addFormToCart(product,quantity);

export const reduceQuantity = (auth, productId) =>
    auth ? reduceQuantityCarAuthAction(productId) : reduceQuantityCarAction(productId);

export const removeFromCart = (auth, productId) =>
    auth ? removeFromCartAuthAction(productId) : removeFromCartAction(productId);

export const formCart = (auth, payload) =>
    auth ? FormCartAuthAction(payload) : FormCartAction(product, quantity);
