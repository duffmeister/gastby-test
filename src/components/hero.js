import React from "react"
import PropTypes from "prop-types"

const Hero = ({headline, dek, image, cta, ctaLink, bullets}) => (


  <section class="section bg-home" id="home">
    <div class="home-center">
        <div class="home-desc-center">
            <div class="container">
                <div class="row vertical-content">
                    <div class="col-lg-7">
                        <div>
                            <h1 class="text-white home-title mb-0">{headline}</h1>
                            <p class="text-white-50 home-subtitle mt-4 mb-0">{dek}</p>
                            { bullets.length > 0 ?
                              <ul class="text-white mt-4 list-unstyled">
                                {bullets.map((bullet, index) => (
                                  <li class="mb-2">
                                    <i class={`${bullet.icon} mr-2`}></i> {bullet.text}
                                  </li>
                                ))}
                              </ul>
                            : <></> }
                            { cta != "" ?
                            <div class="mt-5">
                                <a href="{ctaLink}" class="btn btn-custom">{cta}</a>
                            </div>
                            : <></> }
                        </div>
                    </div>
                    <div class="col-lg-5 mt-3">
                      { image != "" ?
                          <img src={image}/>
                      : <></>}
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
  image: PropTypes.object,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  bullets: PropTypes.array
}

Hero.defaultProps = {
  headline: ``,
  dek: ``,
  image: ``,
  cta: ``,
  ctaLink: `#`,
  bullets: []
}

export default Hero
