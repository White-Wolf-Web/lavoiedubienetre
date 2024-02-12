"use client"
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  path?: string;
  subMenu?: MenuItem[];
  icon?: boolean; 
};

const menuItems: MenuItem[] = [
  { name: "Accueil", path: "/", icon: true }, 
  { name: "Massage", subMenu: [{ name: "Massage Thaï", path: "/massage/thai" }, { name: "Massage Suédois", path: "/massage/suedois" }] },
  { name: "Shiatsu", subMenu: [{ name: "Shiatsu Traditionnel", path: "/shiatsu/traditionnel" }, { name: "Shiatsu sur Chaise", path: "/shiatsu/chaise" }] },
  { name: "Reiki", path: "/reiki" },
  { name: "Articles", subMenu: [{ name: "Article Massage Thaï", path: "/articles/thai" }, { name: "Article Massage Suédois", path: "/articles/suedois" }] },
  { name: "Qui suis-je", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="space-x-4 justify-center flex-1 hidden sm:flex">
          {menuItems.map((item, index) => (
            <Fragment key={index}>
              {item.icon ? (
                <Link href={item.path ?? "#"} passHref className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3.293l-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293l-6-6zM1 9l7-7 7 7v5.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V9zm4-1v6h6V8H5z"/>
                    </svg>
                
                </Link>
              ) : item.subMenu ? (
                <div className="relative group">
                  <button className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}</button>
                  <div className="absolute hidden group-hover:flex flex-col bg-white shadow-2xl mt-2 rounded-md">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link href={subItem.path!} key={subIndex} passHref className="block py-2 px-4 text-sm text-blue-500  hover:text-white">{subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.path ?? "#"} passHref className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden" aria-label="Toggle navigation">
          <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isOpen && (
          <div className="mobile-menu md:hidden">
            {menuItems.map((item, index) => (
              <Link href={item.path || "#"} key={index} passHref className="block text-sm px-2 py-4 text-gray-700 hover:bg-blue-500">{item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
