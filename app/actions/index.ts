import {ActionTypes} from '../reducers/index'

// NAVIGATION

export const initNavigation = (data: any) => {
    return {
        type: ActionTypes.INIT_NAVIGATION,
        payload: {
            data,
        },
    };
};
export const updateNavigation = (data: any) => (
    {
        type: ActionTypes.SET_CURRENT_NAVIGATION,
        payload: {
            data,
        }
    }
);

//

export const initFooter = (data: any) => {
    return {
        type: ActionTypes.INIT_FOOTER,
        payload: {
            data,
        },
    };
};

// REMOTE MESSAGES

export function remoteLoadPending() {
    return {
        type: ActionTypes.REMOTE_LOAD_PENDING,
    };
}


export function remoteLoadError() {
    return {
        type: ActionTypes.REMOTE_LOAD_ERROR,
    };
}

export function remoteLoadSuccess(data: any) {
    return {
        type: ActionTypes.REMOTE_LOAD_SUCCESS,
        payload: {
            data,
        },
    };
}

export function getRemoteData(url: string) {
    console.log('getRemoteData url', url);
    return (dispatch) => {
        // dispatch(remoteLoadPending());
        fetch(url)
            .then((resp) => resp.json())
            .then((items) => {
                const portfolio = items.portfolio.section;
                const nav = items.portfolio.header;
                const footer = items.portfolio.footer;
                dispatch(initNavigation(nav));
                dispatch(initFooter(footer));
                return dispatch(remoteLoadSuccess(portfolio));
            })
            .catch(() => {
                return dispatch(remoteLoadError());
            });
    };
}
