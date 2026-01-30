import Atropos from 'atropos/react'
import 'atropos/css'

const ProjectsCard = ({ img, title, service, city, state }) => {
  return (
   
       <div className="col text-center team-style-05 md-mb-50px bg-white box-shadow-extra-large p-1">
                <div className="position-relative">
                  <img
                    className="border-radius-4px"
                    src={img}
                    alt={title}
                  />

                  <div className="w-100 h-100 d-flex flex-column justify-content-end align-items-center p-10px team-content bg-base-color-transparent border-radius-4px">
                  <div className="text-white w-90 md-w-90 absolute-middle-center opacity-9" style={{zIndex:"999"}}>
                    <span className="fs-20 text-white fw-700">
                      {title}
                    </span>

                    <div className="d-flex flex-column justify-content-left">
                      <div
                        className="w-100 d-flex"
                        style={{ justifyContent: 'flex-start', alignItems: 'baseline' }}
                      >
                        <p className="mb-1 lh-20 text-start fs-12px">
                          <span className="fw-600 ">Services:</span> {service}
                        </p>
                      </div>

                      <div
                        className="w-100 d-flex"
                        style={{ justifyContent: 'flex-start', alignItems: 'baseline' }}
                      >
                        <p className="mb-1 lh-20 text-start fs-12px">
                          <span className="fw-600 ">Location:</span> {city}, {state}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

      
              </div>
      </div>
  
  )
}

export default ProjectsCard
