import React from "react"
import PropTypes from "prop-types"

const Plan = () => (

  <section class="section bg-light" id="plan">
    <div class="container-sm">
        <div class="row justify-content-center text-center">
            <div class="col-lg-12">
                <i class="ti-map-alt title-icon text-muted"></i>
                <h3 class="title">How it <span class="font-weight-bold">works</span></h3>
                <p class="text-muted mt-3 title-subtitle mx-auto">We'll quick become you trusted partner.</p>
            </div>
        </div>
        <div class="row mt-5 vertical-content">
          <div class="col-lg-4 mt-2">
              <div>
                  <img src="images/mockup2.png" alt="" class="img-fluid mx-auto d-block"/>
              </div>
          </div>
          <div class="col-lg-4 offset-lg-1 mt-2">
              <div class="features-desc">
                  <div class="plan-icon">
                      <i class="text-custom">1</i>
                  </div>
                  <h5 class="mt-3">Create your tasks</h5>
                  <p class="text-muted mt-3">Send your todo list, wish list, and any ad hoc requests as they come.</p>
              </div>
          </div>
        </div>
        <div class="row mt-5 vertical-content">

          <div class="col-lg-4 offset-lg-1 mt-2">
              <div class="features-desc">
                  <div class="plan-icon">
                      <i class="text-custom">2</i>
                  </div>
                  <h5 class="mt-3">Work with an expert</h5>
                  <p class="text-muted mt-3">Watch your task list disappear with real time updates on progress.</p>
              </div>
          </div>
          <div class="col-lg-4 mt-2">
              <div>
                  <img src="images/mockup2.png" alt="" class="img-fluid mx-auto d-block"/>
              </div>
          </div>
        </div>
        <div class="row mt-5 vertical-content">
          <div class="col-lg-4 mt-2">
              <div>
                  <img src="images/mockup2.png" alt="" class="img-fluid mx-auto d-block"/>
              </div>
          </div>
          <div class="col-lg-4 offset-lg-1 mt-2">
              <div class="features-desc">
                  <div class="plan-icon">
                      <i class="text-custom">3</i>
                  </div>
                  <h5 class="mt-3">Do your thing</h5>
                  <p class="text-muted mt-3">Focus on growing your business and keeping your customers happy.</p>
              </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mt-5">
                <div class="text-center">
                    <h3 class="mb-4">Get started now</h3>
                    <div class="">
                        <a href="#" class="btn btn-round btn-custom">Try a free task</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

)

export default Plan
