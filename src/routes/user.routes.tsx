import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Index from "../pages/home";

const UserRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Index} exact={true} path="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default UserRoutes;