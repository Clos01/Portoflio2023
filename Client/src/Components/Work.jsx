import React from 'react';
import Carlos from '../Images/imgcarlos.JPG';

const ProjectCard = ({ image, subtitle, demoLink, codeLink, description }) => (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative border rounded-lg  shadow-lg"> {/* Add shadow */}
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center  border rounded-lg "
          src={image}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out"> {/* Add transition */}
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {subtitle}
          </h2>
          <p className="leading-relaxed">
            {description}
          </p>
          <div className="pt-8 text-center">
            <a href={demoLink}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1172b6] text-white text-lg hover:bg-[#0a5d8a] transition duration-300 ease-in-out"> {/* Add hover effect */}
                Demo
              </button>
            </a>
            <a href={codeLink}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1172b6] text-white text-lg hover:bg-[#0a5d8a] transition duration-300 ease-in-out"> {/* Add hover effect */}
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
function Work() {
  return (
<section className="text-gray-600 body-font  projects-container mt-[2rem]">
    <div className=" px-5 py-24 mx-auto projects-section">
      <div className="flex flex-col text-center w-full mb-10 mt-[4rem]">
        <h1 className="sm:text-3xl font-playfair  lg:text-5xl  mb-4 text-gray-900">
  Work
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-xl">
     Here are acouple of the projects i have built 
        </p>
      </div>
      <div className="flex flex-wrap ">
      <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
          <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
          <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
          <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
          <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
             <ProjectCard
          image={Carlos}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
    
                </div>
      </div>
  </section>
  );
}

export default Work;
