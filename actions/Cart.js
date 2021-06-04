import axios from "../utils/axios";
import * as types from "./action_types/actions_type_cart";

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
};

export const reduceQuantityCartAction = productId => dispatch => {
  dispatch({
    type: types.REDUCE_QUANTITY,
    payload:productId
  })
}

export const removeFromCartAction = (productId) => (dispatch) => {
  dispatch({
    type: types.REMOVE_CART,
    payload: productId,
  });
};

export const updateCartAction = (payload) => (dispatch) => {
  dispatch({
    type: types.UPDATE_CART,
    payload,
  });
};

export const fetchCartAction = () => (dispatch) => {
  axios.get("api/cart/").then((res) => {
    const { items, total_cart, total_paid } = res.data;
    const payload = {
      cartList: items,
      cartTotal: total_cart,
      totalPrice: total_paid,
    };
    dispatch({
      type: types.FECTH_CART,
      payload,
    });
  }).catch(err => console.log(err.request))
  
};
