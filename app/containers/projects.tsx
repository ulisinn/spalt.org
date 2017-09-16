import * as React from 'react';

interface Props {
    foo: string;
}

export default class ProjectsView extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>ProjectsView</h2>
        </div>;
    }
}
