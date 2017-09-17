import {Action, combineReducers} from 'redux';

export enum ActionTypes {
    REMOTE_LOAD_PENDING = 'REMOTE_LOAD_PENDING',
    REMOTE_LOAD_SUCCESS = 'REMOTE_LOAD_SUCCESS',
    REMOTE_LOAD_ERROR = 'REMOTE_LOAD_ERROR',
    SET_CURRENT_NAVIGATION = 'SET_CURRENT_NAVIGATION',
    INIT_NAVIGATION = 'INIT_NAVIGATION',
    INIT_FOOTER = 'INIT_FOOTER'
}

interface IAction {
    type: string,
    payload: any
}

const loadRemoteContent = (state = {}, action: IAction) => {
    // console.log('STATIC CONTENT REDUCER', action);
    switch (action.type) {
        case ActionTypes.REMOTE_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload.data,
            };

        default:
            return state;
    }
};

const setNavigation = (state = {currentNavigation: {}}, action: IAction) => {
    switch (action.type) {
        case ActionTypes.INIT_NAVIGATION:
            return {
                ...state,
                ...action.payload,
            };
        case ActionTypes.SET_CURRENT_NAVIGATION:
            console.log('setNavigation', state, action)
            return {
                ...state,
                currentNavigation: action.payload,
            };

        default:
            return state;
    }
};

const setFooter = (state = {}, action: IAction) => {
    switch (action.type) {
        case ActionTypes.INIT_FOOTER:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    content: loadRemoteContent,
    navigation: setNavigation,
    footer: setFooter,
});

export default rootReducer;
