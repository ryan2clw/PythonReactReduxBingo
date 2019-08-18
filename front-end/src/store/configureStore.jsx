import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { messageReducer } from './Message';
import { cardReducer } from './Card';

const configureStore = () => {
    const reducers = {
        alert: messageReducer,
        cards: cardReducer
    };
    const loggerMiddleware = createLogger();
    const middleware = [
        thunk,
        loggerMiddleware
    ];
    const rootReducer = combineReducers({
        ...reducers
    });
    return createStore(
        rootReducer,
        compose(applyMiddleware(...middleware))
    );
 }
 export default configureStore;
 
 