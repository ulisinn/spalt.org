import * as React from 'react'
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader'

import * as redux from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import {RouteMap} from './routes';
import store from './store/index'

import './styles/main.scss';

const rootElement = document.createElement('div');
rootElement.className = 'root';
const container = document.createElement('div');
container.className = 'container';
rootElement.appendChild(container);
document.body.appendChild(rootElement);


render(<Provider store={store}>
        <BrowserRouter>
            <RouteMap/>
        </BrowserRouter>
    </Provider>,
    container,
);
