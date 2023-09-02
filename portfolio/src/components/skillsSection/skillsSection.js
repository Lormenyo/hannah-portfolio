// import React from 'react';
// import PropTypes from 'prop-types';
import './skillsSection.css';
import uniqid from 'uniqid'


const skills = [
  'Flutter',
  'Dart',
  'Python',
  'Java 8',
  'Nodejs',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Angular',
  'Material UI',
  'Git',
  'Java Spring Boot',
  'Microservices',
  'AWS',
  'Heroku',
  'Flask'
]

const SkillsSection = () => (
  <div className='bg-white dark:bg-appBackground mt-24' id='Skills'>
    <h1 className='text-5xl font-extrabold text-appBackground dark:text-appBlue mb-16'>Skills</h1>

    <div>
    <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item text-white bg-appAltBg hover:bg-appBlue focus:outline-none focus:ring-4 focus:ring-appGray font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-appAltBg dark:hover:bg-appBlue dark:hover:text-appBackground dark:focus:ring-appGray dark:border-appGray'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SkillsSection.propTypes = {};

SkillsSection.defaultProps = {};

export default SkillsSection;
