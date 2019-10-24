import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav id="nav">
                    <ul>
                        <li><a href="#intro" className="active">Introduction</a></li>
                        <li><a href="#first">Timeline</a></li>
                        <li><a href="#second">Selection Rounds</a></li>
                        <li><a href="#fourth">Apply</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
