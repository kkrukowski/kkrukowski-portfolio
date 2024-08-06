import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "@/components/Footer";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Kamil Krukowski - Filmowanie z powietrza i dynamiczne ujęcia FPV",
  description: "Kamil Krukowski - profesjonalny montażysta filmów promocyjnych i pasjonat technologii dronowej. Specjalizuję się w lataniu dronami FPV, oferując dynamiczne i angażujące materiały wideo. Z licencją NSTS-01/06 gwarantuję najwyższą jakość i indywidualne podejście do każdego projektu. Bezpieczna i bezproblemowa współpraca.",
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
