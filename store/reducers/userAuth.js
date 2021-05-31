import * as type from '../action_types/action_type_user'

const initialState = {
    is_auth : false,
    detail_user :{},
    location : {},
    location_primary : null
}


const user = ( state = initialState, action ) => {
    
    let py = action.payload

    switch(action.type){
        case type.LOGIN_USER:
            return {
                ...state,
                detail_user:py.user,
                location:py.location
            }

        case type.LOGIN_SUCCESS:
            return {
                ...state,
                is_auth :py
            }
        case type.LOGIN_FAILED:
            return {...state}
        
        case type.LOGOUT_USER:
            return {
                ...state,
                detail_user:{}
            }
        case type.LOGOUT_SUCCESS:
            return {
                ...state,
                is_auth:false
            }
        case type.LOGOUT_FAILED:
            return state

        case type.SET_PRIMARY_LOCATION:
            return {
                ...state,
                location_primary:py
            }
        

        default :
            return state;

    }
}

export default user 