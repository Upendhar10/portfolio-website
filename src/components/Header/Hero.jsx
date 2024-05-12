import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import {assets} from '../../assets/assets';

// https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

const Hero = () => {
  return (
    <div className='pt-20 mt-10 mb-8 md:my-16 md:grid md:grid-cols-12'>
        <div className='profile-pic col-span-5 place-self-center'>
            <img src={assets.hero} className='p-4 rounded-full md:w-[400px] lg:w-[90%] ' alt='My Pic'/>
        </div>
        <div className='Bio md:col-span-5 flex flex-col gap-4 text-start justify-center py-8 md:py-15 md:px-10 '>
            <p className='font-light text-gray-500'>👋 Hello, I'm</p>
            <p className='font-bold text-3xl'>Nemmani Upendhar</p>
            <p className='font-medium text-2xl'>Software Engineer</p>
            <p>Based in Hyderabad, India</p>
            <a href='https://drive.google.com/file/d/1TJ7cvhb8819SCKNX4SSiSDzLiG3BcKBv/view?usp=sharing' target='_blank' className='p-2 w-[50%] md:w-[15vw] rounded-xl font-bold text-white bg-black hover:scale-110 hover:transition text-center'>View Resume</a>
        </div>
        <div className='sm:hidden flex absolute right-5 bottom-[22%] flex-col gap-8 justify-center text-4xl'>
            <a href='https://www.linkedin.com/in/upendharnemmani' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/Upendhar10' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href='https://twitter.com/UpendharNemmani' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareXTwitter} /></a>
        </div>
        <div className='hidden md:flex flex-col md:colspan-2 gap-10 justify-center items-center text-4xl '>
            <a href='https://www.linkedin.com/in/upendharnemmani' target='_blank' className='hover:scale-110'>
            <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/Upendhar10' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href='https://twitter.com/UpendharNemmani' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareXTwitter} /></a>
        </div>
    </div>
  )
}

export default Hero;