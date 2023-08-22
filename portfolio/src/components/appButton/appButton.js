import React from 'react';
import PropTypes from 'prop-types';
import styles from './appButton.css';

const AppButton = ({text, handleClick}) => (
  <div className=''>
    <button onClick={handleClick} type="button" className="border-2 font-semibold bg-white text-appBackground hover:text-white hover:bg-appBackground  dark:bg-appBackground dark:text-appBlue dark:hover:bg-appBlue dark:hover:text-appBackground focus:outline-none focus:ring-4 text-md px-5 py-2.5 mr-2 mb-2 border border-appBackground dark:border-appBlue" >{text}</button>
  </div>
);

AppButton.propTypes = {};

AppButton.defaultProps = {};

export default AppButton;
