import React from "react"
import PropTypes from "prop-types"

const CTA = ({heading, cta, ctaLink}) => (
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <h5 class="mb-4">{heading}</h5>
                        <div class="">
                            <a href="{ctaLink}" class="btn btn-cta" style={{fontSize:"1.2em"}}>{cta}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

CTA.propTypes = {
    heading: PropTypes.string,
    cta: PropTypes.string,
    ctaLink: PropTypes.string
}

export default CTA
