import Link from 'next/link';
import React, { FC } from 'react'

interface NavItemProps{
    title: string; 
    link: string;
}

const NavItem:FC<NavItemProps> = ({title,link}) => {
  return (
    <Link href={link} className="m-2 py-2 hover:text-slate-400">
        <h3>{title}</h3>
    </Link>
  )
}

export default NavItem