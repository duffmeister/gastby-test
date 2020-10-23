import React from "react"
import PropTypes from "prop-types"

const Plan = ({headline, dek, icon, steps}) => (

  <section class="section bg-light" id="plan">

        { !!headline ?
        <div class="container-sm">
          <div class="row justify-content-center text-center mb-5">
              <div class="col-lg-12">
                  <i class={`${icon} title-icon text-muted`}></i>
                  <h2>{headline}</h2>
                  <p class="text-muted mt-3 title-subtitle mx-auto">{dek}</p>
              </div>
          </div>
        </div>
        : <></> }

      <div class="container-sm">
        <div class="row mt-5 justify-content-md-center text-center">
          {steps.map((step, index) => (
            <div class="col-lg-3 mt-2 mb-5">
                <div class="features-desc">
                    <div class="plan-icon">
                        <i class="text-custom">{index+1}</i>
                    </div>
                    <h5 class="mt-3 font-weight-bold">{step.heading}</h5>
                    <p class="text-muted mt-3">{step.text}</p>
                </div>
            </div>
          ))}
        </div>
        <div class="row">
            <div class="col-lg-12 mt-5">
                <div class="text-center">
                    <div class="">
                        <a href="#" style={{fontSize:"1.1em"}} class="btn btn-cta">Try for free</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

)

export default Plan
