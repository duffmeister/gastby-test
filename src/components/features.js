import React from "react"
import PropTypes from "prop-types"

const Hero = ({headline, dek, nuts}) => (

    <section class="section inverted" id="nuts">
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
                <div  key={index} class="col-md-4">
                    <div class="services-box">
                        <div class="services-icon text-white">
                            <i class={`${nut.icon} text-white`}></i>
                        </div>
                        <div class="mt-3">
                            <h5 class="services-title text-white mb-3">{nut.heading}</h5>
                            <p class="services-subtitle text-white-50">{nut.text}</p>
                        </div>
                    </div>
                </div>
              ))}
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
