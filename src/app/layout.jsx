import "./globals.css";
import { Urbanist } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "HerbPlants",
  description: "",
  icons: {
    icon: "/images/logo/logo_2.svg",
  },
};


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.className} scroll-smooth`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
