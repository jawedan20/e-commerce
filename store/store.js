import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import user from './reducers/userAuth'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user,

})

const middlwares = applyMiddleware(thunk)


    
export default createStore(
    rootReducer,
    composeWithDevTools(middlwares)
)

