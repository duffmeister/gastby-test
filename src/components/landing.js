import React from "react"
import PropTypes from "prop-types"
import ContactForm from "./contactform"

const Landing = ({headline, dek, nuts, cta}) => (

    <section className="section bg-home" id="home">
        <div className="home-center">
            <div className="home-desc-center">
                <div className="container">
                    <div className="row vertical-content">
                        <div className="col-lg-7">
                            <div>
                                <h1 className="text-white home-title mb-0">{headline}</h1>
                                <p className="text-white-60 home-subtitle mt-4 mb-0">{dek}</p>
                                <div className="container-fluid mt-5">
                                  <div className="row">
                                  {nuts.map((nut, index) => (
                                    <div key={index} className="col-sm text-white mb-4 pl-0 pr-4">
                                      <div className="services-icon">
                                          <i className={`${nut.icon} text-custom`}></i>
                                      </div>
                                      <div className="mt-3">
                                          <h5 className="services-title font-weight-bold mb-3">{nut.heading}</h5>
                                          <p className="services-subtitle text-white-60">{nut.text}</p>
                                      </div>
                                    </div>
                                  ))}
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4 mt-3">
                          <ContactForm
                            cta={cta}
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Landing
