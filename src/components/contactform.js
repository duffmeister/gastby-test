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
    event.preventDefault()
    this.setState(
      {name: "wait"}
    )

    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    console.log(formData)

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
          onSubmit={event => this.handleSubmit(event)}>
            <input ref="form-name" name="form-name" value="New Product Development - Performance" type="hidden" />
            <label htmlFor="name" className="text-muted">Your Name</label>
            <input ref="name" type="text" id="name" name="name" className="form-control mb-2 registration-input-box"/>
            <label htmlFor="email" className="text-muted">Email</label>
            <input ref="email" type="email" id="email" name="email" className="form-control mb-2 registration-input-box"/>
            <label htmlFor="url" className="text-muted">Store URL</label>
            <input ref="site" type="url" id="url"name="url" className="form-control mb-2 registration-input-box"/>
            <button type="submit" className="btn btn-cta w-100 mt-3 text-uppercase">Get In Touch</button>
        </form>
      )
    }
    if(this.state.name === "wait"){
      return (
        <div className="text-center mt-5">
          <i className="ti-timer text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-3">Thank you, one of the team will be in touch shortly.</h6>
          <p className="mb-5">Check your inbox for next steps.</p>
          <p className="text-muted">Want to book a meeting now?</p>
          <button className="btn btn-custom"> book a meeting </button>
        </div>
      )
    }
    if(this.state.name === "error"){
      return (
        <div className="text-center mt-5">
          <i className="ti-flag text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-3">Thank you, one of the team will be in touch shortly.</h6>
          <p className="mb-5">Check your inbox for next steps.</p>
          <p className="text-muted">Want to book a meeting now?</p>
          <button className="btn btn-custom"> book a meeting </button>
        </div>
      )
    }
    if(this.state.name === "success"){
      return(
        <div className="text-center mt-5">
          <i className="ti-check text-custom" style={{fontSize:"1.8em"}}></i>
          <h6 className="mt-3 mb-3">Thank you, one of the team will be in touch shortly.</h6>
          <p className="mb-5">Check your inbox for next steps.</p>
          <p className="text-muted">Want to book a meeting now?</p>
          <button className="btn btn-custom"> book a meeting </button>
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
