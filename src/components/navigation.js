import React from "react"
import { Link } from "gatsby"
import logo from '../images/mc-logo-white@4x.png'

const Navigation = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container">

          <Link to="/" className="navbar-brand">
            <img src={logo} width="175"/>
          </Link>

          <div class="collapse navbar-collapse" id="navbarCollapse">

            <ul className="navbar-nav mx-auto">

                <li className="nav-item">
                  <Link to="/lp/unlimited-plans" className="nav-link" activeClassName="nav-link active">Unlimited</Link>
                </li>
                <li className="nav-item">
                  <Link to="/enterprise" className="nav-link" activeClassName="nav-link active">Enterprise</Link>
                </li>
                <li className="nav-item">
                  <Link to="/faststart" className="nav-link" activeClassName="nav-link active">FastStart</Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link" activeClassName="nav-link active">Pricing</Link>
                </li>
                {/*<li className="nav-item">
                  <Link to="/about" className="nav-link" activeClassName="nav-link active">About Us</Link>
                </li>*/}
            </ul>
            <div>
              <ul className="text-right list-unstyled list-inline mb-0 nav-social">
                <li className="list-inline-item">
                    <Link to="https://mcco.zendesk.com/hc" className="nav-link" activeClassName="nav-link active">Sign In</Link>
                </li>
                <li className="list-inline-item"><a href="#" className="btn btn-cta">Try for free</a></li>
              </ul>
            </div>

            <input type="checkbox" id="menuCheckbox" class="nav__menu-toggle"/>
            <span class="nav__hamburger-slice"></span>
            <span class="nav__hamburger-slice"></span>
            <span class="nav__hamburger-slice"></span>
          </div>
      </div>
  </nav>
)

export default Navigation
