import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, {}, composedEnhancers)

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
// }
export default store;