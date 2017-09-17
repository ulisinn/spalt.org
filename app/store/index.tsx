import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {getRemoteData} from '../actions/index';

export const url: string = 'http://localhost:3000/';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

const data: string = `${url}data/`;

console.log('data', data);
store.dispatch(getRemoteData(data));


export default store;
