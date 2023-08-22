import React from 'react';
import PropTypes from 'prop-types';
import styles from './appFooter.module.css';

const AppFooter = () => (
  <div className="dark:bg-appBackground bg-white">
    <footer className='mt-24'>
      <p className='dark:text-appBlue text-appBackground pb-5'>Designed and Created by Hannah Lormenyo</p>
    </footer>

  </div>
);


AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
