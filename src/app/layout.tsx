import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import EnterScreen from "@/components/EnterScreen";

export const metadata: Metadata = {
  title: "Las Carbelli | Content Creators Mendoza",
  description:
    "Dos hermanas de San Martín, Mendoza, creando contenido mágico, divertido y moderno. Bailamos, cantamos y compartimos momentos especiales.",
  keywords: [
    "Carbelli",
    "Zoe",
    "Guada",
    "content creators",
    "Mendoza",
    "San Martín",
    "influencers",
    "videos",
    "colaboraciones",
  ],
  authors: [{ name: "Carbelli" }],
  openGraph: {
    title: "Las Carbelli | Content Creators Mendoza",
    description:
      "Dos hermanas creando contenido divertido y altamente viral para emprendimientos y locales mendozinos.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-claro text-oscuro font-body selection:bg-brand-pink selection:text-white">
        <EnterScreen />
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}