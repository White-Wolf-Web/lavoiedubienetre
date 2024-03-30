import React from 'react'
import Nav from './Nav'
import Image from "next/legacy/image"
import banner from '../../../public/img/banner-massage.webp'

export default function Header() {
  return (
    <div className="relative w-full">
    <Nav />
    <div className="container mx-auto mb-5">
        <Image
          src={banner} 
          alt="Statue zen dans la salle de massage"
          width={1500} 
          height={570} 
          title='Bouddha paisible déposé autour de labradorite dans la salle de massage'
          layout="responsive" 
          priority
        />
      </div>
    </div>
  )
}
