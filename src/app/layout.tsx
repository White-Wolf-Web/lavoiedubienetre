import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css"; 
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const open_Sans = Open_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'black',
}
 

export const metadata: Metadata = {
  metadataBase: new URL('https://lavoiedubienetre.be'),
  title: "Massage Relaxant Courcelles - Charleroi  | Shiatsu Reiki",
  description: "Découvrez nos massages Shiatsu pour une relaxation profonde et un bien-être durable. Situé à Courcelles dans un espace dédié à votre sérénité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={open_Sans.className}><Header/>{children}<Footer /></body>
    </html>
  );
}
