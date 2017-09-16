import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateNavigation} from "../actions/index";

class CommercialsView extends React.Component <{}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('CommercialsView comoponentDidMount ', this.props);
    }

    componentWillReceiveProps() {

    }

    render() {
        // console.log('COMMERCIALS', this.props);
        return <div>
            <h2>CommercialsView</h2>
        </div>;
    }
}


const mapStateToProps = ({portfolio, navigation}) => {

    return {
        portfolio
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(updateNavigation, dispatch);
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CommercialsView);
