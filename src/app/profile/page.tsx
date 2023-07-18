'use client';
import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa';

const Profile = () => {
    const [user, setUser] = useState(false);
  return (
    user ? (
        <FaUserAlt />
    ):(
        <button className='bg-blue-600 text-white md:px-10 px-5 py-3 rounded-md'>Login</button>
    )
  )
}

export default Profile