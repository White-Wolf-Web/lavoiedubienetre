export const MetadataHomePage = {
	"@context": "https://schema.org",
	"@type": "HealthAndBeautyBusiness",
	name: "Massage, Shiatsu & Reiki à Trazegnies",
	description: "Massage, Shiatsu & Reiki à Trazegnies. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Rue de Chapelle 54",
		addressLocality: "Trazegnies",
		postalCode: "6183",
		addressCountry: "BE",
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "10:00",
			closes: "20:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "10:00",
			closes: "20:00",
		},
	],
	telephone: "O477131993",
	image: "https://www.lavoiedubienetre.be/img/banner-massage.webp",
	url: "https://www.lavoiedubienetre.be",
	priceRange: "$$",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Services de massage",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Voyage des Sens' - 2h",
					description: "Ce massage doux est une invitation à un voyage intérieur, où chaque toucher est conçu pour éveiller les sens et procurer une sensation de bien-être profond.",
					offers: {
						"@type": "Offer",
						price: "129",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Stress' - 1h30",
					description: "Conçu pour dénouer les noeuds de tension, revitaliser l'esprit fatigué et restaurer l'équilibre intérieur.",
					offers: {
						"@type": "Offer",
						price: "99",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Cellulite' - 1h30",
					description: "À la croisée des techniques de drainage et de la stimulation circulatoire, ce massage vise à déloger les dépôts de graisse et tonifier la peau.",
					offers: {
						"@type": "Offer",
						price: "99",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Douceur Dorsale' - 1h30",
					description: "Une exploration détaillée des points de tension du dos, offrant une libération et une revitalisation de cette zone cruciale.",
					offers: {
						"@type": "Offer",
						price: "99",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Toucher Shiatsu' - 1h30",
					description: "Basé sur les principes de l'énergie vitale, le Shiatsu vise à rétablir la circulation énergétique optimale et favoriser un bien-être global.",
					offers: {
						"@type": "Offer",
						price: "99",
						priceCurrency: "EUR",
					},
				},
			},
		],
	},
	review: [
		{
			"@type": "Review",
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Stéphane",
			},
		},
	],
};
