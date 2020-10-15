import React from "react"
import PropTypes from "prop-types"

const Hero = ({headline, dek, nuts, logo}) => (

    <section class="section" id="services">
        <div class="container">
            { !!headline  ?
            <div class="row justify-content-center text-center mt-5 mb-5">
                <div class="col-lg-12">
                    <h2>{headline}</h2>
                    <p class="text-muted mt-3 title-subtitle mx-auto">{dek}</p>
                </div>
            </div>
            : <></> }
            { !!nuts ?
              <div class="row">
              {nuts.map((nut, index) => (
                <div class="col-md-4">
                    <div class="services-box">
                        <div class="services-icon">
                            <i class={`${nut.icon} text-custom`}></i>
                        </div>
                        <div class="mt-3">
                            <h5 class="services-title font-weight-bold mb-3">{nut.heading}</h5>
                            <p class="services-subtitle text-muted">{nut.text}</p>
                        </div>
                    </div>
                </div>
              ))}
              </div>
            : <></> }
            { !!logo ?
              <div class="row justify-content-center text-center mt-5 mb-5">
                <div class="col-sm">
                  <img src={logo} alt="Shopify partner logo" width="200"/>
                </div>
              </div>
            : <></> }
        </div>
    </section>
)

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  dek: PropTypes.string.isRequired,
  nuts: PropTypes.array.isRequired
}

Hero.defaultProps = {
  headline: ``,
  dek: ``,
  nuts: []
}

export default Hero
