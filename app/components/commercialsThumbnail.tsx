import * as React from 'react'
import * as styles from '../styles/main.scss';
import {url} from '../store'

interface CommercialItemsProps {
    label: string,
    image: string,
    video: string,
    getVideo: any,
}


const CommercialsItem: React.SFC<CommercialItemsProps> = ({label, image, video, getVideo}) => {
    return (
        <div>
            <div className={styles.commercialsThumbnailItem} onClick={() => getVideo(video)}>
                <img src={`${url}${image}`}/>
                <p>{label}</p>
            </div>
        </div>
    );
};

export default CommercialsItem;
