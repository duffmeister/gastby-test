import React from "react"
import { Link } from "gatsby"
import logo from '../images/mc-logo-white@4x.png'

const Navigation = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container" id="navbar-toggle">

        <Link to="/" className="navbar-brand">
          <img src={logo} width="175"/>
        </Link>

        <input type="checkbox" id="menuCheckbox" class="nav__menu-toggle"/>
        <div id="navbar-hamburger">
          <span class="nav__hamburger-slice"></span>
          <span class="nav__hamburger-slice"></span>
          <span class="nav__hamburger-slice"></span>
        </div>
        <div id="navbar-menu" class="navbar-collapse">
          <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/lp/unlimited-plans" className="nav-link" activeClassName="nav-link active">Unlimited</Link>
              </li>
              <li className="nav-item">
                <Link to="/enterprise" className="nav-link" activeClassName="nav-link active">Enterprise</Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link" activeClassName="nav-link active">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" activeClassName="nav-link active">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link" activeClassName="nav-link active">Careers</Link>
              </li>
          </ul>
        </div>
        <div id="navbar-button">
          <ul className="text-right list-unstyled list-inline mb-0 nav-social">
            <li className="list-inline-item">
                <Link to="https://mcco.zendesk.com/hc" className="nav-link" activeClassName="nav-link active">Sign In</Link>
            </li>
            <li className="list-inline-item"><a href="#" className="btn btn-cta intercom" id="launchChat">Try for free</a></li>
          </ul>
        </div>
      </div>

  </nav>
)

export default Navigation
