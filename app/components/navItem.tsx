import * as React from 'react'
import {Link} from 'react-router-dom'
import * as styles from '../styles/main.scss';

interface NavItemProps {
    label: string,
    selected: boolean,
    path: string,
    index: number,
}

const NavItem: React.SFC<NavItemProps> = (props) => {
    if (props.selected) {
        return <div style={{marginLeft: (props.index === 0) ? 0 : 5}} className={styles.navItem}>{props.label}</div>;
    } else {
        return <Link
            to={props.path} style={{marginLeft: (props.index === 0) ? 0 : 5}} className={styles.navItemLink}>
            <div >{props.label} {props.selected}</div>
        </Link>;
    }
};

export default NavItem;
