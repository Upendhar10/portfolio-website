import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub  } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets.js';

const Foodville = () => {
  return (
    <div className='flex gap-3 items-center border-2 rounded-lg flex-wrap lg:flex-nowrap'>
      <div className='md:min-w-[50%]'>
        <img src={assets.foodville} className='w-100 object-contain rounded-md'/>
      </div>
      <div className='flex flex-col gap-2 px-3 py-2'>
        <p className='font-bold text-2xl '>Foodville App</p>
        <p className='leading-8'> The FoodVille Web App is a UI project of a user-friendly online platform that allows users to browse, search, and order food from various restaurants.</p>
        <div className='flex justify-between items-center'>
          <img className='w-24'  src="https://skillicons.dev/icons?i=html,css,react"/>
          <div className='flex gap-4 pr-6'>
            <a href='https://github.com/Upendhar10/FoodVille-WebApp' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareGithub} className='text-3xl' /></a>
            <a href='https://foodville-web-app.netlify.app/' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faArrowUpFromBracket} rotation={90} className='text-2xl'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blackboard = () => {
  return (
    <div className='flex gap-3 items-center border-2 rounded-lg flex-wrap lg:flex-nowrap'>
      <div className='md:min-w-[50%]'>
        <img src={assets.blackboard} className='lg:w-[95%] object-contain rounded-md'/>
      </div>
      <div className='flex flex-col gap-2 px-3 py-2'>
        <p className='font-bold text-2xl'>Blackboard App</p>
        <p className='leading-8'>Blackboard is an interactive whiteboard web application equipped with multiple features such as sticky-notes, drag and drop, download, image-insertion.</p>
        <div className='flex justify-between items-center'>
          <img className='w-24'  src="https://skillicons.dev/icons?i=html,css,js"/>
          <div className='flex gap-4 pr-6'>
          <a href='https://github.com/Upendhar10/Blackboard-webApp' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareGithub} className='text-3xl' /></a>
            <a href='https://blackboard-web-app.vercel.app/' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faArrowUpFromBracket}  rotation={90} className='text-2xl'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

const AudioWave = () => {
  return (
    <div className='flex gap-3 items-center border-2 rounded-lg flex-wrap lg:flex-nowrap'>
      <div className='md:min-w-[50%]'>
        <img src={assets.awa} className='lg:w-[96%] object-cover rounded-md'/>
      </div>
      <div className='flex flex-col gap-2 px-3 py-2'>
        <p className='font-bold text-2xl'>AudioWave Analyser</p>
        <p className='leading-8'>Audio Wave Analyzer is a web-based application that allows users to visualize and analyze audio waves in real-time using Web Audio API.</p>
        <div className='flex justify-between items-center'>
          <img className='w-24'  src="https://skillicons.dev/icons?i=html,css,js"/>
          <div className='flex gap-4 pr-6'>
            <a href='https://github.com/Upendhar10/AudioWave-Analyser' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faSquareGithub} className='text-3xl' /></a>
            <a href='https://audio-wave-analyser.vercel.app/' target='_blank' className="hover:scale-110 hover:transition-all">
            <FontAwesomeIcon icon={faArrowUpFromBracket}  rotation={90} className='text-2xl'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='my-10'>
      <p className='font-bold text-3xl text-center my-8 underline decoration-dashed underline-offset-8' id="Projects">Projects</p>
      <div className='flex flex-col items-center gap-5'>
        <Foodville/>
        <Blackboard/>
        <AudioWave/>
      </div>
    </div>
  )
}

export default Projects;