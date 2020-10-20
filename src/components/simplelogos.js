import React from "react"
import PropTypes from "prop-types"

const SimpleLogos = ({logos}) => (

    <section class="section bg-dark pt-5 pb-5" id="logos">
        <div class="container">
            <div class="row justify-content-center text-center mt-0 mb-0">
                <div class="col-lg-12">
                    <img style={{width:`80%`, maxWidth:`600px`}} src={logos} alt="partner logos"/>
                </div>
            </div>
        </div>
    </section>
)

SimpleLogos.propTypes = {
  logos: PropTypes.string
}


export default SimpleLogos
