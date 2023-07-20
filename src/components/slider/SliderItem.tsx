import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import { SwiperSlide } from 'swiper/react';

interface SliderItemProps {
    image: StaticImageData;
}

const SliderItem:FC<SliderItemProps> = ({image}) => {
    console.log("yaha hai")
  return (
    <SwiperSlide>
        <Image src={image} alt='main-slider' fill />
        <h1>slider hai</h1>
    </SwiperSlide>
  )
}

export default SliderItem