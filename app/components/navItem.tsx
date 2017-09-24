import * as React from 'react'
import {Link} from 'react-router-dom'
import * as styles from '../styles/main.scss';

const classNames = require('classnames/bind');

interface NavItemProps {
    label: string,
    selected: boolean,
    path: string,
    index: number,
    isOpen: boolean
}

const NavItem: React.SFC<NavItemProps> = (props) => {
        const cx = classNames.bind(styles);
        const className = cx('navItem', {isOpen: props.isOpen});

        if (props.selected) {
            return (
                <div className={className}>
                    {props.label}
                </div>
            );
        } else {
            return (<div className={className}>
                <Link
                    to={props.path}>
                    <div> {props.label} {props.selected}</div>
                </Link>
            </div>)
        }
    }
;

export default NavItem;
