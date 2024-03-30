"use client";

import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import styles from "./Slider.module.css";
import sliderData from "@/data/sliderData.json";
import leftChevron from "../../../public/img/left-arrow.svg";
import rightChevron from "../../../public/img/right-arrow.svg";

type CarouselItem = {
	imageUrl: string;
	imageAlt: string;
	id: number;
	title: string;
};

type CarouselProps = {
	items: CarouselItem[];
};

const typedSliderData: CarouselItem[] = sliderData;

const Slider = ({ items }: CarouselProps) => {
	const [sliderIndex, setSliderIndex] = useState<number>(1);
	const [animate, setAnimate] = useState(true);
	const [exit, setExit] = useState(false);

	function toggleImage(indexPayload: number) {
		setExit(true); // Commence l'animation de sortie
		setTimeout(() => {
			setSliderIndex((state) => {
				const newIndex = indexPayload + state;
				if (newIndex > typedSliderData.length) {
					return 1;
				} else if (newIndex < 1) {
					return typedSliderData.length;
				} else {
					return newIndex;
				}
			});
			setExit(false); // Prépare pour l'animation d'entrée
			setAnimate(false);
		}, 1700); // Ce délai doit correspondre à la durée de votre animation de sortie
	}

	useEffect(() => {
		let intervalID: NodeJS.Timeout;
		if (!exit) {
			setAnimate(true);
			intervalID = setInterval(() => toggleImage(1), 6000);
		}
		return () => {
			clearInterval(intervalID);
		};
	}, [sliderIndex, exit]);

	const currentItem = items.find((item) => item.id === sliderIndex);

	return (
		<div className={styles.sliderContainer}>
			{/*	<p className={styles.indexInfo}>
				{sliderIndex} / {typedSliderData.length}
    </p>*/}

			<div className={styles.navigationContainer}>
				<button type="button" aria-label="Image précédente" onClick={() => toggleImage(-1)} className={`${styles.navigationButton} ${styles.prevButton}`}>
					<Image src={leftChevron} alt="commentaire précedant (d'un massage à domicile) " width={24} height={24} title="Précédant" />
				</button>
				<button type="button" aria-label="Image suivante" onClick={() => toggleImage(1)} className={`${styles.navigationButton} ${styles.nextButton}`}>
					<Image src={rightChevron} alt="commentaire suivant (d'un massage à Bruxelles) " width={24} height={24} title="Suivant" />
				</button>
			</div>

			<div className={`${styles.slider} ${animate ? styles.sliderEnter : ""} ${exit ? styles.sliderExit : ""}`}>
				<div className={styles.contentContainer}>
					<Image
						src={currentItem?.imageUrl || "/images/placeholder.jpg"}
						alt={currentItem?.imageAlt || "Default alt text"}
						title={currentItem?.title || "Photo de la personne massée"}
						width={747}
						height={420}
					/>
				</div>
			</div>
		</div>
	);
};

export default Slider;
