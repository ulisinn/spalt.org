import * as React from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateNavigation} from '../actions/index';
import NavItem from '../components/navItem'

import * as styles from '../styles/main.scss';

class NavigationView extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps) {
        //
    }

    render() {
        const {navigation, location} = this.props;
        const data: Array<any> = (navigation.data && navigation.data.length > 1) ? navigation.data : [];
        const path: string = location.pathname;
        const navItems = (data) ? this.getNavigationItems(data, path) : [];
        return <div id={'navContainer'} className={styles.navContainer}>
            {navItems}
        </div>;
    }

    getNavigationItems(data: Array<any>, path: string) {
        return data.map((d, i) => {
            const isSelected = (path === d.path) ? true : false;
            return <NavItem index={i} key={i} path={d.path} label={d.label} selected={isSelected}/>
        })

    }
}


const mapStateToProps = (state) => {
    const {navigation} = state;
    return {
        navigation
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(updateNavigation, dispatch);
}


export default withRouter(connect(
    mapStateToProps,
    // mapDispatchToProps,
)(NavigationView));
