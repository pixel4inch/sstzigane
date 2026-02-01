import React from 'react'

// images
import BackdropImage from "../../public/img/backdrop.jpg"
import Commercial from"../../public/img/commercial.jpg"
import Residental from"../../public/img/residental.jpg"
import Renewableenergy from"../../public/img/renewableenergy.jpg"
import Mining from"../../public/img/mining.jpg"
import profile1 from"../../public/img/750x800.jpg"
import profile2 from"../../public/img/638x638.jpg"

// Components
import FancyText from '../components/common/FancyText'

// Data
import PartnerData from '../assets/data/partnerdata.json'

// Dependiences
import Atropos from 'atropos/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, FreeMode } from 'swiper/modules'
import Video from '../../public/img/SsTziganeIntro.mp4'
import Progressbar from '../components/Snipts/CircularProgressbar'



function Home() {


  
  return (
   <>


<section className="pb-8 md-pb-17 xs-pb-28">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 md-mb-50px text-center text-lg-start" >
                        <span className="bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px">About business</span>
                        <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px mb-20px sm-w-85 xs-w-100 mx-auto">SS Tzigane Is  An Emerging Engineering Service</h4>
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

                        <div className="d-flex flex-row justify-content-center justify-content-lg-start align-items-center mt-35px">
                            <div className="w-120px me-25px flex-shrink-0">
                                <div className="chart-percent">
                                    <Progressbar  value={97} />
                                </div>
                            </div>
                            <div className="text-start">
                                <span className="fs-20 lh-28 text-dark-gray alt-font fw-500 d-inline-block w-70 xs-w-100">Client Satisfaction Across  <span className="text-decoration-line-bottom-medium fw-600 text-base-color">All Projects.</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5  position-relative">
                        <div className="text-end w-80 md-w-75 ms-auto" >
                            <img src={profile1} alt="profile1" className="border-radius-5px"/>
                        </div>
                        <div className="w-60 md-w-50 xs-w-55 overflow-hidden position-absolute left-15px bottom-minus-50px" >
                            <img src={profile2} alt="profile2" className="border-radius-5px box-shadow-quadruple-large" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end section --> */}



   {/* <!-- start section --> */}
        <section className="bg-solitude-blue">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-xl-12 col-lg-12 col-md-10 text-center">
                        <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px" >Transforming Spaces</h4>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px">
                        {/* <!-- start tab navigation --> */}
                        <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                            <li className="nav-item"><a data-bs-toggle="tab" href="#tab_four1" className="nav-link d-flex align-items-center active"><i className="fa-solid fa-hospital icon-extra-medium text-dark-gray"></i><span>Hospitals </span></a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab_four2"><i className="fa-solid fa-pen-ruler icon-extra-medium text-dark-gray"></i><span>Commercial </span></a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab_four3"><i className="fa-solid fa-building icon-extra-medium text-dark-gray"></i><span>Residential</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab_four4"><i className="fa-solid fa-briefcase-medical icon-extra-medium text-dark-gray"></i><span>Pharma</span></a></li>
                            
                        </ul>
                        {/* <!-- end tab navigation --> */}
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="tab-content">
                            {/* <!-- start tab content --> */}
                            <div className="tab-pane fade in active show" id="tab_four1">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src={Commercial} alt="" className="border-radius-6px w-100" />
                                    </div>
                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start"><span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0"><i className="fa-solid fa-hospital fs-2"></i></span>Hospitals  </span>
                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px d-none"><span className="fw-600">Smart Solutions for Commercial Infrastructure</span></h5>
                                        <p>Fire and life safety in hospital buildings is essential to protect patients, visitors, staff, and critical medical infrastructure. Hospital environments require advanced safety systems, strict compliance, and well-planned emergency procedures due to continuous operations and the presence of vulnerable occupants.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab content -->
                            <!-- start tab content --> */}
                            <div className="tab-pane fade in" id="tab_four2">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src={Residental} alt="" className="border-radius-6px w-100" />
                                    </div>
                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-22 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start"><span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0"><i className="fa-solid fa-pen-ruler fs-18"></i></span>Commercial </span>
                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px d-none"><span className="fw-600">Advanced Engineering for Modern Living</span></h5>
                                        <p>Fire and life safety is a critical aspect of commercial building management. Our Fire & Life Safety Services are designed to protect occupants, visitors, assets, and business continuity by ensuring safe building design, reliable systems, and full regulatory compliance.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab content -->
                            <!-- start tab content --> */}
                            <div className="tab-pane fade in" id="tab_four3">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src={Renewableenergy} alt="" className="border-radius-6px w-100" />
                                    </div>
                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start"><span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0"><i className="fa-solid fa-building f-22"></i></span>Residential</span>
                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px d-none"><span className="fw-600">Powering the Future with Clean Energy</span></h5>
                                        <p>Fire and life safety in residential buildings is essential to protect lives, homes, and property. Our Fire & Life Safety Services are designed to create a safe living environment for residents through effective prevention, reliable safety systems, and emergency preparedness.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab content -->
                            <!-- start tab content --> */}
                            <div className="tab-pane fade in" id="tab_four4">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-xl-1 sm-mb-30px">
                                        <img src={Mining} alt="" className="border-radius-6px w-100" />
                                    </div>
                                    <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <span className="fs-18 fw-600 text-base-color mb-25px d-flex align-items-center justify-content-center justify-content-md-start"><span className="text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0"><i className="fa-solid fa-briefcase-medical fs-22"></i></span>Pharma</span>
                                        <h5 className="alt-font text-dark-gray mb-20px fw-500 ls-minus-1px d-none"><span className="fw-600">Engineering Reliability for Mining Operations</span></h5>
                                        <p>Pharmaceutical buildings present unique fire and life safety challenges due to the presence of flammable chemicals, solvents, pressurized gases, cleanrooms, and critical production processes. Our Fire & Life Safety Services are designed to protect personnel, facilities, and high-value assets while ensuring uninterrupted operations and strict regulatory compliance.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab content --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end section --> */}


    {/* <!-- start section --> */}
        <section className="border-bottom border-color-extra-medium-gray pt-40px pb-40px overflow-hidden">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center align-items-start">
                   
                    <div className="col icon-with-text-style-08 md-mb-30px text-center text-sm-start p-3">
                        <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                            
                            <div className="feature-box-content">
                                <span className="mb-3 text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0" ><i className="fa-solid fa-eye fs-18 text-base-color" ></i></span>
                                <span className="fs-22 fw-600 text-base-color mb-25px">Vision</span>
                                <p>We aim to provide solutions and services to our customers,  which are advance on date and to keep our customers be aid with technology up gradation from time-to-time. In order to make it possible we continues to search for the best products, technology and advance safety methods project delivery.
