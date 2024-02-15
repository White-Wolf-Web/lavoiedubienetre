"use client"
// LazyIframe.tsx
import React from 'react';

interface LazyIframeProps {
  src: string;
  titre: string;
  largeur: string | number;
  hauteur: string | number;
}

const LazyIframe: React.FC<LazyIframeProps> = ({ src, titre, largeur, hauteur }) => {
  return (
    <iframe
      src={src}
      title={titre}
      width={largeur}
      height={hauteur}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default LazyIframe;
