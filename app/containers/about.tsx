import * as React from 'react';

export interface AboutState {
    //loaded: boolean;
}

export default class AboutView extends React.Component<{}, AboutState> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>AboutView</h2>
        </div>;
    }
}
