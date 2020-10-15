import React from "react"
import PropTypes from "prop-types"

const Plan = ({headline, dek, icon, steps}) => (

  <section class="section bg-light" id="plan">

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

      <div class="container-sm flipflop">
        {steps.map((step, index) => (
        <div class="row mt-5 vertical-content">
          <div class="col-lg-4 mt-2">
            <div>
              <img src={step.image} alt="" class="img-fluid mx-auto d-block"/>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 mt-2">
              <div class="features-desc">
                  <div class="plan-icon">
                      <i class="text-custom">{index+1}</i>
                  </div>
                  <h5 class="mt-3 font-weight-bold">{step.heading}</h5>
                  <p class="text-muted mt-3">{step.text}</p>
              </div>
          </div>
        </div>
        ))}
        <div class="row">
            <div class="col-lg-12 mt-5">
                <div class="text-center">
                    <div class="">
                        <a href="#" class="btn btn-custom">Try a free task</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

)

export default Plan
