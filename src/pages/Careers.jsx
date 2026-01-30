import React from 'react'
import PageHeader from '../components/common/PageHeader'

import CareerImage from "../../public/img/career.jpg"

function Careers() {
  return (
     <>
    <PageHeader pagetitle="Careers"/>
      {/* <!-- start section --> */}
        <section id="down-section" className="overflow-hidden">
            <div className="container"> 
                <div className="row pe-2 ps-2 g-0 justify-content-center">
                  
                    <div className="col-lg-4 cover-background md-h-600px xs-h-400px" style={{ backgroundImage: `url(${CareerImage})` }}>
                    <div className="d-flex justify-content-lg-start align-items-center h-100 ">
                        
                        
                    </div>   
                </div>
                    <div className="col-lg-6 offset-lg-1">  
                        <div className="pt-5 md-pt-45px contact-form-style-01" >
                            <h4 className="d-inline-block alt-font fw-600 text-dark-gray ls-minus-1px mb-30px">Join Us</h4>
                            {/* <!-- start contact form --> */}
                            <form action="email-templates/contact-form.php" method="post">
                                <div className="position-relative form-group mb-20px">
                                    <span className="form-icon"><i className="bi bi-emoji-smile"></i></span>
                                    <input type="text" name="firstname" className="form-control required" placeholder="First Name*"/>
                                </div> 
                                <div className="position-relative form-group mb-20px">
                                    <span className="form-icon"><i className="bi bi-emoji-smile"></i></span>
                                    <input type="text" name="lastname" className="form-control required" placeholder="Last Name*"/>
                                </div>
                                <div className="position-relative form-group mb-20px">
                                    <span className="form-icon"><i className="bi bi-envelope"></i></span>
                                    <input type="email" name="email" className="form-control required" placeholder="Your email address*"/>
                                </div> 
                                  
                                <div className="position-relative form-group mb-20px">
                                    <span className="form-icon"><i className="bi bi-phone"></i></span>
                                    <input type="number" name="phoneno" className="form-control required" placeholder="Phone No*"/>
                                </div>

                                 <div className="position-relative form-group mb-0px">
                                    <span className="form-icon"><i className="bi bi-file-earmark-arrow pe-2 ps-2-up"></i></span>
                                    <input name="resume" type="file" id="resume" className="form-control" accept=".pdf,.doc,.docx"/>
                                </div>

                                <div className="position-relative form-group form-textarea">
                                    <button className="btn btn-small btn-round-edge btn-dark-gray btn-box-shadow mt-20px m-auto submit" type="submit">Apply</button>
                                    <div className="form-results mt-20px d-none"></div>
                                </div>
                                
                            </form>
                            {/* <!-- end contact form --> */}
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        {/* <!-- end section -->  */}
    </>
  )
}

export default Careers