</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end features box item -->
                    <!-- start features box item --> */}
                    <div className="col icon-with-text-style-08 md-mb-30px text-center text-sm-start p-3">
                        <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle ">
                            
                            <div className="feature-box-content">
                                <span className="mb-3 text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0" ><i className="fa-solid fa-pen-ruler fs-18 text-base-color" ></i></span>

                                <span className="fs-22 fw-600 text-base-color mb-25px">Misson</span>
                                <p>Grow geographically in Pan-India and make our brand visible across the country for the services we deliver and keep our foot print alive all the time with the revenue generation to the organization
</p>
                            
                            </div>
                        </div>
                    </div>
                    {/* <!-- end features box item -->
                    <!-- start features box item --> */}
                    <div className="col icon-with-text-style-08 xs-mb-30px text-center text-sm-start p-3">
                        <div className="feature-box feature-box-left-icon-middle d-inline-flex align-middle">
                            
                            <div className="feature-box-content">
                                <span className="mb-3 text-center w-60px h-60px d-flex justify-content-center align-items-center rounded-circle bg-white box-shadow-medium-bottom align-middle me-15px flex-shrink-0" ><i className="fa-solid fa-pen-ruler fs-18 text-base-color" ></i></span>
                                <span className="fs-22 fw-600 text-base-color mb-25px">Values</span>
                                <p>Our values reflects in the self image of our team, where SS Tzigane  is a place to fulfill their dreams, also which in turns keeps our customer happy.
</p>
                           
                            </div>
                        </div>
                    </div>
                    {/* <!-- end features box item --> */}
                    
                </div>
            </div>
        </section>

   {/* <!-- start section --> */}
        <section className="overflow-hidden bg-solitude-blue">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="border-radius-6px h-500px md-h-450px sm-h-350px d-flex align-items-end justify-content-center overflow-hidden cover-background skrollr-zoom pb-9 xs-pb-12" style={{backgroundImage: `url(${BackdropImage})`, backgroundSize:"cover", backgroundPosition:"0px -150px" }}>
                            <div className="opacity-medium bg-gradient-dark-transparent"></div>
                            <div className="row justify-content-center">
                                <div className="col-11 col-md-12 position-relative z-index-1 text-center text-lg-start md-mb-35px sm-mb-25px">
                                     <h4 className="alt-font text-white mb-0 fw-300 fancy-text-style-4">We deliver innovative solutions for  <span><FancyText/></span> </h4>
                                </div>
                                <div className="col-xl-5 col-lg-3 position-relative z-index-1 text-center animation-zoom mt-3">
                                    <a data-bs-toggle="modal" data-bs-target="#videomodel" className="position-relative d-inline-block text-center border border-2 border-color-transparent-white-very-light rounded-circle video-icon-box video-icon-large popup-youtube">
                                        <span>
                                            <span className="video-icon">
                                                <i className="bi bi-play-fill text-white fs-22"></i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end section --> */}



