import React, { Component } from 'react'

export class Section4 extends Component {
    render() {
        return (
            <section id="fourth" className="main special">
                <header className="major">
                    <h2>Registration</h2>
                </header>
                <h3 className="sub-topics">Who can Apply</h3>
                <p>If you are an energetic and enthusiastic
                <strong>university undergraduate </strong>
                    looking to contribute to widen,
                <br />your horizons in the IT field,
                <br />
                    then this your chance to be part of Hacktitude as well as the open source community
                <br />
                    at 99X Technology.
                </p>
                <h3 className="sub-topics">How to Apply</h3>
                <p>All those interested can register for Hacktitude by simply clicking on the link below to get kick started on this incredible journey.</p>

                <footer className="major">
                    <ul className="actions">
                        <li><a href="https://goo.gl/forms/fPdvAXRfwerIwTUn2" rel='noreferrer' style={{ width: "250px", fontSize: "24px" }} className="button special disabled">
                            <b style={{ color: "white" }}>Apply Now!</b></a>
                        </li>
                    </ul>
                </footer>
            </section>
        )
    }
}

export default Section4
