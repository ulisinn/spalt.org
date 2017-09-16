import * as React from 'react'
import * as styles from '../styles/main.scss';

interface NavItemProps {
    label: string,
    selected: boolean,
    path: string,
    index: number,
}

const NavItem: React.SFC<NavItemProps> = (props) => {
    return <div style={{marginLeft: (props.index === 0) ? 0 : 5}} className={styles.navItem}>{props.label}</div>;
};

export default NavItem;
