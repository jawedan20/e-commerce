import {
  addToCartAction,
  addToCartAuthAction,
  reduceQuantityCarAction,
  reduceQuantityCarAuthAction,
  removeFromCartAction,
  removeFromCartAuthAction,
  FormCartAction,
  FormCartAuthAction,
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

export const addToCart = (auth, product) =>
  auth ? addToCartAction(product) : addToCartAuthAction(product);

export const reduceQuantity = (auth, productId) =>
  auth
    ? reduceQuantityCarAuthAction(productId)
    : reduceQuantityCarAction(productId);

export const removeFromCart = (auth, productId) =>
  auth ? removeFromCartAuthAction(productId) : removeFromCartAction(productId);

export const formCart = (auth, product, quantity) =>
  auth
    ? FormCartAuthAction(product, quantity)
    : FormCartAction(product, quantity);
