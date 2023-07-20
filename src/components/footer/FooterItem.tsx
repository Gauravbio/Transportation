import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react'

type FooterContent ={
  title: string,
  link: string
}

interface FooterItemProps {
  title: string,
  content: FooterContent[];
}

const FooterItem:FC<FooterItemProps> = ({title,content}) => {
  return (
    <div className='md:mx-10 xl:mx-20 my-5'>
      <h3 className='font-bold text-lg'>{title}</h3>
      <hr className='border-green-950 text-blue-800' />
      <ul>
        {
          content.map((item)=>(
            <li key={item.title} className='text-base'><Link href={item.link}>{item.title}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterItem