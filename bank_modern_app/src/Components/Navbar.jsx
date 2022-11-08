import {useState} from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

      <ul className='list-nonce sm:flex hidden justify-end items-center felx-1'>
        {navLinks}
      </ul>
    </div>
  )
}

export default Navbar