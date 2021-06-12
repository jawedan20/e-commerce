import { getCookie, setCookie } from "../../utils/cookies";
import * as types from "../../actions/action_types/actions_type_cart";

const CopyStateReplaceCartList = (state, newCart) => ({
  cartList: newCart,
  cartTotal: state.cartTotal,
  totalPrice: state.totalPrice,
});

let initialState;
if (typeof localStorage !== "undefined") {
  const cartCookies = getCookie("cart");
  if (cartCookies) {
    initialState = JSON.parse(decodeURIComponent(cartCookies));
  } else {
    initialState = {
      cartList: [],
      cartTotal: 0,
      totalPrice: 0,
    };
  }
} else {
  initialState = {
    cartList: [],
    cartTotal: 0,
    totalPrice: 0,
  };
}
// blm jalan

const cartReducer = (state = initialState, action) => {
  let py = action.payload;
  let doesItemExist;
  let newcartState;
  let tempState;
  // let newState
  switch (action.type) {
    case types.FECTH_CART:
      setCookie("cart", py);
      return py;

    case types.ADD_CART:
      doesItemExist = false;

      tempState =
        state.cartList.length > 0 &&
        state.cartList.map((item) => {
          let { product, quantity } = item;
          if (product.id === py.id) {
            doesItemExist = true;
            quantity += 1;
          }
          return { product, quantity };
        });

      if (doesItemExist) {
        newcartState = CopyStateReplaceCartList(state, tempState);
        setCookie("cart", newcartState);
        return newcartState;
      }
      newcartState = {
        cartList: [...state.cartList, { product: { ...py }, quantity: 1 }],
        cartTotal: state.cartTotal + 1,
        cartPrice: state.cartPrice + py.price,
      };

      setCookie("cart", newcartState);
      return newcartState;

    case types.REMOVE_CART:
      tempState = state.cartList.filter((item) => item.product.id !== py);
      newcartState = CopyStateReplaceCartList(state, tempState);
      setCookie("cart", newcartState);
      return newcartState;
    
    case types.REDUCE_QUANTITY:
      tempState =
        state.cartList.length > 0 &&
        state.cartList.map((item) => {
          let { product, quantity } = item;
          if (product.id === py) {
            quantity -= 1;
          }
          return { product, quantity };
        })
      
        // perlu refactoring

      tempState = tempState.filter( py => py.quantity > 0)
      newcartState = CopyStateReplaceCartList(state, tempState);
      setCookie("cart", newcartState);
      return newcartState;

    case types.FORM_CART:
      doesItemExist = false;

      tempState =
        state.cartList.length > 0 &&
        state.cartList.map((item) => {
          let { product, quantity } = item;
          if (product.id === py.product.id) {
            doesItemExist = true;
            quantity = py.quantity
          }
          return { product, quantity };
        });

      if (doesItemExist) {
        newcartState = CopyStateReplaceCartList(state, tempState);
        setCookie("cart", newcartState);
        return newcartState;
      }
      newcartState = {
        cartList: [...state.cartList, { product: { ...py.product }, quantity: py.quantity }],
        cartTotal: state.cartTotal + 1,
        cartPrice: state.cartPrice + py.price,
      };

      setCookie("cart", newcartState);
      return newcartState;
      

    case types.UPDATE_CART:
      const cartFormArr = Object.keys(action.payload).map((key, index) => {
        return action.payload[key];
      });

      doesItemExist = false;

      const newProdCartStateUpdate = state.map((item) => {
        let itemFound = cartFormArr.find((element) => element.Id === item.Id);
        if (itemFound) {
          item.quantity = itemFound.quantity;
          doesItemExist = true;
        }
        return item;
      });

      if (doesItemExist) {
        setCookie("cart", newProdCartStateUpdate);
        return newProdCartStateUpdate;
      }

      return state;

    case types.DELETE_CART:
      const cartFormArrDel = Object.keys(action.payload).map((key, index) => {
        return action.payload[key];
      });

      doesItemExist = false;

      const newProdCartState = state.map((item) => {
        let itemFound = cartFormArrDel.find(
          (element) => element.Id === item.Id
        );
        if (itemFound) {
          item.quantity = itemFound.quantity;
          doesItemExist = true;
        }
        return item;
      });

      if (doesItemExist) {
        setCookie("cart", newProdCartState);
        return newProdCartState;
      }
      return state;

    default:
      return state;
  }
};

export default cartReducer;
