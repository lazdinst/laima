import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import socketIO from './middleware/socketIO';

const preloadedState = window.__PRELOADED_STATE__ || {};
const initialState = {};

import reducers from './reducers';

const enhancers = [];
const middleware = [thunk, socketIO];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose( applyMiddleware(...middleware), ...enhancers);

const store = createStore( reducers, initialState, composedEnhancers);

export default store;