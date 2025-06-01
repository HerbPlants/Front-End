import "../globals.css";
import FooterSection from "@/components/layout/Footer";
import NavbarSection from "@/components/layout/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="antialiased flex flex-col min-h-screen bg-green-shades-97">
      <NavbarSection />

      <section className="mx-auto w-full flex-grow">{children}</section>
      <FooterSection />
    </div>
  );
}
