import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Voie du Bien-Être - Massage Shiatsu</title>
        <meta name="description" content="Profitez d'un moment de détente avec nos massages Shiatsu à [Votre Ville]. La Voie du Bien-Être est votre espace de relaxation et de soin pour le corps et l'esprit." />
        <link rel="canonical" href="https://lavoiedubienetre.be" />
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "La Voie du Bien-Être",
        "description": "Spécialiste en massage Shiatsu à [Votre Ville]. Offrez-vous un moment de détente et de bien-être.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Votre adresse",
          "addressLocality": "[Votre Ville]",
          "postalCode": "[Votre Code Postal]",
          "addressCountry": "FR"
        },
        "telephone": "[Votre Numéro de Téléphone]",
        "image": "URL de l'image de votre entreprise",
        "url": "https://lavoiedubienetre.be"
      }
    `}
  </script>
      </Head>
      <main>
        <h1>Bienvenue à La Voie du Bien-Être</h1>
        <p>Découvrez un havre de paix où le massage Shiatsu ouvre la porte à une relaxation profonde et un bien-être renouvelé.</p>
        <section>
          <h2 className='font-bold underline'>Nos Services</h2>
          <Image src="/path-to-your-image.jpg" alt="Massage Shiatsu" width={640} height={360} />
          <p>Le Shiatsu, une thérapie manuelle japonaise, aide à rééquilibrer l énergie vitale pour une santé optimale.</p>
        </section>
        {/* Autres sections et contenu */}
      </main>
    </>
  );
}