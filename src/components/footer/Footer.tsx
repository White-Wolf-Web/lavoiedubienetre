import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../../public/img/facebook.webp'
import Instagram from '../../../public/img/Instagram_icon.webp'
import pinterest from '../../../public/img/pinterest-icon.webp'

export default function Footer  () {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">La Voie du Bien-Être</h3>
          <p>Massage, Shiatsu & Reiki à Trazegnies</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:underline">À propos</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div id='contact'>
          <p>Contactez-nous:</p>
          <p>lavoiedubienetre@outllok.com</p>
          <p>0477 13 19 93</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="Facebook" width={40} height={40} layout="responsive" title='Facebook' />
           </Link>
           <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <Image src={pinterest} alt="Pinterest" width={40} height={40} layout="responsive" title='Pinterest' />
           </Link>
           <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="instagram" width={40} height={40} layout="responsive" title='Intagram' />
           </Link>
            {/* Ajoutez d'autres icônes de réseaux sociaux ici */}
          </div>
        </div>
      </div>
    </footer>
  );
};


