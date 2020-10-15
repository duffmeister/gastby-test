import React from "react"

const Contact = () => (

  <section class="section " id="contact">
      <div class="container">
          <div class="row justify-content-center text-center">
              <div class="col-lg-12">
                  <i class="ti-email title-icon text-muted"></i>
                  <h2>Get In <span class="font-weight-bold">Touch</span></h2>
                  <p class="text-muted mt-3 title-subtitle mx-auto">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4">
                  <div class="mt-4 pt-4">
                      <p class="text-muted mt-4"> <span class="font-weight-bold ">Customer care:</span><br/> <span class="d-block mt-2">+1 234 56 7894</span></p>
                      <p class="text-muted mt-4"><span class="font-weight-bold ">Office Address:</span><br/> <span class="d-block mt-2">4461 Cedar Street Moro, AR 72368</span></p>
                      <p class="text-muted mt-4"><span class="font-weight-bold ">Email Address:</span><br/> <span class="d-block mt-2">info@gmail.com</span></p>
                      <p class="text-muted mt-4"><span class="font-weight-bold ">Office Time:</span><br/> <span class="d-block mt-2">9:00AM To 6:00PM</span></p>
                  </div>
              </div>
              <div class="col-lg-8">
                  <div class="custom-form mt-4 pt-4">
                      <div id="message"></div>
                      <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                          <div class="row">
                              <div class="col-lg-6">
                                  <div class="form-group mt-2">
                                      <input name="name" id="name" type="text" class="form-control" placeholder="Your name*" />
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="form-group mt-2">
                                      <input name="email" id="email" type="email" class="form-control" placeholder="Your email*" />
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="form-group mt-2">
                                      <input type="text" class="form-control" id="subject" placeholder="Your Subject.." />
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="form-group mt-2">
                                      <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-12 text-right">
                                  <input type="submit" id="submit" name="send" class="submitBnt btn btn-custom" value="Send Message"/>
                                  <div id="simple-msg"></div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </section>
)

export default Contact
