import FooterSection from "@/components/layout/Footer";
import NavbarSection from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="antialiased flex flex-col min-h-screen bg-green-shades-97 text-dark-green-shades-20">
      <NavbarSection />

      <section className="w-full mx-auto max-w-screen-xl container flex-grow flex flex-col items-center justify-center text-center px-4 py-16 gap-8">
        <Image
          src="/images/assets/mascot/wow.png"
          alt="404"
          width={144}
          height={144}
          className=""
        />
        <div className="">
          <h1 className="text-5xl font-extrabold text-dark-green-shades-20">
            404
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Halaman tidak ditemukan
          </p>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Ups! Sepertinya halaman yang kamu cari tidak tersedia atau telah
            dipindahkan.
          </p>
        </div>

        <Link href="/">
          <Button size="lg">Kembali ke Home</Button>
        </Link>
      </section>

      <FooterSection />
    </div>
  );
}
