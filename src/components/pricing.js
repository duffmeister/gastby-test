import React from "react"
import PropTypes from "prop-types"

const Pricing = () => (
  <section class="section bg-light" id="pricing">
          <div class="container">
              <div class="row justify-content-center text-center">
                  <div class="col-lg-12">
                      <i class="ti-package title-icon text-muted"></i>
                      <h3 class="title">Our <span class="font-weight-bold">Pricing</span></h3>
                      <p class="text-muted mt-3 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                  </div>
              </div>
              <div class="row mt-5">
                  <div class="col-lg-4">
                      <div class="bg-white price-box text-center mt-3">
                          <div class="plan-price font-weight-bold">
                              <h1 class="mb-0 font-weight-bold">$29</h1>
                              <p class="mb-0">Per Month</p>
                          </div>
                          <div class="plan-features text-muted mt-5 mb-5">
                              <p>Bandwidth: <b class="text-custom">1GB</b></p>
                              <p>Onlinespace: 50MB</p>
                              <p>Support: No</p>
                              <p>1 Domain</p>
                              <p class="mb-0">No Hidden Fees</p>
                          </div>
                          <div>
                              <a href="#" class="btn btn-custom btn-round">Join Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="bg-white price-box active text-center mt-3">
                          <div class="plan-price font-weight-bold">
                              <h1 class="mb-0 font-weight-bold">$59</h1>
                              <p class="mb-0">Per Month</p>
                          </div>
                          <div class="plan-features text-muted mt-5 mb-5">
                              <p>Bandwidth: <b class="text-custom">2GB</b></p>
                              <p>Onlinespace: 500MB</p>
                              <p>Support: Yes</p>
                              <p>5 Domain</p>
                              <p class="mb-0">No Hidden Fees</p>
                          </div>
                          <div>
                              <a href="#" class="btn btn-custom btn-round">Join Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="bg-white price-box text-center mt-3">
                          <div class="plan-price font-weight-bold">
                              <h1 class="mb-0 font-weight-bold">$79</h1>
                              <p class=" mb-0">Per Month</p>
                          </div>
                          <div class="plan-features text-muted mt-5 mb-5">
                              <p>Bandwidth: <b class="text-custom">4GB</b></p>
                              <p>Onlinespace: 1 GB</p>
                              <p>Support: Yes</p>
                              <p>10 Domain</p>
                              <p class="mb-0">No Hidden Fees</p>
                          </div>
                          <div>
                              <a href="#" class="btn btn-custom btn-round">Join Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

)

export default Pricing
