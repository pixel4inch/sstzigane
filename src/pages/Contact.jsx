import React from 'react'
import PageHeader from '../components/common/PageHeader'

function Contact() {
  return (
   <>
    <PageHeader pagetitle="Contact"/>
    <section id="down-section" className="overflow-hidden">
<div className="container">
<div className="row ps-2 pe-2 g-0 justify-content-center">

{/* <!-- LEFT INFO --> */}
<div className="col-lg-4 cover-background md-h-600px xs-h-400px">
<div className="d-flex align-items-center h-100">
<div className="bg-base-color p-12 h-100 text-left">

<h4 className="alt-font fw-600 text-white mb-8 p-3">Get In Touch</h4>e

<p className="text-white opacity-9 mb-2">
1#5-22, First Floor, Road No: 2/A, Near Gokul Plots Signal, KPHB Colony, Hyderabad - 500085
</p>

<p className="mb-2">
<i className="feather icon-feather-phone-call text-white me-7px"></i>
<a href="tel:+918885333539" className="text-white opacity-9">+91 88853 333539</a>
</p>

<p>
<i className="feather icon-feather-mail text-white me-7px"></i>
<a href="mailto:info@sstziganeindia.com" className="text-white opacity-9">shabari@sstziganeindia.com</a>
</p>

</div>
</div>
</div>s

{/* <!-- FORM --> */}
<div className="col-lg-6 offset-lg-1">
<div className="pt-5 contact-form-style-01">

<h4 className="alt-font fw-600 text-dark-gray mb-30px">
Feel free to reach via contact us form.
</h4>

<form id="contactForm" action="email-templates/contact-form.php" method="post">

<div className="position-relative form-group mb-20px">
    <span className="form-icon"><i className="bi bi-emoji-smile"></i></span>
<input type="text" name="name" className="form-control" placeholder="Your name*" required/>
</div>

<div className="position-relative form-group mb-20px">
    <span className="form-icon"><i className="bi bi-envelope"></i></span>
<input type="email" name="email" className="form-control" placeholder="Your email address*" required/>
</div>

<div className="position-relative form-group mb-20px">
     <span className="form-icon"><i className="bi bi-phone"></i></span>
<input type="tel" name="phone" className="form-control" placeholder="Phone Number*" required/>
</div>

<div className="position-relative form-group mb-20px">
     <span className="form-icon"><i className="bi bi-building"></i></span>
<input type="text" name="company" className="form-control" placeholder="Company*" required/>
</div>

<div className="position-relative form-group form-textarea">
    <span className="form-icon"><i className="bi bi-chat-square-dots"></i></span>
<textarea name="message" className="form-control" rows="3" placeholder="Your message*" required></textarea>
</div>

<button type="submit" className="btn btn-small btn-round-edge btn-dark-gray mt-20px">
Send message
</button>
{/* 
<!-- RESULT MESSAGE --> */}
<div className="form-results mt-20px d-none"></div>

</form>
</div>
</div>

</div>
</div>
</section>
    </>
  )
}

export default Contact