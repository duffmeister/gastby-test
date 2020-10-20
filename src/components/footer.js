import React from "react"

const Footer = () => (

    <section className="section footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <ul className="list-inline social mb-0">
                            <li className="list-inline-item"><a href="https://" className="social-icon text-muted"><i className="ti-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="social-icon text-muted"><i className="ti-twitter-alt"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="social-icon text-muted"><i className="ti-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-terms">
                        <ul className="mb-0 list-inline text-center mt-4 pt-2">
                            <li className="list-inline-item"><a href="#" className="text-muted">Terms & Condition</a></li>
                            <li className="list-inline-item"><a href="#" className="text-muted">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#" className="text-muted">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="mt-4 pt-2 text-center">
                        <p className="copy-rights text-muted mb-0"><script>document.write(new Date().getFullYear())</script> © Managed Commerce Inc. a Delaware Corporation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export default Footer
