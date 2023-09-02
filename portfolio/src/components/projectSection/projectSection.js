// import React from 'react';
// import PropTypes from 'prop-types';
import  './projectSection.css';
import AppProject from '../appProject/appProject';
import projects from '../../assets/data/projects.json';

const ProjectSection = () => (
  <div className='bg-white dark:bg-appBackground mt-24' id='Projects'>
    <h1 className='text-5xl font-extrabold dark:text-appBlue mb-24'>Projects</h1>

    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 flex justify-center">

    {Object.keys(projects["projects"]).map(key =>  <AppProject 
          name={projects["projects"][key].name} 
          stack={projects["projects"][key].stack} 
          type={projects["projects"][key].type} 
          image={projects["projects"][key].image}
          icon={projects["projects"][key].icon}
          link={projects["projects"][key].link}
          key={key} />)}

     
    </div>

  </div>
);

ProjectSection.propTypes = {};

ProjectSection.defaultProps = {};

export default ProjectSection;
