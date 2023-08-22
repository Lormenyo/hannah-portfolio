import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './navBar.module.css';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { toDarkMode, toLightMode } from '../../theme/theme';


function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme);

  return (
    <div className={styles.NavBar}>

      <nav className="bg-white dark:bg-appBackground ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-appBlue relative before:content-[''] before:absolute before:block before:w-full before:h-[4px] 
              before:bottom-0 before:left-0 before:bg-appBackground dark:before:bg-appBlue
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">HL.</span>
          </a>
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-appBlue focus:outline-none  dark:text-white dark:hover:bg-appBlue " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!isNavOpen ? 
             <MenuIcon fontSize='large' className='text-appBackground dark:text-appBlue'/> :
              <CloseIcon fontSize='large' className='text-appBackground dark:text-appBlue'/>
              }
          </button>
          <div className={isNavOpen ? 'w-full md:block md:w-auto ' : "hidden w-full md:block md:w-auto "} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-appAltBg rounded-lg bg-white dark:bg-appBackground md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-appBackground md:dark:bg-appBackground dark:border-appAltBg">
              <li>
                <a href="#About" className="block py-2 pl-3 pr-4 text-appBackground dark:text-white font-bold rounded  md:border-0 md:hover:text-appBlue md:p-0 dark:text-white md:dark:hover:text-appBlue dark:hover:text-appBlue" aria-current="page">About</a>
              </li>
              <li>
                <a href="#Projects" className="block py-2 pl-3 pr-4 text-appBackground dark:text-white font-bold rounded  md:border-0 md:hover:text-appBlue md:p-0 dark:text-white md:dark:hover:text-appBlue dark:hover:text-appBlue ">Projects</a>
              </li>
              <li>
                <a href="#Skills" className="block py-2 pl-3 pr-4 text-appBackground dark:text-white font-bold rounded  md:border-0 md:hover:text-appBlue md:p-0 dark:text-white md:dark:hover:text-appBlue dark:hover:text-appBlue ">Skills</a>
              </li>
              <li>
                <a href="#Contact" className="block py-2 pl-3 pr-4 text-appBackground dark:text-white font-bold rounded   md:border-0 md:hover:text-appBlue md:p-0 dark:text-white md:dark:hover:text-appBlue dark:hover:text-appBlue ">Contact</a>
              </li>
              <li>
              {isDarkMode ? 
                <button
                  type='button'
                  onClick={() =>{
                    setIsDarkMode(!isDarkMode);
                    toLightMode();
                    }}>
                 <ModeNightIcon fontSize='medium' className='text-appBackground dark:text-appBlue'/>
                 </button>:
                   <button
                   type='button'
                   onClick={() =>{
                     setIsDarkMode(!isDarkMode);
                     toDarkMode();
                     }}>
                    <LightModeIcon fontSize='medium' className='text-appBackground dark:text-appBlue'/>
                    </button>
                  }
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
