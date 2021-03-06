import React from "react"
import PropTypes from "prop-types"
import Image from "./image"

const Hero = ({headline, dek, hero, stackImage, cta, ctaLink, bullets}) => (

  <section class="section bg-home" id="home">
    <div class="home-center">
        <div class="home-desc-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mb-5">
                        <div>
                            <h1 class="text-white home-title mb-0">{headline}</h1>
                            <p class="text-white-50 home-subtitle mt-4 mb-0">{dek}</p>
                            { bullets.length > 0 ?
                              <ul class="text-white mt-4 list-unstyled">
                                {bullets.map((bullet, index) => (
                                  <li key={index} class="mb-2">
                                    <i class={`${bullet.icon} mr-2`}></i> {bullet.text}
                                  </li>
                                ))}
                              </ul>
                            : <></> }
                            { !!cta ?
                            <div class="mt-5 mb-3">
                                <a href={ctaLink} style={{fontSize:"1.2em"}} class="btn btn-lg btn-cta intercom">{cta}</a>
                            </div>
                            : <></> }
                            { !!stackImage ?
                              <div class="mt-5 mb-3">
                                <img style={{maxWidth:"250px"}} src={stackImage}/>
                              </div>
                            : <></>}
                        </div>
                    </div>
                    <div class="col-lg-5 mt-0 pt-0">
                      { hero != "" ? hero : <></>}
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
  hero: PropTypes.object,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  bullets: PropTypes.array
}

Hero.defaultProps = {
  headline: ``,
  dek: ``,
  cta: ``,
  ctaLink: `#`,
  bullets: []
}

export default Hero
