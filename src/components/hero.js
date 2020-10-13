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
                            <div class="mt-4">
                                <a href="{ctaLink}" class="btn btn-custom">{cta}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 mt-3">
                        <div class="home-registration-form mx-auto bg-white w-75 p-4">
                            <h5 class="form-title mb-4 text-center font-weight-bold">Get 30 days FREE Trial</h5>
                            <form class="registration-form">
                                <label class="text-muted">First Name</label>
                                <input type="text" id="exampleInputName1" class="form-control mb-2 registration-input-box"/>
                                <label class="text-muted">Email</label>
                                <input type="email" id="exampleInputEmail1" class="form-control mb-2 registration-input-box"/>
                                <label class="text-muted">Password</label>
                                <input type="password" id="password1" class="form-control mb-2 registration-input-box"/>
                                <button class="btn btn-custom w-100 mt-3 text-uppercase">Get Started</button>
                            </form>
                        </div>
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
