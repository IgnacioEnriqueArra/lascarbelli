import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import EnterScreen from "@/components/EnterScreen";

export const metadata: Metadata = {
  title: "Las Carbelli | Rompiendo Redes en Mendoza",
  description: "Dos hermanas geniales de San Martín que te llenan el local de gente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-zinc-950 text-white font-body">
        <EnterScreen />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}