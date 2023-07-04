import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
const initialValue = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialValue,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
