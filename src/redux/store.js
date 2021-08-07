import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

const devTools =
    process.env.NODE_ENV === 'production'
        ? applyMiddleware()
        : composeWithDevTools(applyMiddleware());

export let store = createStore(rootReducer, devTools);
