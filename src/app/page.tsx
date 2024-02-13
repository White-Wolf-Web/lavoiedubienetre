"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";
import CtaButton from "@/components/cta/CtaButton";
import MassageCardContainer from "@/components/card/MassageCardContainer";
import CarrouselContainer from "@/components/carrousel/CarrouselContainer";
import ContactSection from "@/components/contactForm/ContactSection";

export const metadata: Metadata = {
  title: "Massage, Shiatsu & Reiki à Trazegnies | La voie du bien-être",
  description: "Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
  alternates: {
		canonical: "https://lavoiedubienetre.be",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
	},
	openGraph: {
		title: "Massage, Shiatsu & Reiki à Trazegnies | La voie du bien-être",
		description: "Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be",
		siteName: "Massage, Shiatsu & Reiki à Trazegnies",
		images: [
			{
				url: "https://massage-domicile.com/femme-masse-a-domicile-souriante.webp",
				width: 1200,
				height: 400,
				alt: "Femme souriante recevant un de mes massages",
			},
		],
		locale: "fr-fr",
		type: "website",
} }

export default function Home() {
	return (
		<>
			<Head>
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
			<main>
				<h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">Massage, Shiatsu & Reiki à Trazegnies</h1>

				<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Au cœur de Trazegnies, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure.
						Spécialistes en Shiatsu, Reiki et réflexologie plantaire, nous sommes engagés à offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit.
					</p>
					<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
						Shiatsu : Une thérapie manuelle japonaise qui stimule les points d&apos;acupuncture à travers le vêtement, favorisant ainsi la circulation énergétique, la détente musculaire et
						le bien-être général.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						Reiki : Une pratique énergétique d&apos;origine japonaise pour le rééquilibrage et la guérison, qui travaille sur le plan physique, émotionnel et spirituel, invitant à une
						profonde relaxation et à une revitalisation de l&apos;ensemble de l&apos;être
					</p>
					<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
						Réflexologie Plantaire : Une technique de massage des pieds qui repose sur le principe que chaque zone du pied est liée à un organe ou une fonction du corps, offrant ainsi une
						voie vers une santé optimale et un bien-être accru.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						Chaque soin est une invitation au voyage intérieur, un moment unique où le temps suspend son vol pour laisser place à une expérience de relaxation et de renouveau. Dans un
						cadre apaisant et une atmosphère enveloppante, nos praticiens expérimentés vous guident vers le chemin de la détente et de la régénération.
					</p>
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Nous sommes fiers d&apos;offrir un espace où le calme et la sérénité règnent, permettant à chacun de se reconnecter avec soi-même. Que vous cherchiez à relâcher les tensions du
						quotidien, à revitaliser votre énergie ou simplement à vous accorder un moment de paix, la voie du bien-être est votre destination de choix à Trazegnies.
					</p>
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Découvrez le pouvoir de la guérison par le toucher. Réservez votre séance dès aujourd&apos;hui et prenez le premier pas vers un bien-être durable et complet.
					</p>

					<div className="flex justify-end">
						{" "}
						<CtaButton />
					</div>
				</section>
				<section>
					<MassageCardContainer />
				</section>
				<section className="space-y-4 max-w-4xl mx-auto p-4">
					<h2 className="text-3xl md:text-4xl leading-snug mt-4">Mon parcours thérapeutique</h2>
					<h3 className="text-2xl md:text-3xl text-left custom-mt-2rem leading-normal">Qui suis-je ?</h3>
					<p className="text-base text-gray-700 font-light leading-relaxed custom-mt-quartRem mb-4">
						Bonjour, je suis Stéphane G. fondateur de la voie du bien-être et praticien passionné des techniques de bien-être telles que le Shiatsu, le Reiki et la réflexologie plantaire.
						Avec plus de 20 années d&apos;expérience dans le domaine des soins corporels, je me suis dédié à étudier et à pratiquer ces méthodes traditionnelles et innovantes pour offrir
						le meilleur à ma clientèle.
					</p>
					<h3 className="text-2xl md:text-3xl text-left custom-mt-2rem  leading-normal">Mon parcours</h3>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4 custom-mt-quartRem">
						Mon intérêt pour les pratiques de bien-être a débuté par le reiki Usui en 1999 pour atteindre le dernier niveau en 2004. J’ai par la suite continué à approfondir mes
						connaissances et mes compétences à travers diverses formations professionnelles comme différents styles de massage, pour ensuite m’orienter vers le shiatsu pendant 3ans. Étant
						attiré par la médecine chinoise depuis mon plus jeune âge, ce fut une découverte inoubliable. J&apos;ai aussi choisi de me former à la réflexologie plantaire pour compléter mes
						cursus.
					</p>
					<h3 className="text-2xl md:text-3xl text-left custom-mt-2rem leading-normal">Ma philosophie</h3>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4 custom-mt-quartRem">
						Je crois fermement en l&apos;approche holistique de la santé, où le bien-être physique, émotionnel et spirituel est interconnecté. Mon objectif est de créer un espace de
						&apos;guérison&apos; où mes clients peuvent trouver un équilibre et une harmonie intérieure, en utilisant des techniques qui ont fait leurs preuves à travers les siècles pour
						leurs vertus apaisantes et régénératrices.
					</p>
					<h3 className="text-2xl md:text-3xl text-left custom-mt-2rem  leading-normal">Un peu plus sur moi</h3>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4 custom-mt-quartRem">
						En dehors de ma passion pour le bien-être et les soins corporels, j&apos;ai également un grand intérêt pour les arts martiaux, une discipline que je pratique depuis 17 ans. Cet
						engagement dans les arts martiaux m&apos;a appris l&apos;importance de la discipline, de la persévérance et de l&apos;équilibre, des valeurs que j&apos;applique dans tous les
						aspects de ma vie, y compris dans mon approche professionnelle.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						La course à pied est une autre de mes passions. Que ce soit en participant régulièrement à des courses de 20 km ou en me lançant le défi d&apos;un marathon, courir me permet de
						me recentrer, de clarifier mes pensées et de maintenir ma condition physique, essentielle à ma pratique professionnelle.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						Sur un plan plus personnel, je suis le papa de 2 grandes filles, aujourd&apos;hui majeures, qui m&apos;ont enseigné la patience, l&apos;écoute et la compréhension. Ces qualités
						sont cruciales dans mon travail avec mes clients, car elles me permettent de me connecter avec eux sur un plan plus profond et de comprendre véritablement leurs besoins et
						leurs aspirations.
					</p>

					<h3 className="text-2xl md:text-3xl text-left custom-mt-2rem leading-normal">Pourquoi choisir la voie du bien-être ?</h3>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4 custom-mt-quartRem">
						Ici, chaque client est unique, et je m&apos;engage à offrir une expérience personnalisée qui répond aux besoins spécifiques de chacun. Ma passion pour le bien-être et mon
						engagement envers mes clients se reflètent dans chaque soin que je propose, visant toujours l&apos;excellence et la satisfaction totale.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						Je vous invite à découvrir les bienfaits de nos soins et à vous embarquer dans ce voyage de bien-être. Renouez avec votre corps, libérez votre esprit et revitalisez votre âme
						grâce à nos méthodes éprouvées et à notre approche personnalisée.
					</p>
				</section>
				<section>
					<CarrouselContainer />
				</section>
				<section>
					<ContactSection />
				</section>
			</main>
		</>
	);
}
