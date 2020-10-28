import React from "react"

const Footer = () => (

    <section className="section footer">
        <div className="container">
            <div className="row">
                  <div className="col-lg-6">
                      <ul className="list-inline social mb-0">
                          <li className="list-inline-item"><a href="https://" className="social-icon text-muted"><i className="ti-facebook"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="social-icon text-muted"><i className="ti-twitter-alt"></i></a></li>
                          <li className="list-inline-item"><a href="#" className="social-icon text-muted"><i className="ti-linkedin"></i></a></li>
                      </ul>
                      <p className="copy-rights text-muted mt-5">© Managed Commerce Inc. a Delaware Corporation.</p>
                  </div>
                  <div className="col-lg-3">

                      <h6 class="text-white-50">Legal stuff</h6>
                      <ul className="list-unstyled">
                          <li><a href="#" className="text-muted">Terms & Condition</a></li>
                          <li><a href="#" className="text-muted">Privacy Policy</a></li>
                      </ul>
                      <h6 class="text-white-50 pt-2">Company stuff</h6>
                      <ul className="list-unstyled">
                          <li><a href="#" className="text-muted">Contact Us</a></li>
                          <li><a href="#" className="text-muted">Careers</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-3">
                      <h6 class="text-white-50">Sign up for our services</h6>
                      <ul className="list-unstyled">
                          <li><a href="#" id="launchFreeTrial" className="text-muted">Try Unlimited for free</a></li>
                          <li><a href="#" id="contactEnterprise" className="text-muted">Start an Enterprise plan</a></li>
                      </ul>
                  </div>
            </div>
        </div>
    </section>

)

export default Footer
