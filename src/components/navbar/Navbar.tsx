"use client";
import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx';
import Logo from '../Logo';
import {GiTireIronCross} from 'react-icons/gi'
import Profile from '@/app/profile/page';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
    <nav className='h-16 flex bg-green-300 md:px-10 justify-between items-center'>
        <div className='cursor-pointer h-16 w-10 flex items-center'>
            {
                menu ? (
                    <GiTireIronCross onClick={()=> setMenu(false)} />
                ):(
                    <RxHamburgerMenu className='h-16 w-10' onClick={()=> setMenu(true)} />
                )
            }
        </div>
        <Logo />
        <Profile />
        </nav>
        {
            menu && (
                <Sidebar />
            )
        }
    </div>
  )
}

export default Navbar