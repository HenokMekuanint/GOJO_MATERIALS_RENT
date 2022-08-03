import { createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { carsReducers } from './reducers/carsReducers';
const composeEnhancers = composeWithDevTools({

});
const rootReducers=combineReducers({
    carsReducers
})
const store = createStore(
    rootReducers,
  composeEnhancers(
    applyMiddleware([thunk ])

  )
);
export default store