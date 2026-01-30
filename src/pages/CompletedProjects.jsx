import React from 'react'
import ProjectsData from "../assets/data/projectsdata.json"
import PageHeader from '../components/common/PageHeader'
import ProjectsCard from '../components/common/projectsCard'

function CompletedProjects() {
  return (
   <>
   <PageHeader pagetitle="Completed Projects"/>


    <section  className="bg-midnight-blue background-position-left-bottom background-no-repeat sm-background-image-none" >
            <div  className="container">

                    <h4  className="alt-font fs-26 text-dark-gray fw-600 ls-minus-1px mb-20px sm-w-85 xs-w-100 mx-auto" >List of Completed Projects</h4>
                
                       <div  className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center g-2px">
                            
                         {ProjectsData.completedgoing.map((data, index) => (
                                <ProjectsCard
                                    key={index}
                                    img={`../../public/img/projects/${data.imgpath}`}
                                    title={data.Projects}
                                    service={data.service}
                                    city={data.city}
                                    state={data.state}
                                />
                            ))}

                       </div>
                    
            </div>
    </section>


   </>
  )
}

export default CompletedProjects