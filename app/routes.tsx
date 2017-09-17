import * as React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom'

import CommercialsView from './containers/commercials';
import ProjectsView from './containers/projects';
import ReelsView from './containers/reels';
import SlideShowView from './containers/slideshow';
import AboutView from './containers/about';
import BackgroundView from './containers/background';
import NotFoundView from './containers/404';
import NavigationView from "./containers/navigation";

export const RouteMap = () => {
    return (
        <div className={'siteContainer'}>
            <NavigationView/>
            <div className={'contentContainer'}>
                <Switch>
                    <Route path="/" exact component={CommercialsView}/>
                    <Route path="/commercials" exact component={CommercialsView}/>
                    <Route path="/projects" exact component={ProjectsView}/>
                    <Route path="/reels" exact component={ReelsView}/>
                    <Route path="/slideshow" exact component={SlideShowView}/>
                    <Route path="/about" component={AboutView}/>
                    <Route component={NotFoundView}/>
                </Switch>
                <BackgroundView/></div>
        </div>
    )
};
