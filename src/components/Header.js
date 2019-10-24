import React, { Component } from 'react'
import Clock from './Clock'

export class Header extends Component {
    render() {
        return (
            <header id="header" className="alt">
                <span className="logo"><img style={{ height: "250px" }} src={require('../images/logo_white.png')} alt="" /></span>
                <h1>#Hacktitude</h1>
                <p style={{ marginBottom: "10px" }}>Are You Ready For the Ultimate Challenge? </p>
                <Clock />
                <p style={{ marginBottom: "5px" }}>Registration Deadline</p>
            </header>
        )
    }
}

export default Header
