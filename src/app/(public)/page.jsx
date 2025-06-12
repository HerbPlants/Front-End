import React  from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardStep from "@/components/layout/landing-page/CardStep";
import { StepDataDummy } from "@/data/landing-page-data";
import ExploreSection from "@/components/layout/landing-page/ExploreSection";
import Link from "next/link";

export default async function Home() {
  const stepData = StepDataDummy;

  return (
    <div className="">
      <div className="container max-w-screen-xl space-y-10 sm:space-y-16 lg:space-y-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 md:gap-8 lg:gap-14">
          <div className="flex justify-center lg:justify-start ">
            <Image
              src="/asset/mascot-hero-square.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-52 sm:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col items-center  lg:items-start  gap-6">
            <h1 className="text-dark-green-shades-15 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start">
              <span className="leading-tight">
                Kenali Tanaman Herbal di Sekitarmu dengan Cara Seru!
              </span>
            </h1>
            <p className="text-base md:text-lg text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start">
              Selamat datang di Herbplants, Belajar tanaman herbal jadi lebih
              menyenangkan. Yuk, jelajahi dunia tanaman herbal dari sekitar
              rumahmu! Di sini kamu bisa foto tanaman, pelajari manfaatnya, dan
              kumpulkan koleksi herbalmu sendiri sambil menyelesaikan tantangan
              seru.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-2 mt-6 w-full md:max-w-sm lg:w-full">
              <Link
                href="/register"
                className="w-full lg:w-fit"
              >
                  <Button className="w-full px-10 text-dark-grey-shades-15 font-medium transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:text-dark-grey-shades-15/70 ">
                  Daftar
                </Button>
              </Link>
              
              <Link
                href="/login"
                className="w-full lg:w-fit"
              >
                <Button
                variant="outline"
                className="w-full px-10 text-dark-grey-shades-15 font-medium transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:text-dark-grey-shades-15/70"
              >
                Masuk
              </Button>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <ExploreSection />

        {/* Hero Langkah Section */}
        <section className="mx-auto flex flex-col items-center md:flex-row-reverse lg:justify-center gap-5 md:px-6">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/asset/mascot-mulai.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-xssm:max-w-sm md:max-w-xs lg:max-w-md"
            />
          </div>

          <div className="lg:w-7/12 flex flex-col mt-6">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <h4 className="text-xl font-semibold text-dark-green-shades-15 underline underline-offset-[12px] decoration-green-shades-70 decoration-4 rounded-lg">
                Mulai dari Langkah kecil
              </h4>
              <div className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
                <h1 className="text-5xl font-bold text-dark-green-shades-15 md:text-4xl lg:text-6xl">
                  <span className="leading-tight">Snap. Read. Collect.</span>
                </h1>
                <p className="text-dark-grey-shades-20 text-5x1 md:text-6x1 font-medium  mb-6">
                  Ambil foto tanaman, baca info menariknya, dan kumpulkan
                  sebagai koleksi tanaman herbalmu!
                </p>
              </div>
            </div>

            <Button variant="outline" className="w-full md:w-fit">
              Mulai Jelajah
            </Button>
          </div>
        </section>

        {/* 3 Langkah Section */}
        <section className="mx-auto flex flex-wrap justify-center gap-6 sm:px-4">
          {stepData.map((item, index) => (
            <CardStep key={index} data={item} />
          ))}
        </section>

        {/* Challenge Section */}
        <section className="mx-auto flex flex-col items-center md:flex-row-reverse lg:justify-center gap-5 md:px-6">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/asset/maskot-challenge.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-lg"
            />
          </div>

          <div className="lg:w-7/12 flex flex-col mt-6">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <h4 className="text-2xl font-semibold text-dark-green-shades-15 underline underline-offset-[12px] decoration-green-shades-70 decoration-4 rounded-lg">
                Challenges for Fun
              </h4>
              <div className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
                <h4 className="font-bold text-dark-green-shades-15 text-3xl md:text-4xl lg:text-5xl ">
                  <span className="leading-tight">
                    Siap Terima Tantangan? Cari, Temukan, dan Kalahkan Misi
                    Harian!
                  </span>
                </h4>
                <p className="text-dark-grey-shades-20 text-5x1 md:text-6x1 font-medium  mb-6">
                  Uji pengetahuanmu soal tanaman herbal lewat misi seru dan
                  kumpulkan badge eksklusif. Belajar jadi lebih menyenangkan!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Ajakan Section */}
      <section className="bg-[url(/asset/pattern.png)] bg-contain bg-top min-h-48 flex flex-col items-center justify-center gap-4 -mt-10 pt-20 md:pt-32 lg:pt-40 pb-16">
        {/* Teks di atas */}
        <h2 className="font-bold text-dark-green-shades-15 text-center text-3xl md:text-4xl lg:text-5xl">
          <span className="leading-tight">
            Mulai petualangan herbalmu <br /> bersama Herbplants
          </span>
        </h2>

        <Image
          src="/asset/maskot-lucu.png"
          alt="Maskot Lucu"
          className="max-w-56 sm:max-w-64 md:max-w-72 lg:max-w-80"
          width={480}
          height={480}
        />
      </section>
    </div>
  );
}
