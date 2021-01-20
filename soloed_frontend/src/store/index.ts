import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
