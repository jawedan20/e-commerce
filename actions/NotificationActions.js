
import axios from '../utils/axios'
import * as types from './action_types/action_type_notification'


export const fecthNotification = () => (dispatch) => {
    axios.get('api/notification/')
    .then(res => {
        dispatch({
            type:types.FECTHNOTIFICATION,
            payload:res.data
        })        
    })
    .catch(err =>  dispatch({
        type:types.FECTHNOTIFICATION,
        payload:[]
    })  )
}
