import React from "react"
import { Link } from "gatsby"
import logo from '../images/alt-mc-logo-white@4x.png'

const Navigation = () => (
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div class="container">
          <Link to="/" class="navbar-brand">
            <img src={logo} width="175"/>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="ti-menu"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#pricing">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link" activeClassName="nav-link active">About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/careers" class="nav-link" activeClassName="nav-link active">Careers</Link>
                  </li>
              </ul>
              <div>
                <ul class="text-right list-unstyled list-inline mb-0 nav-social">
                  <li class="list-inline-item">
                      <Link to="https://mcco.zendesk.com/hc" class="nav-link" activeClassName="nav-link active">Sign In</Link>
                  </li>
                  <li class="list-inline-item"><a href="#" class="btn btn-custom">Try for free</a></li>
                </ul>
              </div>
          </div>
      </div>
  </nav>
)

export default Navigation
