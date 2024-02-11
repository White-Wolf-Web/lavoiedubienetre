"use client"
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  path?: string;
  subMenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { name: "Accueil", path: "/" },
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
        <div className="flex space-x-4 justify-center flex-1">
          {menuItems.map((item, index) => (
            <Fragment key={index}>
              {item.path ? (
                <Link href={item.path} className="text-blue-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">{item.name}
                </Link>
              ) : (
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{item.name}</button>
                  {item.subMenu && (
                    <div className="absolute hidden group-hover:block bg-white shadow-2xl mt-2 rounded-md z-10">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link href={subItem.path!} key={subIndex} className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">{subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden" aria-label="Menu Burger">
          <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {isOpen && (
          <div className="mobile-menu md:hidden">
            {menuItems.map((item, index) => (
              <Link href={item.path || "#"} key={index} className="block text-sm px-2 py-4 text-gray-700 hover:bg-blue-500">{item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
