import "../globals.css";
import NavbarSection from "@/components/layout/Navbar";

export default function AuthLayout({ children }) {
  return (
    <div className="antialiased flex flex-col min-h-screen bg-green-shades-97">
      <NavbarSection />

      <section className="mx-auto p-6 grow container">{children}</section>
    </div>
  );
}
