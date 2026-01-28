import Video from '../../assets/img/SsTziganeIntro.mp4'

function PageHeader({ pagetitle }) {
  return (
    <section
      className="page-title-big-typography bg-dark-gray ipad-top-space-margin position-relative overflow-hidden"
      data-parallax-background-ratio="0.5"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ marginTop: '0px' }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="opacity-medium bg-dark-slate-blue position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Content */}
      <div className="container position-relative">
        <div className="row align-items-center justify-content-center extra-tovery-small-screen">
          <div className="col-12 position-relative text-center page-title-extra-large">
            <h3 className="m-auto text-white text-shadow-double-large fw-500 fs-22px ls-2px text-uppercase">
              {pagetitle}
            </h3>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default PageHeader
