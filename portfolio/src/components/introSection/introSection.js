// import React from 'react';
// import PropTypes from 'prop-types';
import './introSection.css';
import profile from '../../assets/images/profile/profile.png';
import lightProfile from '../../assets/images/profile/profile-pic.png';
import AppButton from '../appButton/appButton';

const handleClick = () => (window.open("https://drive.google.com/file/d/1O3VFudcAYCOHsVn3PRwEN5cXJeJZdPem/view?usp=sharing"));

const IntroSection = () => {

  return (
  <div className="IntroSection mt-10 xs:m-10" id='About' >
    <img src={localStorage.theme === "dark" ? profile: lightProfile} className="IntroImg mx-auto mb-5" alt="" />
    <h1 className='text-5xl font-extrabold text-appBackground dark:text-appBlue mb-2'>Hi, I am Hannah Lormenyo</h1>
    <h2 className='text-4xl font-bold text-appBackground dark:text-white mb-2'>A Full Stack Developer</h2>
    <div className="IntroText mx-auto text-appBackground dark:text-white mb-8" >
      <p> A highly accomplished Software Engineer and Electrical Engineering graduate from Ashesi University. I have demonstrated excellence in diverse roles, including enhancing payment flows at Bank of America and leading the development of messaging apps at Analog LLC and PhononX. I have a proven expertise in Flutter, Java, and Python, alongside a background in web development using React and Angular. I am adept in mentoring, evident from leadership roles at Google Developer Students Club and Speak Python Bootcamp
        and I have been recognized for my achievements, including the Best Female Developer in AI and Data Science award and HackLab Hackathon winner in 2021.</p>
    </div>
    <AppButton text={"Resume"} handleClick={handleClick}/>
  </div>
);
  }

IntroSection.propTypes = {};

IntroSection.defaultProps = {};

export default IntroSection;
