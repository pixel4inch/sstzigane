import React from 'react'


import PageHeader from '../components/common/PageHeader'
import PartnerData from "../assets/data/partnerdata.json"

import Atropos from 'atropos/react';



function Partner() {
  return (
    <>
    
  <PageHeader pagetitle="PartnersPartners & Clients Trusted Us"/>



 {/* <!-- start section --> */}
        <section className="ps-12 pe-12 xl-ps-10 xl-pe-10 lg-ps-3 lg-pe-3 half-section" id="down-section">
            <div className="container-fluid">
                 <div className="row justify-content-center mb-1">
                    <div className="col-xl-7 col-lg-9 col-md-3 text-center">
                       <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px mb-2">Our Partners</h4> 
                    </div>
                </div>

                 <div className="mb-5 row row-cols-1 row-cols-xl-6 row-cols-md-4  row-cols-sm-2 clients-style-06 d-flex justify-content-center gap-2" >
                    {/* <!-- start client item --> */}
                    {PartnerData.partners.map((logo, index) => (
                      <Atropos  key={index} className="my-atropos atropos col text-center p-1 border shadow-sm" data-wow-duration="2s" data-wow-delay="5s">
                        <img src={`../../public/img/clients-logo/partners/${logo}`} className="w-150px" alt={logo.replace(/\.[^/.]+$/, '')} title={logo.replace(/\.[^/.]+$/, '')} />
                      </Atropos>
                    ))}


                    {/* <!-- end client item --> */}
                </div>

               <div className="row justify-content-center mb-2">
                    <div className="col-xl-7 col-lg-9 col-md-3 text-center">
                        <h4 className="alt-font text-dark-gray fw-600 ls-minus-1px mb-2" >Our Clients</h4> 
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-xl-5  row-cols-md-4  row-cols-sm-2 clients-style-06 d-flex justify-content-center gap-2" >
                    
                     {PartnerData.clients.map((logo, index) => (
                      <Atropos  key={index} className="my-atropos atropos col text-center p-1 border shadow-sm" data-wow-duration="2s" data-wow-delay="5s">
                        <img src={`../../public/img/clients-logo/${logo}`} className="w-150px" alt={logo.replace(/\.[^/.]+$/, '')} title={logo.replace(/\.[^/.]+$/, '')} />
                     </Atropos>
                    ))}
                    
                    
                    
                   
                </div>
            </div>
        </section>
        {/* <!-- end section --> */}
    
    </>

  )
}

export default Partner