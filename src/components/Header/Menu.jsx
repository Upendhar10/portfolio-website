import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faGraduationCap , faHandshake, faSheetPlastic} from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <div className='flex gap-10 text-5xl items-center bg-[#f5f6fa] border-t-2 py-4 rounded md:hidden sticky bottom-0 left-[6%] justify-center '>
        <a href="#About" className="p-1 hover:scale-110 hover:transition-all hover:text-sky-400"> <FontAwesomeIcon icon={faUser} /> </a>
        <a href="#Qualification" className="p-1 hover:scale-110 hover:transition-all hover:text-sky-400"> <FontAwesomeIcon icon={faGraduationCap} /> </a> 
        <a href="#Projects" className="p-1 hover:scale-110 hover:transition-all hover:text-sky-400"> <FontAwesomeIcon icon={faSheetPlastic} /> </a>
        <a href="#Connect" className="p-1 hover:scale-110 hover:transition-all hover:text-sky-400"> <FontAwesomeIcon icon={faHandshake} /></a>
    </div>
  )
}

export default Menu;