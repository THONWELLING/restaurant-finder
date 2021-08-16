import { createStore } from 'redux';

import rootReducer from './reducers';

const store = CreateStore(rootReducer);

export default store;