import * as React from 'react'
import * as loaderImg from './images/ajax-loader.gif';
import * as svg from './images/logo.svg';

import {Icon} from 'react-fa';

import * as styles from './styles/main.scss';

const Hello: React.SFC = (props) => {
    return <div>
        <p
            className={styles.icon}>
            <Icon name="arrow-left"/>
        </p>
        <img src={loaderImg} alt=""/>
        <p>Hello</p>
        <p><img src={svg} style={{width: '3em'}} alt=""/></p></div>
};

export default Hello
