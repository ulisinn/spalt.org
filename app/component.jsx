import React from 'react';
import {Icon} from 'react-fa';
// import 'font-awesome/css/font-awesome.min.css'
import styles from './styles/main.scss';

const loaderImg = require('./images/ajax-loader.gif');
const svg = require('./images/logo.svg');
const Component = () => (
  <div>
    <p
      className={styles.icon}>
      <Icon name="arrow-left"/>
    </p>
    <p className={styles.icon}>{`Hello ${styles.icon}`}</p>
    <p><img src={loaderImg} alt=""/></p>
    <p><img src={svg} style={{width: '3em'}} alt=""/></p>
  </div>
);

export default Component;
