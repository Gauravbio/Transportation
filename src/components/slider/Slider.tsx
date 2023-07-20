"use client";
import React, { FC, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import SliderItem from './SliderItem';
import images from '@/assets';

type ImageProps={
    image: StaticImageData;
}

interface SliderProps {
    slides: ImageProps[];
}

 const Slider:FC<SliderProps> = ({slides}) =>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            slides.map((slide)=> (
                <SwiperSlide>
                    <Image src={slide.image} alt='main-slider' className='object-center' />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}

export default Slider;
