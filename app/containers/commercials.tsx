import * as React from 'react';
import {connect} from 'react-redux';
import {url} from '../store'
import CommercialsItem from '../components/commercialsThumbnail'
import * as styles from '../styles/main.scss';

class CommercialsView extends React.Component <any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('CommercialsView comoponentDidMount ', this.props);
    }

    componentWillReceiveProps() {

    }


    render() {
        const {commercials, location} = this.props;
        const commercialCompoent = this.getThumbnailComponent(commercials);
        console.log('COMMERCIALS', commercials);
        return <div id={'commercials'} className={styles.commercialsView}>
            <div id={'commercialThumbnails'} className={styles.commercialThumbnails}>{commercialCompoent}</div>
            <div id={'commercialsFooter'}>{'footer'}</div>
        </div>;
    }

    getThumbnailComponent(commercials: Array<any>) {
        /*
            label: string,
    index: number,
    image: string,
    video: string,
    getVideo: any
         */
        return commercials.map((d, i) => {
            return <CommercialsItem key={i} label={d.title} image={d.image} video={d.video}
                                    getVideo={() => this.getVideo(url)}/>
        })
    };

    getVideo(url: string) {
        console.log('get video')
    }
}


const mapStateToProps = ({content}) => {
    return {
        commercials: (content[0]) ? content[0].items : []
    };
};

export default connect(
    mapStateToProps,
)(CommercialsView);
