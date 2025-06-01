"use client";

import React, { useEffect, useState } from "react";
import { Heart, Bookmark, BookmarkCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const herbs = [
  {
    id: 1,
    name: "Daun Ketumbar",
    image: "/asset/daun_ketumbar.png",
    type: "Daun",
    description:
      "Membantu pencernaan, menurunkan kadar gula darah, dan kaya antioksidan.",
  },
  {
    id: 2,
    name: "Daun Bit",
    image: "/asset/daun_bit.png",
    type: "Daun",
    description:
      "Menurunkan tekanan darah, detoksifikasi tubuh, dan kaya zat besi.",
  },
  {
    id: 3,
    name: "Oregano",
    image: "/asset/oregano.png",
    type: "Daun",
    description: "Antibakteri, baik untuk pernapasan, dan mengandung vitamin K",
  },
  {
    id: 4,
    name: "Daun Kelor",
    image: "/asset/daun_kelor.png",
    type: "Daun",
    description:
      "Meningkatkan daya tahan tubuh, mengontrol gula darah, dan tinggi vitamin C.",
  },
  {
    id: 5,
    name: "Daun Kelor",
    image: "/asset/daun_kelor.png",
    type: "Daun",
    description:
      "Meningkatkan daya tahan tubuh, mengontrol gula darah, dan tinggi vitamin C.",
  },
  {
    id: 6,
    name: "Daun Kelor",
    image: "/asset/daun_kelor.png",
    type: "Daun",
    description:
      "Meningkatkan daya tahan tubuh, mengontrol gula darah, dan tinggi vitamin C.",
  },
];

export default function Home() {
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [visibleHerbs, setVisibleHerbs] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const updateVisibleHerbs = () => {
      const width = window.innerWidth;
      const maxItems = width < 640 ? 4 : 6;
      setVisibleHerbs(herbs.slice(0, maxItems));
    };

    updateVisibleHerbs();
    window.addEventListener("resize", updateVisibleHerbs);

    return () => window.removeEventListener("resize", updateVisibleHerbs);
  }, []);

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
              className="max-w-sm lg:max-w-md"
            />
          </div>
          <div className="flex flex-col items-center  lg:items-start  gap-6">
            <h1 className="text-dark-green-shades-15 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start">
              <span className="leading-tight">Kenali Tanaman Herbal di Sekitarmu dengan Cara Seru!</span>
            </h1>
            <p className="text-base md:text-lg text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start">
              Selamat datang di Herbplants, Belajar tanaman herbal jadi lebih
              menyenangkan. Yuk, jelajahi dunia tanaman herbal dari sekitar
              rumahmu! Di sini kamu bisa foto tanaman, pelajari manfaatnya, dan
              kumpulkan koleksi herbalmu sendiri sambil menyelesaikan tantangan
              seru.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-2 mt-6 w-full md:max-w-sm lg:w-full">
              <Button className="w-full lg:w-fit px-10 text-dark-grey-shades-15 font-medium transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:text-dark-grey-shades-15/70 ">
                Daftar
              </Button>
              <Button
                variant="outline"
                className="w-full lg:w-fit px-10 text-dark-grey-shades-15 font-medium transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:text-dark-grey-shades-15/70"
              >
                Masuk
              </Button>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className="px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 ">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2">
              Explore
            </h2>
            <p className="text-center max-w-screen-lg mx-auto text-sm sm:text-base md:text-base lg:text-xl text-gray-700">
              Telusuri berbagai jenis tanaman herbal dari seluruh Indonesia.
              Mulai dari tanaman langka hingga yang sering kamu lihat di halaman
              rumah, semua bisa kamu pelajari dengan fitur pencarian dan
              penjelasan yang mudah dipahami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {visibleHerbs.map((herb) => (
              <Card
                key={herb.id}
                className="bg-green-shades-95 border-green-shades-90 group rounded-xl p-4 shadow-sm flex flex-col transition hover:shadow-md space-y-2"
              >
                <CardHeader className="rounded-lg overflow-hidden p-0">
                  <Image
                    width={480}
                    height={480}
                    src={herb.image}
                    alt={herb.name}
                    className="aspect-[12/7] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </CardHeader>

                <CardContent className="p-0 flex flex-col gap-2 pt-4">
                  <div className="">
                    <div className="text-sm text-dark-grey-shades-20">
                      {herb.type}
                    </div>
                    <div className="font-semibold text-lg text-dark-grey-shades-15">
                      <span className="leading-tight">
                      {herb.name}</span>
                    </div>
                  </div>

                  <p className="text-xs text-dark-grey-shades-30 mb-2 line-clamp-3">
                    {herb.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-0">
                  <Link
                    href={`/herbs/${herb.id}`}
                    className="text-[#273c2c] text-xs font-semibold border-b border-[#bfea51] w-fit hover:text-[#bfea51] transition"
                  >
                    Selengkapnya
                  </Link>
                  <div className="flex-shrink-0 flex gap-2">
                    <Button
                      variant="outline"
                      title="Suka"
                      className="w-8 h-8 rounded"
                      onClick={() => toggleLike(herb.id)}
                    >
                      {liked[herb.id] ? (
                        <Heart className="text-red-500 fill-red-500" />
                      ) : (
                        <Heart className="text-dark-grey-shades-30" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      title="Simpan"
                      className="w-8 h-8 rounded"
                      onClick={() => toggleSave(herb.id)}
                    >
                      {saved[herb.id] ? (
                        <BookmarkCheck className="text-yellow-500 fill-yellow-500" />
                      ) : (
                        <Bookmark className="text-dark-grey-shades-30" />
                      )}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Hero Langkah Section */}
        <section className="mx-auto flex flex-col items-center md:flex-row-reverse lg:justify-center gap-5 md:px-6">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/asset/mascot-mulai.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-md"
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
          {[
            {
              title: "Snap",
              shortDesc: "Mulai dengan foto tanaman sekitarmu",
              desc: "Foto tanaman herbal langsung dari kamera atau galeri. Sistem akan otomatis mendeteksinya.",
              step: 1,
              button: "Mulai Foto",
            },
            {
              title: "Read",
              shortDesc: "Baca info menarik seputar tanaman",
              desc: "Kenali dan pelajari nama, jenis, manfaat dan fakta unik seputar tanaman yang kamu temukan.",
              step: 2,
              button: "Jelajahi Tanaman",
            },
            {
              title: "Collect",
              shortDesc: "Simpan dan buat koleksi tanaman virtualmu",
              desc: "Simpan tanaman favoritmu dan kumpulkan sebanyaknya untuk mendapatkan poin.",
              step: 3,
              button: "Koleksi Tanamanmu",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-green-shades-95 border-green-shades-90 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md gap-4 justify-between flex-grow flex-shrink md:max-w-[23rem]"
            >
              <CardContent className="p-0 flex flex-col gap-4 flex-grow justify-between">
                <div className="">
                  <h3 className="text-lg md:text-xl font-semibold text-dark-grey-shades-15">
                    {item.title}
                  </h3>
                  <h4 className="text-md md:text-base text-dark-grey-shades-30 font-medium">
                    {item.shortDesc}
                  </h4>
                </div>

                <p className="text-sm md:text-base text-dark-grey-shades-15">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-md font-medium text-dark-grey-shades-20">
                    Langkah
                  </p>
                  <h6 className="text-dark-green-shades-25 font-bold text-4xl">
                    {item.step}
                  </h6>
                </div>
              </CardContent>
              <CardFooter className="p-0 w-full">
                <Button className="w-full">{item.button}</Button>
              </CardFooter>
            </Card>
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
                  <span className="leading-tight">Siap Terima Tantangan? Cari, Temukan, dan Kalahkan Misi Harian!</span>
                </h4>
                <p className="text-dark-grey-shades-20 text-5x1 md:text-6x1 font-medium  mb-6">
                  Uji pengetahuanmu soal tanaman herbal lewat misi seru dan kumpulkan badge eksklusif. Belajar jadi lebih menyenangkan!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Ajakan Section */}
      <section className="bg-[url(/asset/pattern.png)] bg-contain bg-top min-h-48 flex flex-col items-center justify-center gap-4 -mt-10 pt-20 md:pt-32 lg:pt-44 pb-20">

        {/* Teks di atas */}
        <h2 className="font-bold text-dark-green-shades-15 text-center text-3xl md:text-4xl lg:text-5xl">
          <span className="leading-tight">Mulai petualangan herbalmu <br /> bersama Herbplants</span>
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
