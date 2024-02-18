import type { Metadata } from "next";
import { MetadataHomePage } from "@/components/metadata/MetadataHomePage";
//import Image from "next/image";
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
				url: "https://lavoiedubienetre.be/img/massage-femme-souriante.webp",
				width: 1200,
				height: 400,
				alt: "Femme souriante recevant un de mes massages",
			},
		],
		locale: "fr-fr",
		type: "website",
	},
	twitter: {
	  card: "summary_large_image",
	  site: "@voiedubienetre", 
	  title: "Massage, Shiatsu & Reiki à Trazegnies | La voie du bien-être",
	  description: "Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	images: [
			{
				url: "https://lavoiedubienetre.be/img/massage-femme-souriante.webp",
				width: 1200,
				height: 400,
				alt: "Femme souriante recevant un de mes massages",
			},
		],
	},
  };

export default function Home() {
	return (
		<>
			<main>
				<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Massage, Shiatsu & Reiki à Trazegnies</h1>

				<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Au cœur de Trazegnies, la voie du bien-être vous invite à découvrir l&apos;art ancestral du massage, une porte ouverte vers l&apos;équilibre et l&apos;harmonie intérieure.
						Spécialistes en Shiatsu, Reiki, et réflexologie plantaire, nous sommes engagés à offrir des soins personnalisés et profondément régénérants pour le corps et l&apos;esprit, où
						chaque technique est une clé pour déverrouiller votre potentiel de bien-être.
					</p>
					<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
						<strong>Shiatsu</strong> : Une thérapie manuelle japonaise qui, par une stimulation douce des points d&apos;acupuncture à travers le vêtement, ne se contente pas de masser mais libère les
						blocages énergétiques. Ce processus permet de rééquilibrer les flux vitaux, offrant ainsi soulagement et détente musculaire, et invitent à un lâcher-prise profond, propice au
						bien-être général.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
					<strong>Reiki</strong>: Au-delà d&apos;une simple pratique énergétique, le Reiki est un voyage vers le rééquilibrage et la guérison sur tous les plans de l&apos;être. Par une stimulation non
						invasive, il apaise le mental et le corps, favorisant une relaxation profonde et stimulante. Cette technique ancienne est un pilier de notre pratique, visant la revitalisation
						et l&apos;harmonisation complète de l&apos;individu.
					</p>
					<p className="text-base text-gray-900 font-light leading-relaxed mb-4">
					<strong>Réflexologie Plantaire </strong>: Cette technique ne se limite pas au massage des pieds mais est une voie vers une santé optimale et un bien-être accru. Chaque pression appliquée est un
						geste d&apos;acupression qui soulage les courbatures et libère les tensions, stimulant les zones réflexes liées aux organes et favorisant ainsi une guérison holistique.
					</p>
					<p className="text-base text-gray-700 font-light leading-relaxed mb-4">
						Dans notre havre de paix, chaque soin est une porte vers un voyage intérieur, un moment suspendu où la relaxation et le renouveau sont au rendez-vous. Nos massages sur chaise,
						ou massage assis, sont une invitation à expérimenter le soulagement immédiat des tensions accumulées, offrant une pause relaxante dans votre journée chargée.
					</p>
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Dans un cadre apaisant et une atmosphère enveloppante, nos praticiens expérimentés vous guident vers le chemin de la détente et de la régénération. Nous sommes fiers
						d&apos;offrir un espace où calme et sérénité règnent, permettant à chacun de se reconnecter avec soi-même.
					</p>
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Que vous cherchiez à relâcher les tensions du quotidien, à revitaliser votre énergie ou simplement à vous accorder un moment de paix, la voie du bien-être à Trazegnies est
						votre sanctuaire. Découvrez le pouvoir de la guérison par le toucher, un processus stimulant et régénérant qui <strong>libère les tensions</strong> et permet de rééquilibrer l&apos;énergie
						vitale.
					</p>
					<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
						Réservez votre séance dès aujourd&apos;hui et prenez le premier pas vers un bien-être durable et complet. Vivez l&apos;expérience unique d&apos;un massage qui non seulement
						relaxe mais revitalise, offrant <strong>une évasion du stress quotidien </strong>et un chemin vers un équilibre intérieur profond.
					</p>
					<div className="flex justify-end">
						
						<CtaButton />
					</div>
				</section>
				<section>
					<MassageCardContainer />
				</section>
				<section id="QuiJeSuis" className="space-y-4 max-w-4xl mx-auto p-4">
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
				<section id="carrousel">
					<CarrouselContainer />
				</section>
				<section>
					<ContactSection />
				</section>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
			</main>
		</>
	);
}
