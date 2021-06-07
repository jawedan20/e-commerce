import axios from 'axios'
import axiosInstance,{source} from "../utils/axios";
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

export const addToCartAuthAction = (product) => (dispatch,getState) => {
  let CartItem = getState().cart.cartList.filter(item => item.product.id === product.id)
  let quantity = 0
  if(CartItem.length !== 0 ){
    quantity = CartItem[0].quantity
  }
  const data = {
    quantity,
    product:product.id
  }
  axiosInstance.post("api/cart/",data,{cancelToken:source.token})
  .then(res => {
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
  })
  .catch( err => {
    if(axios.isCancel(err)){
      console.clear()
    }else{
      console.log(err.request)
    }
  })
};

export const reduceQuantityCarAction = productId => dispatch => {
  dispatch({
    type: types.REDUCE_QUANTITY,
    payload:productId
  })
}
export const reduceQuantityCarAuthAction = productId => (dispatch,getState) => {
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
  axiosInstance.get("api/cart/").then((res) => {
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
