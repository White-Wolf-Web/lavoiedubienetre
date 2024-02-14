"use client"
import React from 'react'
import Slider from './Slider'
import sliderData from '@/data/sliderData.json'

export default function CarrouselContainer() {
  return (
    <div className='w-full bg-black mt-4'>
    <div className='sliderContainerMaxWidth'>
    <div className="w-full h-full mx-auto">
         <Slider items={sliderData} />
    </div>
    </div>
    </div>
  )
}
