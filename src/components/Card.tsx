import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ServiceItemProps{
    title: string,
    description: string;
    link: string;
    image: StaticImageData;
}

const ServiceItem:React.FC<ServiceItemProps> = ({title,description,link,image}) => {
  return (
    <div className='border-slate-700 xl:h-64 my-5 mx-5'>
        <Image src={image} className='bg-green-500' alt='' />
        <h3 className='text-center'>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceItem