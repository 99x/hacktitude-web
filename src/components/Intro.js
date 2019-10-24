import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (
            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <h2>Be a part of Hacktitude!</h2>
                        </header>
                        <p>‘Hacktitude’ attempts to push university students to enhance their contributions to the open source community. So grab this once in a lifetime opportunity to contribute to the 99X open source projects and based on your contributions win the chance to work one-on-one with some of the top industry professionals at 99X Technology.</p>
                    </div>
                    <span className="image"><img src={require('../images/pic01.png')} alt="" /></span>
                </div>
            </section>
        )
    }
}

export default Intro
