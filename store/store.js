import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import user from './reducers/userReducers'
import cart from './reducers/cartReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user,
  cart
})

const middlwares = applyMiddleware(thunk)


    
export default createStore(
    rootReducer,
    composeWithDevTools(middlwares)
)

