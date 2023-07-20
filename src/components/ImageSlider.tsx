import React from 'react'
import Slider from './slider/Slider'
import images from '@/assets'

const ImageSlider = () => {
  const slides=[
    {
      image: images.mainSlider1
    },
    {
      image: images.mainSlider2
    },
    {
      image: images.mainSlider3
    },
  ]
  return (
    <section id='main-slider' className='h-56 sm:h-72 md:h-96 xl:h-96 bg-green-200'>
      <Slider slides={slides} />
    </section>
  )
}

export default ImageSlider