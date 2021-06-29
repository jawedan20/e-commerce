import { CallToActionSharp } from "@material-ui/icons";
import * as types from "../../actions/action_types/action_type_order";

const initialState = {
    order:[],
    loading:false,
    next:null,
}

const Order = (state =initialState, action) => {
    
    let py = action.payload

    switch (action.type) {
        case types.FETCH_ORDER_DATA:

            return state    
       
            case types.LOADING_ORDER:
            return {
                ...state,
                loading:py
            }

        default:
            return state
        
    }
}

export default Order 