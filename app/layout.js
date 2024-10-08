import { Roboto_Slab } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "@/components/Footer";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Kamil Krukowski - Filmowanie z Drona FPV i Filmy Reklamowych",
  description: "Profesjonalne filmowanie z drona FPV i produkcja filmów reklamowych. Gwarantuję wysoką jakość wideo oraz pełne bezpieczeństwo i indywidualne podejście.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${roboto_slab.className} flex flex-col items-center w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-3477ENCLNQ" />
    </html>
  );
}
