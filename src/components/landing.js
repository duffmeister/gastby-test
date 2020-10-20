import React from "react"
import PropTypes from "prop-types"

const Landing = ({headline, dek, nuts, cta}) => (

    <section class="section bg-home" id="home">
        <div class="home-center">
            <div class="home-desc-center">
                <div class="container">
                    <div class="row vertical-content">
                        <div class="col-lg-7">
                            <div>
                                <h1 class="text-white home-title mb-0">{headline}</h1>
                                <p class="text-muted home-subtitle mt-4 mb-0">{dek}</p>
                                <div class="container-fluid mt-5">
                                  <div class="row">
                                  {nuts.map((nut, index) => (
                                    <div class="col-sm text-white mb-4 pl-0 pr-4">
                                      <div class="services-icon">
                                          <i class={`${nut.icon} text-custom`}></i>
                                      </div>
                                      <div class="mt-3">
                                          <h5 class="services-title font-weight-bold mb-3">{nut.heading}</h5>
                                          <p class="services-subtitle text-muted">{nut.text}</p>
                                      </div>
                                    </div>
                                  ))}
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-4 mt-3">
                            <div class="home-registration-form mx-auto bg-white p-4">
                                <h5 class="form-title mb-4 text-center font-weight-bold">{cta}</h5>
                                <form name="npd-lead" class="registration-form" action="/success-check-email" data-netlify="true" method="POST">
                                    <label for="name" class="text-muted">Your Name</label>
                                    <input type="text" id="name" name="name" class="form-control mb-2 registration-input-box"/>
                                    <label for="email" class="text-muted">Email</label>
                                    <input type="email" id="email" name="email" class="form-control mb-2 registration-input-box"/>
                                    <label for="url" class="text-muted">Store URL</label>
                                    <input type="url" id="url"name="url" class="form-control mb-2 registration-input-box"/>
                                    <button class="btn btn-custom w-100 mt-3 text-uppercase">Get In Touch</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Landing
