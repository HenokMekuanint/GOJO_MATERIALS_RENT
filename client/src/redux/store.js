import { createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertReducer';
import { materialsReducer } from './reducers/materialReducers';
const composeEnhancers = composeWithDevTools({

});
const rootReducer=combineReducers({
    materialsReducer,
    alertsReducer
}) 
const store = createStore(
    rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);
export default store