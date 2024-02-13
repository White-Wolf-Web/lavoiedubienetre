"use client";
import React from 'react';
import LazyIframe from "./LazyIframe";

const GoogleMap = () => {
	return (
		<div className="w-full h-full overflow-hidden rounded-lg">
			<LazyIframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d162343.0138926672!2d4.3864519567138505!3d50.52283058378746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c8ecd80224c1%3A0x8e44433bf0fdd723!2sMassage%2C%20Shiatsu%20%26%20Reiki%20%C3%A0%20Trazegnies!5e0!3m2!1sfr!2sbe!4v1707851547591!5m2!1sfr!2sbe"
				titre="Localisation de Massage, Shiatsu & Reiki à Trazegnies"
				largeur="100%"
				hauteur="450"
			/>
		</div>
	);
};

export default GoogleMap;
