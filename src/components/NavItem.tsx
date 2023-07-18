import React, { FC } from 'react'

interface NavItemProps{
    title: string; 
}

const NavItem:FC<NavItemProps> = ({title}) => {
  return (
    <div className="m-2 py-2 hover:text-slate-400">
        <h3>{title}</h3>
    </div>
  )
}

export default NavItem