import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Mainlogofooter from "/img/mainlogofooter.png"

function Footer() {
  return (
    <>

    <footer className="pt-2 pb-2 sm-pt-10px sm-pb-10px footer-dark bg-extra-medium-slate-blue"> 
            <div className="container">
                <div className="row justify-content-center">
                    {/* <!-- start footer column --> */}
                    <div className="col-lg-3 col-sm-6 last-paragraph-no-margin order-5 order-sm-4 order-lg-1 text-center">
                        <a href="index.html" className="footer-logo mb-6px d-block d-lg-inline-block"><img src={Mainlogofooter}  alt="footer logo"/></a>
                        <p className="w-90 sm-w-100 d-inline-block mb-6px text-left lh-20 fs-14">1#5-22, first floor,<br/> Road No: 2/A, <br/> Near Gokul plots Signal,<br/> KPHB Colony, Hyderabad.500085.</p>
                        
                    </div>
                    {/* <!-- end footer column -->
                    <!-- start footer column --> */}
                    <div className="col-5 col-lg-2 col-sm-4 md-mb-50px sm-mb-30px order-1 order-lg-2">
                        <span className="alt-font d-block text-white mb-5px">Company</span>
                        <ul>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/partners">Partner</NavLink></li>
                            <li><NavLink to="/careers">Careers</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* <!-- end footer column -->  
                    <!-- start footer column --> */}
                    <div className="col-7 col-lg-2 col-sm-4 md-mb-50px sm-mb-30px order-2 order-lg-3">
                        <span className="alt-font d-block text-white mb-5px">Services</span>
                        <ul>
                            <li><NavLink to="/commerical">Commerical</NavLink></li>
                            <li><NavLink to="/residential">Residential</NavLink></li>
                            <li><NavLink to="/renewable">Renewable-Energy</NavLink></li>
                           <li><NavLink to="/mining">Mining</NavLink></li>
                        </ul>
                    </div>
                    {/* <!-- end footer column -->
                    <!-- start footer column --> */}
                    <div className="col-5 col-lg-2 col-sm-4 md-mb-50px sm-mb-30px order-3 order-lg-4">
                        <span className="alt-font d-block text-white mb-5px">Social connect</span>
                        <ul>
                            <li><a href="javascript:valid(0)" target="_blank"><i className="feather icon-feather-facebook icon-very-small text-white me-12px" ></i> Facebook</a></li>
                            <li><a href="javascript:valid(0)" target="_blank"><i className="feather icon-feather-linkedin icon-very-small text-white me-12px" ></i> LinkedIn</a></li>
                            <li><a href="javascript:valid(0)" target="_blank"><i className="feather icon-feather-twitter icon-very-small text-white me-12px" ></i> Twitter</a></li>
                            <li><a href="javascript:valid(0)" target="_blank"><i className="feather icon-feather-instagram icon-very-small text-white me-12px" ></i> Instagram</a></li>
                        </ul>
                    </div>

                    {/* <div className="scroll-progress d-xxl-block visible" >
                        <a href="#" className="scroll-top" aria-label="scroll" >
                            <span className="scroll-text" >Scroll</span><span className="scroll-line" style="user-select: auto;"><span className="scroll-point" style={{height: "65.5621%"}}></span></span>
                        </a>
                    </div> */}

                    {/* <!-- end footer column -->
                    
                    <!-- start footer column --> */}
                    <div className="col-7 col-lg-3 col-sm-6 xs-mb-30px last-paragraph-no-margin order-4 order-sm-5 order-lg-5"> 
                        <span className="alt-font d-block text-white mb-5px">Location</span>
                        <div className="widget-content">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.394498257088!2d78.37973067578066!3d17.48867179987826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzE5LjIiTiA3OMKwMjInNTYuMyJF!5e0!3m2!1sen!2sin!4v1741335535345!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SST Zigane Location Map"
                            ></iframe>
                         </div>
                    </div>
                    {/* <!-- end footer column --> */}
                </div>
            </div> 

            <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center mt-5">
                    <span className="fs-15 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22">Copyright © 2026 | Powered by SSTzigane</span>
            </div>
        </footer>
        
        <div className="scroll-progress  d-xxl-block">
          <a href="#" className="scroll-top" aria-label="scroll">
            <span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
          </a>
        </div>
      

        <a id="wa-fab" href="#" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
             <i className="fab fa-whatsapp"></i>
        </a>        
    
    </>
  )
}

export default Footer