'use client'

import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Massage, Shiatsu & Reiki à Trazegnies | La voie du bien-être</title>
        <meta name="description" content="Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant." />
        <link rel="canonical" href="https://lavoiedubienetre.be" />
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Massage, Shiatsu & Reiki à Trazegnies",
        "description": "Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rue de Chapelle 54",
          "addressLocality": "Trazegnies",
          "postalCode": "6183",
          "addressCountry": "BE"
        },
        "telephone": "O477131993",
        "image": "URL de l'image de votre entreprise",
        "url": "https://lavoiedubienetre.be"
      }
    `}
  </script>
      </Head>
      <main>
      <h1 className="text-3xl font-title text-center md:text-4xl lg:text-5xl my-4">
      Massage, Shiatsu & Reiki à Trazegnies
</h1>
        <p>Découvrez un havre de paix où le massage Shiatsu ouvre la porte à une relaxation profonde et un bien-être renouvelé.</p>
        <section>
          <h2 className='font-bold underline'>Nos Services</h2>
        
          <p>Le Shiatsu, une thérapie manuelle japonaise, aide à rééquilibrer l énergie vitale pour une santé optimale.</p>
        </section>
        {/* Autres sections et contenu */}
      </main>
    </>
  );
}