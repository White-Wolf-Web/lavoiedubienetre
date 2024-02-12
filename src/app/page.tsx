"use client";

import Image from "next/image";
import Head from "next/head";
import CtaButton from "@/components/cta/CtaButton";
import MassageCardContainer from "@/components/card/MAssageCardContainer";

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
        "url": "https://www.lavoiedubienetre.be"
      }
    `}
				</script>
			</Head>
			<main className="container mx-auto">
				<h1 className="text-3xl font-title text-center md:text-4xl lg:text-5xl my-4">Massage, Shiatsu & Reiki à Trazegnies</h1>
				
        <section className="space-y-4 max-w-4xl mx-auto p-4">
  <p className="text-base text-gray-800 font-light leading-relaxed mb-4">

					Au cœur de Trazegnies, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure.
					Spécialistes en Shiatsu, Reiki et réflexologie plantaire, nous sommes engagés à offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit.
				</p>
				<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
					Shiatsu : Une thérapie manuelle japonaise qui stimule les points d&apos;acupuncture à travers le vêtement, favorisant ainsi la circulation énergétique, la détente musculaire et le
					bien-être général.
				</p>
				<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
					Reiki : Une pratique énergétique d&apos;origine japonaise pour le rééquilibrage et la guérison, qui travaille sur le plan physique, émotionnel et spirituel, invitant à une profonde
					relaxation et à une revitalisation de l&apos;ensemble de l&apos;être
				</p>
				<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
					Réflexologie Plantaire : Une technique de massage des pieds qui repose sur le principe que chaque zone du pied est liée à un organe ou une fonction du corps, offrant ainsi une voie
					vers une santé optimale et un bien-être accru.
				</p>
				<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
					Chaque soin est une invitation au voyage intérieur, un moment unique où le temps suspend son vol pour laisser place à une expérience de relaxation et de renouveau. Dans un cadre
					apaisant et une atmosphère enveloppante, nos praticiens expérimentés vous guident vers le chemin de la détente et de la régénération.
				</p>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Nous sommes fiers d&apos;offrir un espace où le calme et la sérénité règnent, permettant à chacun de se reconnecter avec soi-même. Que vous cherchiez à relâcher les tensions du
					quotidien, à revitaliser votre énergie ou simplement à vous accorder un moment de paix, la voie du bien-être est votre destination de choix à Trazegnies.
				</p>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">Découvrez le pouvoir de la guérison par le toucher. Réservez votre séance dès aujourd&apos;hui et prenez le premier pas vers un bien-être durable et complet.</p>
       
        <div className="flex justify-end"> <CtaButton /></div>
    	</section>
      <section>

<MassageCardContainer />
      </section>
      </main>
		</>
	);
}