{/* <!-- start section --> */}
        <section className="position-relative overflow-hidden sm-pb-20px"> 
            <div className="separator-line-9px bg-base-color position-absolute top-0px right-0px" ></div>
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <div className="col-xl-7 col-lg-9 col-md-10 text-center">
                        <span className="bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px" >Our Clients</span>
                        <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px" >SS Tzigane Developers</h4>
                    </div>
                </div>

                  <div className="d-flex justify-content-center g-10px align-items-center mb-3" >
                               <Swiper
                                modules={[Autoplay, FreeMode]}
                                freeMode={{
                                  enabled: true,
                                  momentum: false
                                }}
                                autoplay={{
                                  delay: 0,
                                  disableOnInteraction: false
                                }}
                               loop={true}
                                speed={3000} // 🔥 controls smoothness
                                spaceBetween={40}
                                breakpoints={{
                                  0: { slidesPerView: 1.5 },
                                  576: { slidesPerView: 2.5 },
                                  768: { slidesPerView: 3.5 },
                                  992: { slidesPerView: 4.5 },
                                  1200: { slidesPerView: 5.5 }
                                }}
                                className="partners-swiper"
    >
      {PartnerData.clients.map((logo, index) => (
        <div className="col swiper text-center feather-shadow swiper-initialized swiper-horizontal">
        <SwiperSlide key={index} className='swiper-wrapper marquee-slide'>
          
            <img
              src={`../../public/img/clients-logo/${logo}`}
              alt={logo.split('/').pop().replace(/\.[^/.]+$/, '')}
              className="partner-logo "
              loading="lazy"
            />
          
        </SwiperSlide>
        </div>
      ))}
    </Swiper>
                    </div>


                
                 
                <div className="row justify-content-center mb-2 mt-3">
                    <div className="col-xl-7 col-lg-9 col-md-10 text-center">
                        <span className="bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-base-color lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px" >Our Partner</span>
                        <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px" >SS Tzigane Partner</h4>
                    </div>

                    <div className="d-flex justify-content-center g-10px align-items-center" style={{gap:"10px"}} >
                                {/* <!-- start client item --> */}
                                {PartnerData.partners.map((logo, index) => (
                                  <Atropos  key={index} className="my-atropos atropos text-center p-1 border shadow-sm" data-wow-duration="2s" data-wow-delay="5s">
                                    <img src={`../../public/img/clients-logo/partners/${logo}`} className="w-150px" alt={logo.replace(/\.[^/.]+$/, '')} title={logo.replace(/\.[^/.]+$/, '')} />
                                  </Atropos>
                                ))}
                      </div>
                   </div>             

            </div>
        </section>
        {/* <!-- end section --> */}

       {/* <!-- start section --> */}
        <section className="bg-dark-slate-blue pt-4 pb-4 lg-pt-6 lg-pb-6 position-relative" data-parallax-background-ratio="0.5" style={{backgroundImage: `url(${BackdropImage})`, backgroundSize:"cover", backgroundPosition:"0px -150px" }}>
            <div className="opacity-medium bg-dark-slate-blue"></div>
            <div className="container z-index-1 position-relative"> 
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 text-center">
                        <h5 className="alt-font text-white mb-0 fw-300 fancy-text-style-4">We deliver innovative solutions for  <span className="fw-600 text-base-color" ><FancyText/></span>
                           
                        </h5> 
                    </div>
                </div>
            </div>
        </section>

        <div className="modal fade " id="videomodel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    
                    <div className="modal-body">
                         <button type="button" className="btn-close position-absolute right-20px bg-white box-shadow-extra-large rounded-circle p-1 fs-14 " style={{zIndex:"99"}} data-bs-dismiss="modal" aria-label="Close"></button>
                       <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-100 h-300px object-fit-cover"
                              style={{ marginTop: '0px' }}
                            >
                              <source src={Video} type="video/mp4" />
                            </video>
                    </div>
                   
                    </div>
                </div>
        </div>
   </>
  )
}

export default Home