import * as React from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateNavigation} from '../actions/index';
import NavItem from '../components/navItem'
import NavHeader from '../components/navHeader'

import * as styles from '../styles/main.scss';

class NavigationView extends React.Component<any, any> {
    constructor(props) {
        super();
        this.state = {isOpen: false};
        this.toggleHamburger = this.toggleHamburger.bind(this)
    }

    toggleHamburger() {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
        console.log('toggleHamburger', isOpen);
    }

    componentWillReceiveProps(newProps, oldProps) {
        // console.log('componentWillReceiveProps', newProps.location, oldProps.location)
        if (newProps['location'] !== oldProps.location) {
            this.setState({isOpen: false});
        }

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
        const {isOpen} = this.state;
        console.log('path', path);
        const toggleHamburger = this.toggleHamburger;
        const NavArray = data.map((d, i) => {
            const isSelected = (path === d.path) ? true : false;

            return (<NavItem
                index={i}
                key={i}
                path={d.path}
                label={d.label}
                selected={(path === '/' && i === 0) ? true : isSelected}
                isOpen={isOpen}
            />)
        });
        NavArray.unshift(<NavHeader
            index={NavArray.length}
            key={NavArray.length}
            toggleHamburger={() => toggleHamburger()}
            isOpen={isOpen}
        />);
        return NavArray;
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
