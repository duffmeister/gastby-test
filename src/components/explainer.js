import React from "react"
import PropTypes from "prop-types"

const Explainer = ({headline, dek, icon, sections}) => (

  <section class="section bg-light" id="features">
    { !!headline ?
    <div class="container-sm">
      <div class="row justify-content-center text-center mt-5 mb-5">
          <div class="col-lg-12">
              <i class={`${icon} title-icon text-muted`}></i>
              <h2>{headline}</h2>
              <p class="text-muted mt-3 title-subtitle mx-auto">{dek}</p>
          </div>
      </div>
    </div>
    : <></> }
    <div class="container flipflop">
        {sections.map((section, index)=>(
          <div  key={index} class="row mt-5 vertical-content">
              <div class="col-lg-6 mt-2 mb-5">
                  <div class="mx-3">
                    { !!section.image ? section.image : <></>}
                  </div>
              </div>
              <div class="col-lg-5 offset-lg-1 mt-2 mb-5">
                  <div class="features-desc">
                      <h2>{section.heading}</h2>
                      <p class="text-muted mt-3">{section.text}.</p>
                  </div>
              </div>
          </div>
        ))}
    </div>
  </section>
)

Explainer.propTypes = {
  headline: PropTypes.string,
  dek: PropTypes.string,
  icon: PropTypes.string,
  sections: PropTypes.array
}

export default Explainer
