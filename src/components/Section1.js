import React, { Component } from 'react'

export class Section1 extends Component {
    render() {
        return (
            <section id="first" className="main special">
                <header className="major">
                    <h2>Timeline</h2>
                </header>
                <ul className="features">
                    <li>
                        <span className="icon major style1 fa-clipboard"></span>
                        <h3 className="sub-topics"> Initial Round</h3>
                        <p style={{ marginBottom: "5px" }}><strong>Open for any Undergraduate</strong></p>
                        <p style={{ marginBottom: "0px" }}>21st August, 2017</p>
                    </li>
                    <li>
                        <span className="icon major style3 fa-code"></span>
                        <h3 className="sub-topics">Idea selection and mentor pairing</h3>
                        <p style={{ marginBottom: "5px" }}><strong>For the top 10 Contributors</strong></p>
                        <p>4th September</p>
                    </li>
                    <li>
                        <span className="icon major style5 fa-laptop"></span>
                        <h3 className="sub-topics">Final Round</h3>
                        <p style={{ marginBottom: "5px" }}><strong>For Finalist Contributors</strong></p>
                        <p>9th September</p>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Section1
