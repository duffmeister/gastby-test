import React from "react"
import PropTypes from "prop-types"

const Cards = ({headline, dek, icon, cards}) => (

    <section class="section bg-light" id="team">
        <div class="container">
            { headline !== "" ?
            <div class="row justify-content-center text-center mt-5 mb-5">
                <div class="col-lg-12">
                    <i class={`${icon} title-icon text-muted`}></i>
                    <h3 class="title">{headline}</h3>
                    <p class="text-muted mt-3 title-subtitle mx-auto">{dek}</p>
                </div>
            </div>
            : <></> }
            <div class="row mt-5">
              {cards.map((card, index) => (
                <div class="col-lg-3">
                    <div class="bg-white team-box mt-3 pl-4 pr-4 pt-4 pb-4">
                        <i class={`${card.icon} title-icon text-muted`}></i>
                        <div class="team-name">
                            <h5 class="services-title font-weight-bold mb-3">{card.title}</h5>
                            <p class="text-muted">{card.text}</p>
                        </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
)

export default Cards
