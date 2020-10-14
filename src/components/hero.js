import React from "react"
import PropTypes from "prop-types"

const Hero = ({headline, dek, cta, ctaLink}) => (

  <section class="section bg-home" id="home">
    <div class="home-center">
        <div class="home-desc-center">
            <div class="container">
                <div class="row vertical-content">
                    <div class="col-lg-7">
                        <div>
                            <h1 class="text-white home-title mb-0">{headline}</h1>
                            <p class="text-white-50 home-subtitle mt-4 mb-0">{dek}</p>
                            <ul class="text-white mt-4 list-unstyled">
                              <li class="mb-2"><i class="ti-bar-chart mr-2"></i> Improve your conversion rates and performance</li>
                              <li class="mb-2"><i class="ti-check-box mr-2"></i> Fix bugs and design issues</li>
                              <li><i class="ti-settings mr-2"></i> Intall apps an configure integrations</li>
                            </ul>
                            <div class="mt-5">
                                <a href="{ctaLink}" class="btn btn-custom">{cta}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 mt-3">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
)

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  dek: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaLink: PropTypes.string
}

Hero.defaultProps = {
  headline: ``,
  dek: ``,
  cta: `Read More`,
  ctaLink: `#`
}

export default Hero
