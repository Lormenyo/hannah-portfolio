// import React from 'react';
import './contactSection.css';
import AppButton from '../appButton/appButton';
import medium from '../../assets/images/blogs/medium.png';
import hashnode from '../../assets/images/blogs/hashnode.png';
import dev from '../../assets/images/blogs/dev.png';
import hannahlormenyo from '../../assets/images/youtube/hannahlormenyo.png';
import holygraildev from '../../assets/images/youtube/holygraildev.png';
import github from '../../assets/images/socials/github.png';
import linkedIn from '../../assets/images/socials/linkedIn.png';
import instagram from '../../assets/images/socials/instagram.png';
import x from '../../assets/images/socials/x.png';

const ContactSection = () => {

  const handleScheduleClick =() => {
    window.open("https://calendly.com/lormenyoh/meet-hannah");
  }

  const handleEmailClick =() => {
    window.open("mailto:lormenyoh@gmail.com");
  }

  return (
  <div className='bg-white dark:bg-appBackground mt-24' id='Contact'>
    <h1 className='text-5xl font-extrabold text-appBackground dark:text-appBlue mb-16'>Contact</h1>

    <div className='text-left mb-16 pl-12 md:pl-20'>
      <h2 className='text-appBackground dark:text-white font-semibold text-xl'>GitHub, LinkedIn , X(Twitter) & Instagram</h2>
      <div className='grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 mt-8 w-64'>

        <div className=''>
          <a target="_blank" rel='noreferrer noopener' href="https://www.linkedin.com/in/hannah-lormenyo/"><img src={linkedIn} alt="" className='' /></a>
        </div>

        <div>
          <a target="_blank" rel='noreferrer noopener' href="https://twitter.com/blessed_hl"><img src={github} alt="" className='' /></a>
        </div>


        <div>
          <a target="_blank" rel='noreferrer noopener' href="https://twitter.com/blessed_hl"> <img src={x} alt="" className='' /></a>
        </div>


        <div>
          <a target="_blank" rel='noreferrer noopener'  href="https://www.instagram.com/holygraildev/"><img src={instagram} alt="" className='' /></a>
        </div>

      </div>
    </div>
    <div className='text-left mb-16 pl-12 md:pl-20'>
      <h2 className='text-appBackground dark:text-white font-semibold text-xl'>Blogs</h2>
      <div className='grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4 mt-8 w-64'>
        <div className=''>
          <a href="https://medium.com/@lormenyoh"><img src={medium} alt="" className='rounded-lg' /></a>
        </div>
        <div>
          <a target="_blank"  rel='noreferrer noopener' href="https://dev.to/lormenyo"><img src={dev} alt="" className='' /></a>
        </div>
        <div>
          <a href="https://lormenyoh.hashnode.dev/"><img src={hashnode} alt="" className='' /></a>
        </div>
      </div>
    </div>
    <div className='text-left mb-16 pl-12 md:pl-20'>
      <h2 className='text-appBackground dark:text-white font-semibold text-xl'>Youtube Channels</h2>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 youTubeChannelGrid mt-8'>
        <div>
          <a target="_blank" rel='noreferrer noopener' href="https://www.youtube.com/c/HannahLormenyo"><img src={hannahlormenyo} alt="" className='rounded-lg' /></a>
        </div>
        <div>
          <a target="_blank" rel='noreferrer noopener' href="https://www.youtube.com/@holygraildev"><img src={holygraildev} alt="" className='rounded-lg' /></a>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap justify-center mt-16'>
      <AppButton text={"Email Me"} handleClick={handleEmailClick} className='mr-5' />
      <AppButton text={"Schedule a Call"} handleClick={handleScheduleClick}/>
    </div>
  </div>
);
  }

ContactSection.propTypes = {};

ContactSection.defaultProps = {};

export default ContactSection;
