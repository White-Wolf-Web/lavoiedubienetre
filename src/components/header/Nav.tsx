"use client";
import React, { useState, Fragment } from "react";
import Link from "next/link";

type MenuItem = {
	name: string;
	path?: string;
	subMenu?: MenuItem[];
	icon?: boolean;
};

const menuItems: MenuItem[] = [
	{ name: "Accueil", path: "/", icon: true },
	{
		name: "Massage",
		subMenu: [
			{ name: "Massage Thaï", path: "/massage/thai" },
			{ name: "Massage Suédois", path: "/massage/suedois" },
		],
	},
	{
		name: "Shiatsu",
		subMenu: [
			{ name: "Shiatsu Traditionnel", path: "/shiatsu/traditionnel" },
			{ name: "Shiatsu sur Chaise", path: "/shiatsu/chaise" },
		],
	},
	{ name: "Reiki", path: "/reiki" },
	{
		name: "Articles",
		subMenu: [
			{ name: "Article Massage Thaï", path: "/articles/thai" },
			{ name: "Article Massage Suédois", path: "/articles/suedois" },
		],
	},
	{ name: "Qui suis-je", path: "/about" },
	{ name: "Contact", path: "/contact" },
];

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-xl py-4 relative">
			<div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
				<div className="space-x-4 justify-center flex-1 hidden sm:flex">
					{menuItems.map((item, index) => (
						<Fragment key={index}>
							{item.icon ? (
								<Link href={item.path ?? "#"} passHref>
									<div className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</div>
								</Link>
							) : item.subMenu ? (
								<div className="relative group">
									<button className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}</button>
									<div className="absolute hidden group-hover:flex flex-col bg-white shadow-2xl mt-2 rounded-md">
										{item.subMenu.map((subItem, subIndex) => (
											<Link href={subItem.path!} key={subIndex} passHref>
												<div className="block py-2 px-4 text-sm text-blue-500 hover:text-white">{subItem.name}</div>
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link href={item.path ?? "#"} passHref>
									<div className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}</div>
								</Link>
							)}
						</Fragment>
					))}
				</div>
				<div className="flex-1 sm:hidden flex justify-center">
					{/* Ajustez ici pour ne pas afficher la croix lorsque le menu est ouvert */}
					{!isOpen && (
						<button onClick={() => setIsOpen(true)} className="text-blue-500" aria-label="Open menu">
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						</button>
					)}
				</div>
				{isOpen && (
					<div className="absolute top-full w-full left-0 z-10 mx-auto p-4 bg-white shadow-xl rounded-md md:hidden">
						<div className="flex justify-end">
							<button onClick={() => setIsOpen(false)} className="mb-4" aria-label="Close menu">
								<svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						{menuItems.map((item, index) => (
							<Link href={item.path || "#"} key={index} passHref>
								<div className="block text-sm px-2 py-4 text-blue-500 hover:text-blue-700 w-full text-center">{item.name}</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
