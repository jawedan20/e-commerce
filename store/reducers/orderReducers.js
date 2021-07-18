
import * as types from "../../actions/action_types/action_type_order";

const initialState = {
	shipments: [],
	buyNow: null,
};

const Order = (state = initialState, action) => {
	let py = action.payload;

	switch (action.type) {
		case types.ADDSHIPMENT:
			return {
                ...state,
                shipments:py
            }

        case types.ORDER_SUCCESS:
            return {
                ...state,
                shipments:[]
            }
         
        case types.REMOVE_BUYNOW:
            return {
                ...state,
                buyNow:null
            }
            
		case types.ADD_BUYNOW:
			return {
				...state,
                buyNow:py
			};

		default:
			return state;
	}
};

export default Order;
