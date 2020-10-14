import React from "react"
import PropTypes from "prop-types"

const Explainer = ({headline, content, image, orientation}) => (

  <section class="section bg-light" id="features">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-12">
                <i class="ti-bookmark-alt title-icon text-muted"></i>
                <h3 class="title">Our <span class="font-weight-bold">Features</span></h3>
                <p class="text-muted mt-3 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
            </div>
        </div>
        <div class="row mt-5 vertical-content">
            <div class="col-lg-6 mt-2">
                <div>
                    <img src="images/mockup2.png" alt="" class="img-fluid mx-auto d-block"/>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1 mt-2">
                <div class="features-desc">
                    <h2>This is Improve Your Marketing business</h2>
                    <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .</p>
                </div>
            </div>
        </div>
        <div class="row mt-5 pt-5 vertical-content">
            <div class="col-lg-5 mt-2">
                <div class="features-desc">
                    <h2>This Is Increase Your Marketing Performance</h2>
                    <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .</p>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1 mt-2">
                <div>
                    <img src="images/mockup1.png" alt="" class="img-fluid mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>
</section>


)

export default Explainer
