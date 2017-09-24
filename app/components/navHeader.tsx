import * as React from 'react'
import {Link} from 'react-router-dom'
import * as styles from '../styles/main.scss';

interface NavHeaderProps {
    index: number,
    toggleHamburger: any,
    isOpen: boolean
}

const NavHeader: React.SFC<NavHeaderProps> = ({toggleHamburger, isOpen}) => {
    const label = (isOpen) ? `${String.fromCharCode(215)} ${String.fromCharCode(160)}` : `${String.fromCharCode(8801)} ${String.fromCharCode(160)}`;
    return (
        <div className={styles.navButton} onClick={() => toggleHamburger()} style={{cursor: 'pointer'}}>
            <p>{label}</p>
        </div>
    );

};

export default NavHeader;
