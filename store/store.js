import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import user from './reducers/userReducers'
import cart from './reducers/cartReducers'
import alert from './reducers/alertReducers'
import notification from './reducers/notificationReducers'

import { composeWithDevTools } from 'redux-devtools-extension';

// combine reducers
const rootReducer = combineReducers({
  user,
  cart,
  alert,
  notification
})

const middlwares = applyMiddleware(thunk)


    
export default createStore(
    rootReducer,
    composeWithDevTools(middlwares)
)

