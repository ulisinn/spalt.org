import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateNavigation} from '../actions/index';
import NavItem from '../components/navItem'

import * as styles from '../styles/main.scss';

class NavigationView extends React.Component<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props as any;
        const data: Array<any> = (navigation.data && navigation.data.length > 1) ? navigation.data : [];
        const navItems = (data) ? this.getNavigationItems(data) : [];
        return <div className={styles.navContainer}>
            {navItems}
        </div>;
    }

    getNavigationItems(data: Array<any>) {
        return data.map((d, i) => {
            return <NavItem index={i} key={i} path={d.path} label={d.label} selected={false}/>
        })

    }
}


const mapStateToProps = ({navigation}) => {

    return {
        navigation
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(updateNavigation, dispatch);
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationView);
