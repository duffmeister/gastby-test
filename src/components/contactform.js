import React from "react"
import axios from "axios"
import * as qs from "query-string"

class ContactForm extends React.Component {

  constructor(props){
    super(props)
    this.domRef = React.createRef()
    this.state = {name: "new"};
  }

  handleSubmit(event){
    this.setState({name: "wait"})

    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const axiosOptions = {
      url: window.location.href,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({name: "success"})
      })
      .catch(err => {
        this.setState({name: "error"})
        console.log(err)
      })

  }

  getForm(){

    if(this.state.name === "new"){
      return (
        <form
          name="New Product Development - Performance"
          className="registration-form"
          action="/success-check-email"
          data-netlify="true"
          method="POST"
          >
            <input ref="form-name" name="form-name" value="New Product Development - Performance" type="hidden" />
            <label htmlFor="name" className="text-muted">Your Name</label>
            <input ref="name" type="text" id="name" name="name" className="form-control mb-2 registration-input-box"/>
            <label htmlFor="email" className="text-muted">Email</label>
            <input ref="email" type="email" id="email" name="email" className="form-control mb-2 registration-input-box"/>
            <label htmlFor="url" className="text-muted">Store URL</label>
            <input ref="url" type="url" id="url" name="url" className="form-control mb-2 registration-input-box"/>
            <a href={this.props.scrollBack} className="btn btn-cta w-100 mt-3 text-uppercase" onClick={event => this.handleSubmit(event)}>Get In Touch</a>
        </form>
      )
    }
    if(this.state.name === "wait"){
      return (
        <div className="text-center mt-5">
          <i className="ti-timer text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-5">Thank you, one of the team will be in touch shortly.</h6>
          <p className="text-muted">Want to skip ahead? Book a quick call...</p>
          <button className="btn btn-custom mb-2">Book a call</button>
        </div>
      )
    }
    if(this.state.name === "error"){
      return (
        <div className="text-center mt-5">
          <i className="ti-flag text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-5">Thank you, one of the team will be in touch shortly.</h6>

          <p className="text-muted">Want to skip ahead? Book a quick call...</p>
          <button className="btn btn-custom mb-2">Book a call</button>
        </div>
      )
    }
    if(this.state.name === "success"){
      return(
        <div className="text-center mt-5">
          <i className="ti-check text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-5">Thank you, one of the team will be in touch shortly.</h6>

          <p className="text-muted">Want to skip ahead? Book a quick call...</p>
          <button className="btn btn-custom mb-2">Book a call </button>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="home-registration-form mx-auto bg-white p-4 transition-all">
          <h5 className="form-title mb-4 text-center font-weight-bold">{this.props.cta}</h5>
          {this.getForm()}
      </div>
    )
  }

}

export default ContactForm
