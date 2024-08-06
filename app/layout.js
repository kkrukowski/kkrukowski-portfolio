import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "@/components/Footer";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Kamil Krukowski - Profesjonalne Filmowanie z Drona FPV i Produkcja Filmów Reklamowych",
  description: "Oferuję profesjonalne filmowanie z drona, w tym dynamiczne nagrania FPV i produkcję filmów reklamowych. Gwarantuję wysoką jakość wideo, innowacyjne ujęcia oraz pełne bezpieczeństwo i indywidualne podejście.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${roboto_slab.className} flex flex-col items-center w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
