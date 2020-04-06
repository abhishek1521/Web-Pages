import React, { Component } from 'react'
import Locobuzz from "../Locobuzz"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class AppRouter extends Component {
    
    render() {
        
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Locobuzz />
                        </Route>
                        <Route path="/dashboard-1" exact={true}>
                            <Locobuzz />
                        </Route>
                    </Switch>
                </Router>
            </div >
        )
    }
}
