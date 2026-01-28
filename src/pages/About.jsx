import React from 'react'
import { useEffect, useRef } from 'react'
import Atropos from 'atropos'


import PageHeader from '../components/common/PageHeader'
import Founder from "../assets/img/Founder.png"
import image01 from "../assets/img/about/image01.jpg"
function About() {

    


  return (
    <>
    <PageHeader pagetitle="ABOUT"/>
    
     {/* <!-- start section --> */}
        <section id="down-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-10 position-relative z-index-1 md-mb-40px">
                        <div className="atropos my-atropos" ref={atroposRef}>
                            <div className="atropos-scale" >
                                <div className="atropos-rotate">
                                    <div className="atropos-inner">
                                        <div data-atropos-offset="3">
                                            <img src={image01} className="border-radius-6px w-100" alt="image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute-middle-right md-absolute-middle-center right-minus-45px md-right-auto d-inline-block text-center z-index-9">
                            <a href="/" className="bg-white box-shadow-extra-large rounded-circle video-icon-box video-icon-extra-large popup-youtube d-inline-block" data-anime='{ "translate": [0, 0], "scale": [0,1], "duration": 1000, "delay": 300, "staggervalue": 300, "easing": "easeOutBack" }'>
                                <span>
                                    <span className="video-icon bg-white">
                                        <i className="fa-solid fa-play text-base-color"></i>
                                        <span className="video-icon-sonar">
                                            <span className="video-icon-sonar-bfr bg-base-color opacity-9"></span>
                                        </span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7  col-md-9 ps-6 text-center text-lg-start lg-ps-15px" >
                        <span className="bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">Company Profile</span>
                        <h4 className="fw-600 text-dark-gray ls-minus-2px alt-font sm-w-80 xs-w-100 mx-auto sm-mb-20px">SS Tzigane India Pvt. Ltd.</h4>
                        <p className="mb-0">SS Tzigane India Pvt. Ltd. is an emerging engineering services provider catering to the buildings, facilities, and construction industry, with a strong focus on automation-driven installations and operations. Founded by an experienced industry professional, the company delivers reliable, compliant, and future-ready solutions that enhance safety, efficiency, and operational control.
</p> 
                        <p className="mb-0"> SS Tzigane offers a comprehensive portfolio of integrated systems, including:</p>

                        <ul className="list-style-04  fw-500">
                        <li className="mb-1">Building Management Systems (BMS)</li>
                        <li className="mb-1">Fire Alarm and Life Safety Systems</li>

                        <li className="mb-1">CCTV Surveillance Systems</li>

                        <li className="mb-1">Access Control Systems</li>
                        <li className="mb-1">Fire Suppression Systems</li>
                        <li className="mb-1">Electrical Systems</li>

                        </ul>
                     </div> 
                </div> 

                <div className="row align-items-center justify-content-center mt-1 ps-0 sm-mt-1px lg-ps-0 pe-0 lg-pe-0">
<p className="mb-1">The company specializes in customized system design and seamless integration with other building services, enabling centralized monitoring, predictive maintenance, and improved asset management. By leveraging automation and cloud-based technologies, SS Tzigane helps clients achieve higher operational visibility while reducing risk and downtime.</p>
<p className="mb-1">Currently operating across South India, SS Tzigane has built a strong reputation for delivering end-to-end project execution, from design and engineering to installation, commissioning, and long-term support.
</p>
<p className="mb-1">At SS Tzigane, we understand that security and safety requirements vary across facilities and industries. Our expert team works closely with clients to assess risks, recommend the most suitable technologies, and tailor solutions to meet specific operational and regulatory needs.
</p>
<p className="mb-1">Over the years, SS Tzigane has become a trusted name in fire safety and integrated building systems, serving a diverse range of clients—from residential developments to large industrial and commercial facilities. Our solutions are driven by a commitment to quality, compliance, reliability, and long-term performance.</p>
 <p className="mb-1">To bring all building and facility services onto a single cloud-based platform, enabling facility management teams to focus on their core functional activities while SS Tzigane ensures safety, automation, and operational excellence.</p>               </div>


                <div className="row align-items-center justify-content-center mt-7 ps-5 sm-mt-35px lg-ps-0 pe-5 lg-pe-0">
                    <div className="col-md-6 col-sm-8 md-mb-35px">
                        <div className="row align-items-center justify-content-center" >
                            <div className="col-auto"><span className="alt-font text-dark-gray fw-600 fs-130 lg-fs-110 ls-minus-7px">7</span></div>
                            <div className="col-5 col-xl-4 col-lg-5 col-sm-6"><h6 className="fw-500 text-dark-gray alt-font m-0 ls-minus-2px">Years experience working.</h6></div>
                            <div className="col-3 col-xl-3 col-md-2 text-center d-none d-lg-inline-block"><span className="fw-400 fs-110 text-base-color position-relative top-minus-10px">|</span></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 overflow-hidden">
                        <div className="row align-items-center" >
                            <div className="col-sm-6 last-paragraph-no-margin text-center xs-mb-35px">
                                <h2 className="fw-700 text-dark-gray mb-5px alt-font">50+</h2>
                                <span className="fs-18 alt-font ls-minus-05px fw-500 text-dark-gray">Project completed</span>
                                
                            </div>
                            <div className="col-sm-6 last-paragraph-no-margin text-center">
                                <h2 className="fw-700 text-dark-gray mb-5px alt-font">50</h2>
                                <span className="fs-18 alt-font ls-minus-05px fw-500 text-dark-gray">Satisfied customer</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end section --> 
        <!-- start section --> */}
        <section className="bg-solitude-blue d-none">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-xl-5 col-lg-6 col-sm-8 text-center" >
                        <span className="bg-white text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">Phased strategy</span>
                        <h3 className="alt-font text-dark-gray fw-600 ls-minus-2px">SS Tzigane Development Model</h3>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    {/* <!-- start fancy text box item --> */}
                    <div className="col-lg-6 col-md-8 fancy-text-box-style-02 mb-30px">
                        <div className="feature-box  flex-column feature-box-left-icon-middle h-100 bg-white hover-box dark-hover border-radius-6px ps-4 pe-4 pt-9 pb-9 box-shadow-extra-large box-shadow-extra-large-hover overflow-hidden">
                            <div className="feature-box-icon  ms-40px me-40px lg-ms-15px lg-me-15px">
                                <h6 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-3">The Buy Phase</h6>
                            </div>
                            <div className="feature-box-content  ps-20px pe-20px lg-ps-15px lg-pe-15px last-paragraph-no-margin">
                                <p className="text-light-opacity lh-22">In this phase, Ameri actively seeks to purchase land in prime locations. When selecting land, the development team considers a number of factors, including its location, whether it has scenic views, its proximity to amenities, the infrastructure availability and its potential investment appreciation opportunities.</p>
                            </div>
                            <div className="feature-box-overlay bg-base-color"></div>
                        </div>
                    </div>
                    {/* <!-- end fancy text box item -->
                    <!-- start fancy text box item --> */}
                    <div className="col-lg-6 col-md-8 fancy-text-box-style-02 mb-30px">
                        <div className="feature-box flex-column feature-box-left-icon-middle h-100 bg-white hover-box dark-hover border-radius-6px ps-4 pe-4 pt-9 pb-9 box-shadow-extra-large box-shadow-extra-large-hover overflow-hidden">
                            <div className="feature-box-icon ms-40px me-40px lg-ms-15px lg-me-15px">
                                <h6 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-3">The Design Phase</h6>
                            </div>
                            <div className="feature-box-content flex-column  ps-20px pe-20px lg-ps-15px lg-pe-15px last-paragraph-no-margin">
                                <p className="text-light-opacity lh-22">Once the Company has secured development rights and has contracted to purchase land for a particular development, the design phase begins. The objective of this phase is to create a development design that represents Ameri luxury brand and optimizes the commercial viability of the development.</p>
                            </div>
                            <div className="feature-box-overlay bg-base-color"></div>
                        </div>
                    </div>
                    {/* <!-- end fancy text box item -->
                    <!-- start fancy text box item --> */}
                    <div className="col-lg-6 col-md-8 fancy-text-box-style-02 md-mb-30px">
                        <div className="feature-box flex-column feature-box-left-icon-middle h-100 bg-white hover-box dark-hover border-radius-6px ps-4 pe-4 pt-9 pb-9 box-shadow-extra-large box-shadow-extra-large-hover overflow-hidden">
                            <div className="feature-box-icon  ms-40px me-40px lg-ms-15px lg-me-15px">
                                <h6 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-3">The Build Phase</h6>
                            </div>
                            <div className="feature-box-content  ps-20px pe-20px lg-ps-15px lg-pe-15px last-paragraph-no-margin">
                               
                                <p className="text-light-opacity lh-22">In the ‘Build’ phase of the Company’s business model, construction of high quality is done and the Company’s project execution and management relies on maintaining a highly qualified team of internal engineers, architects and design professionals, who are intensely involved with the entire design and construction process.</p>
                            </div>
                            <div className="feature-box-overlay bg-base-color"></div>
                        </div>
                    </div>
                    {/* <!-- end fancy text box item -->
                    <!-- start fancy text box item --> */}
                    <div className="col-lg-6 col-md-8 fancy-text-box-style-02">
                        <div className="feature-box flex-column feature-box-left-icon-middle h-100 bg-white hover-box dark-hover border-radius-6px ps-4 pe-4 pt-9 pb-9 box-shadow-extra-large box-shadow-extra-large-hover overflow-hidden">
                            <div className="feature-box-icon ms-40px me-40px lg-ms-15px lg-me-15px">
                                <h6 className="alt-font text-dark-gray fw-700 ls-minus-1px mb-3 text-left">The Sell Phase</h6>
                            </div>
                            <div className="feature-box-content  ps-20px pe-20px lg-ps-15px lg-pe-15px last-paragraph-no-margin">
                               
                                <p className="text-light-opacity lh-22">This is the final phase of the Company’s business model. Depending on the type of development, the final phase is either the ‘Sell’ phase. During phase, Ameri signs contracts with the Sell.</p>
                            </div>
                            <div className="feature-box-overlay bg-base-color"></div>
                        </div>
                    </div>
                    {/* <!-- end fancy text box item --> */}
                </div>
            </div>
        </section>
        {/* <!-- end section -->
        <!-- start section --> */}
        <section className="pb-8 md-pb-17 xs-pb-28 bg-solitude-blue">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                     <div className="col-xl-5 col-lg-5  position-relative">
                        <div className="text-end w-80 md-w-75 ms-auto" >
                            <img src={Founder} alt="Founder" className="border-radius-5px"/>
                        </div>
                      </div>
                                      
                    <div className="col-xl-6 col-lg-6 col-md-12 md-mb-50px text-center text-lg-start" >
                        <span className="d-none bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">About business</span>
                       
                       <p className="mb-2">Mr. Putta Sabarinath is a seasoned professional with over 12 years of experience in the safety, security, and building services engineering industry. Having built a strong foundation while working with leading corporate organizations, he transitioned into entrepreneurship with a clear vision to deliver high-quality, integrated engineering solutions.
</p>                   <p className="mb-2">In 2019, he joined Wetech Engineering Services as Executive Director, followed by the establishment of SS Tzigane India Pvt. Ltd. in 2022, further expanding his footprint in the building automation, safety, and security domain. Under his leadership, the organization has successfully executed multiple commercial, healthcare, pharmaceutical, and industrial projects across South India.</p>
                    <p className="mb-2">Driven by a commitment to technical excellence, reliable execution, and customer satisfaction, he focuses on delivering future-ready and integrated solutions that align with evolving industry standards. His hands-on leadership style, deep technical expertise, and emphasis on long-term partnerships continue to steer the company’s growth and operational excellence.</p>
                        
                        
                    </div>
                  
                </div>
            </div>
        </section>


    </>
    
  )
}

export default About