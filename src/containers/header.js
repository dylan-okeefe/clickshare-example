import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="logo">
                    clickshare
                </div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li>Serices</li>
                            <li>Partners</li>
                            <li>FAQ</li>
                            <li>Mission</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                </div>

            </div>
        )
    }
}