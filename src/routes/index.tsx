import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Dashboard}/>
            <Route path="/repository/:repository+" exact={true} component={Repository}/>
        </Switch>
    );
};

export default Routes;