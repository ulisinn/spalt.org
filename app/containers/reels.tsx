import * as React from 'react';

export interface ReelsState {
    loaded: boolean;
}

export default class ReelsView extends React.Component<{}, ReelsState> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id={'reels'}>
            <h2>ReelsView</h2>
        </div>;
    }
}
