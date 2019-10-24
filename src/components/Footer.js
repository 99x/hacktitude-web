import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer id="footer">
        <section className="copyright">
          <dl>
            <dt>For Information:<br />077 162 9563 - Lakindu <br />077 451 9776 - Thareef</dt>
            <dd></dd>
            <dt>Emails: <a href="mailto:99xt@googlegroups.com">99xt@googlegroups.com</a> <br /> <a href="mailto:dotitude@99x.lk">dotitude@99x.lk</a></dt>
            <dd></dd>
          </dl>
          <ul className="icons" style={{color:"black"}}>
            <li><a   rel='noreferrer' href="https://www.facebook.com/Dotitude/?fref=ts" style={{color:"black"}} className="icon fa-facebook alt"><span className="label" style={{color:"black"}}>Facebook</span></a></li>
            <li><a   rel='noreferrer' href="https://twitter.com/99xtechnology" style={{color:"black"}} className="icon fa-twitter alt"><span className="label" style={{color:"black"}}>Twitter</span></a></li>
            <li><a   rel='noreferrer' href="https://www.linkedin.com/company/99xtechnology" style={{color:"black"}} className="icon fa-linkedin alt"><span className="label" style={{color:"black"}}>LinkedIn</span></a></li>
          </ul>
        </section>
          <p className="copyright logo-powered">
          <a  rel='noreferrer'  href="http://99xtechnology.com">Powered by,<br /><img src={require('../images/logo-white.png')} alt="img" width="200" /></a> 
          </p> 
      </footer>
    )
  }
}

export default Footer
