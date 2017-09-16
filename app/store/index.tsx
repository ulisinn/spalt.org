import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {getRemoteData} from '../actions/index';


const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

/*store.subscribe(() => (
    // Log the state whenever the store changes.
    console.log(store.getState()
    );*/

const url: string = 'http://localhost:3000/data/';

store.dispatch(getRemoteData(url));


export default store;
