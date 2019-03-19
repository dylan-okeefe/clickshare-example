import React, { Component } from 'react'
import Header from './header'
import Landing from './landing'
import { Redirect } from 'react-router'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Index extends Component {
    render() {
        return(
            <div className="background">
                <Header />
                    <Route path="/" component={Landing}/>
            </div>
        )
    }
}