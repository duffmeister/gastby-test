import React from "react"
import PropTypes from "prop-types"

const Explainer = ({headline, content, image, orientation}) => (

  <section class="section bg-light" id="features">
    <div class="container">
        <div class="row mt-5 vertical-content">
            <div class="col-lg-6 mt-2">
                <div>
                    <img src="images/mockup2.png" alt="" class="img-fluid mx-auto d-block"/>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1 mt-2">
                <div class="features-desc">
                    <h2>Work with an all star team</h2>
                    <p class="text-muted mt-3">You'll love working with our developers, they are some of the finest and brightest in the industry (they've worked at some of the largest brands too).

You'll work with developers that can be human, work fast, and are easy to work with. Most of all you'll work with people that are willing to be invested in you and your success.</p>
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
