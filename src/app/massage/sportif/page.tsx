import type { Metadata } from "next";
import { MetadataMassageSportif } from "@/components/metadata/MetadataMassageSportif";

export const metadata: Metadata = {
	title: "Massage sportif à Courcelles | La voie du bien-être",
	description: "Massage sportif à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	alternates: {
		canonical: "https://lavoiedubienetre.be/massage/sportif",
	},/*
	viewport: {
		width: "device-width",
		initialScale: 1,
	},*/
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
	},
	openGraph: {
		title: "Massage sportif à Courcelles | La voie du bien-être",
		description: "Massage sportif à Courcelles. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		url: "https://lavoiedubienetre.be/massage/sportif",
		siteName: "Massage, Shiatsu & Reiki à Courcelles",
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
};
export default function page() {
	return (
		<main>
			<h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">Le Massage Sportif</h1>
			<section className="container space-y-4 max-w-4xl mx-auto p-4 mb-12">
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4 text-center">
					<strong>Votre Allié Performance et Récupération</strong>
				</p>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Dans l&apos;univers du sport, la <strong>performance et la récupération sont deux piliers essentiels pour tout athlète</strong>, qu&apos;il soit amateur passionné ou professionnel aguerri. Le
					massage sportif, offert chez La voie du bien-être, est conçu spécifiquement pour répondre à ces besoins, en combinant techniques avancées et approche personnalisée pour optimiser votre
					bien-être physique et booster vos performances.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">L&apos;Essence du Massage Sportif</h3>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Le massage sportif est une pratique ciblée, qui s&apos;articule autour de la préparation des muscles à l&apos;effort, de l&apos;optimisation de la récupération après
					l&apos;entraînement et de la <strong>prévention des blessures</strong>. Grâce à des techniques spécifiques telles que le pétrissage profond, les frictions et l&apos;étirement, ce type de massage
					agit directement sur les tissus musculaires, favorisant une meilleure élasticité, une circulation optimale et une <strong>détente musculaire</strong> accrue.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Des Bienfaits Multidimensionnels</h3>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Les vertus du massage sportif sont nombreuses et contribuent de manière significative à l&apos;amélioration de la condition physique :
				</p>
				<ul>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Prévention des blessures</strong> : En améliorant la flexibilité et la mobilité des muscles, le massage sportif joue un rôle préventif contre les blessures musculaires
						et articulaires.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Récupération accélérée</strong>: La stimulation de la circulation sanguine permet une élimination plus rapide des toxines accumulées dans les muscles, réduisant ainsi
						les courbatures et accélérant la récupération.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Amélioration des performances</strong> : En relâchant les tensions et en réduisant le risque de blessures, le massage sportif aide à maintenir un niveau de performance
						optimal.
					</li>
					<li className="text-base text-gray-800 font-light leading-relaxed mb-4">
						<strong>Réduction du stress et amélioration du bien-être mental</strong>: Les bénéfices du massage ne sont pas uniquement physiques ; ils s&apos;étendent également à la sphère
						mentale, contribuant à une <strong>meilleure gestion du stress</strong> et à une concentration accrue.
					</li>
				</ul>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Une Approche Sur Mesure</h3>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					A la voie du bien-être, nous savons que chaque sportif est unique. C&apos;est pourquoi nos séances de massage sportif sont entièrement personnalisées. Avant chaque session, nos
					thérapeutes prennent le temps de discuter avec vous de vos objectifs, de votre discipline sportive et de vos besoins spécifiques. Cette approche permet d&apos;adapter les
					techniques utilisées pour offrir un soin qui correspond parfaitement à vos attentes et à vos besoins.
				</p>

				<h3 className="text-xl md:text-2xl text-left custom-mt-2rem  leading-normal">Un massage conçu pour les sportifs</h3>
				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Que vous soyez à la recherche d&apos;une meilleure récupération après vos entraînements, d&apos;une <strong>préparation à une compétition</strong>ou simplement d&apos;une méthode efficace pour
					prévenir les blessures, le massage sportif chez La voie du bien-être est la solution. Nos spécialistes sont prêts à vous accompagner dans votre parcours sportif, en vous offrant des
					soins de qualité supérieure qui feront une réelle différence dans votre pratique sportive.
				</p>

				<p className="text-base text-gray-800 font-light leading-relaxed mb-4">
					Prenez rendez-vous dès aujourd&apos;hui et faites l&apos;expérience des multiples bienfaits du massage sportif. Avec La voie du bien-être, prenez une longueur d&apos;avance dans votre
					entraînement, améliorez votre récupération et franchissez de nouveaux sommets dans vos <strong>performances sportives</strong>. Votre corps est votre outil le plus précieux ; prenez-en soin avec
					l&apos;expertise et le dévouement de nos thérapeutes spécialisés en massage sportif.
				</p>
			</section>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataMassageSportif) }} />
		</main>
	);
}
