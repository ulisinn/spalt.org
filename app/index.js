import React from 'react';
import { render } from 'react-dom';

import Hello from './component';
import './styles/main.scss';


const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

render(<Hello />,
  rootElement,
);


