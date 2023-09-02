// import React from 'react';
import PropTypes from 'prop-types';
import './appProject.css';


const AppProject = ({ name, type, stack, image, icon, link }) => (
  <div className='mx-auto p-5'>
    <div className='flex text-left mb-4 w-full'>
      <img src={icon} alt='' className=' w-14 h-14 rounded-lg' />
      <div className='w-5/6'>
        <h3 className='text-appBackground dark:text-white font-bold ml-3'>{name}</h3>
        <h4 className='text-appBackground dark:text-white text-sm ml-3'>{type}</h4>
        <p className='text-appGray text-xs ml-3'>{stack}</p>
      </div>
      <div className='justify-self-end'>
        <a href={link} target='_blank' rel='noreferrer noopener'>
          <svg className="w-6 h-6 text-appBackground dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
            <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
          </svg>
        </a>
      </div>
    </div>

    <div className="max-w-sm bg-white rounded-lg">

      <img className="rounded-lg" src={image} alt="" />

    </div>

  </div>
);

AppProject.propTypes = {
  name: PropTypes.any,
  type: PropTypes.any,
  stack: PropTypes.any,
  image: PropTypes.any,
  icon: PropTypes.any,
  link: PropTypes.any
};

AppProject.defaultProps = {};

export default AppProject;
