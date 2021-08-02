import { getCookie, setCookie } from "../../utils/cookies";
import * as types from "../../actions/action_types/action_type_order";

let initialState;
if (typeof localStorage !== "undefined") {
  const cartCookies = getCookie("shipments");
  if (cartCookies) {
    initialState = JSON.parse(decodeURIComponent(cartCookies));
  } else {
    initialState = {
      shipments: [],
      buyNow:null
    };
  }
} else {
  initialState = {
    shipments: [],
    buyNow:null
  };
}

const Order = (state = initialState, action) => {
	let py = action.payload;
    let obj

	switch (action.type) {
		case types.ADDSHIPMENT:
            obj = {
                ...state,
                shipments:py
            }
            setCookie('shipments',obj)
            return obj

        case types.ORDER_SUCCESS:
            obj =  {
                ...state,
                shipments:[]
            }
            setCookie('shipments',obj)
            return obj
         
        case types.REMOVE_BUYNOW:
            obj= {
                ...state,
                buyNow:null
            }
            setCookie('shipments',obj)
            return obj
            
		case types.ADD_BUYNOW:
			obj = {
				...state,
                buyNow:py
			};
            setCookie('shipments',obj)
            return obj

		default:
			return state;
	}
};

export default Order;
