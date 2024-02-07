import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Massage Relaxant - Shiatsu | La Voie du Bien-Être",
  description: "Découvrez nos massages Shiatsu pour une relaxation profonde et un bien-être durable. Situé à Trazegnie, La Voie du Bien-Être vous accueille dans un espace dédié à votre sérénité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
