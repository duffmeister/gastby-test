import React from "react"
import PropTypes from "prop-types"

const Tasks = ({headline, dek, icon, tasks}) => (

    <section class="section bg-light" id="team">
        <div class="container">
            { headline !== "" ?
            <div class="row justify-content-center text-center mt-5 mb-5">
                <div class="col-lg-12">
                    <i class={`${icon} title-icon text-muted`}></i>
                    <h2>{headline}</h2>
                    <p class="text-muted mt-3 title-subtitle mx-auto">{dek}</p>
                </div>
            </div>
            : <></> }
            <div class="row mt-5 mb-5 pb-5 align-content-stretch">
              {tasks.map((task, index) => (
                <div key={index} class={task.class === "large" ? `col-lg-6` : `col-lg-3`}>
                    <div class="bg-white team-box mt-3 pl-4 pr-4 pt-4 pb-4">
                        <div class="team-name">
                            <p class="text-muted slug"><i class={`${task.icon}`}></i><span>{task.type}</span></p>

                            <h5 class="services-title font-weight-bold mb-3">{task.heading}</h5>
                            <p>{task.text}</p>
                            <p class="text-muted mb-0">Status: <span class="text-success">Complete</span></p>
                            <p class="text-muted mt-0">Completed in: {task.time}</p>
                            <p class="text-muted rating">
                                <span class="ti-star text-warning"></span>
                                <span class="ti-star text-warning"></span>
                                <span class="ti-star text-warning"></span>
                                <span class="ti-star text-warning"></span>
                                <span class="ti-star text-warning"></span>
                                <span class="csat">({task.csat}/10)</span>
                            </p>
                        </div>
                    </div>
                </div>
              ))}
            </div>
            <div class="row justify-content-center text-center mt-5 mb-5">
                <div class="col-lg-8">
                    <h4>Take us for a spin, create a free task....</h4>
                    <p class="text-muted mb-3  title-subtitle">Try out the Unlimted service risk free, create a free
                    task and experience first hand what we can do together.</p>
                    <button class="mt-3 btn btn-cta intercom">Try for free</button>
                </div>
            </div>
        </div>
    </section>
)

Tasks.propTypes = {
  headline: PropTypes.string,
  dek: PropTypes.string,
  icon: PropTypes.string,
  tasks: PropTypes.array
}


export default Tasks
