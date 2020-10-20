import React from "react"
import { Link } from "gatsby"
import logo from '../images/new-logo-white@4x.png'

const Navigation = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} width="175"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="ti-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
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
              <div>
                <ul className="text-right list-unstyled list-inline mb-0 nav-social">
                  <li className="list-inline-item">
                      <Link to="https://mcco.zendesk.com/hc" className="nav-link" activeClassName="nav-link active">Sign In</Link>
                  </li>
                  <li className="list-inline-item"><a href="#" className="btn btn-cta">Try for free</a></li>
                </ul>
              </div>
          </div>
      </div>
  </nav>
)

export default Navigation
