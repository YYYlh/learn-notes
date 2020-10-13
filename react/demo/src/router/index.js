import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/home'
import hook from '../views/hook'

function RouterView() {
    return (
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/hook" component={hook}></Route>
        </Switch> 
    )
}

export default RouterView