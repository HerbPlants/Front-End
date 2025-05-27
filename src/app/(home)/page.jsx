"use client";

import React, { useState } from "react";
import FormRegister from "@/components/layout/form/FormRegister";
import { Button } from "@/components/ui/button";
import { Heart, Bookmark, BookmarkCheck } from "lucide-react";


const herbs = [
  {
    id: 1,
    name: "Daun Ketumbar",
    image: "/asset/daun_ketumbar.png",
    type: "Daun",
    description: "Membantu pencernaan, menurunkan kadar gula darah, dan kaya antioksidan.",
  },
  {
    id: 2,
    name: "Daun Bit",
    image: "/asset/daun_bit.png",
    type: "Daun",
    description: "Menurunkan tekanan darah, detoksifikasi tubuh, dan kaya zat besi.",
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
    description: "Meningkatkan daya tahan tubuh, mengontrol gula darah, dan tinggi vitamin C.",
  },
];


export default function Home() {
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleSave = (id) => {
    setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {/* Hero Section */}
       <section className="flex items-center gap-8" >
        <img
          src="/asset/mascot-hero.png"
          alt="Maskot Herbplants"
          className="w-[700px] h-auto"
        />
        <div>
          <h1 className="text-[36px] md:text-[58px] font-urbanist font-bold leading-tight">
            Kenali Tanaman Herbal di Sekitarmu dengan Cara Seru!
          </h1>
          <p className="text-[18px] md:text-[18px] font-urbanist font-medium mt-4 text-gray-600">
            Selamat datang di Herbplants. Belajar tanaman herbal jadi lebih menyenangkan.
            Yuk, jelajahi dunia tanaman herbal dari sekitar rumahmu!
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-[#bfea51] hover:bg-green-800 text-white px-4 py-2 rounded-my font-semibold">
              Daftar
            </Button>
            <Button  className="border px-4 py-2 rounded-md font-semibold">
              Masuk
            </Button>
          </div>
        </div>
      </section>
      
      {/* Explore Section */}
      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">Explore</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto text-sm md:text-base text-gray-700">
          Telusuri berbagai jenis tanaman herbal dari seluruh Indonesia. Mulai dari tanaman langka hingga yang sering kamu lihat di halaman rumah, semua bisa kamu pelajari dengan fitur pencarian dan penjelasan yang mudah dipahami.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {herbs.map((herb) => (
            <div key={herb.id} className="bg-[#f7faec] rounded-xl p-4 shadow-sm flex flex-col">
              <img
                src={herb.image}
                alt={herb.name}
                className="rounded-lg w-full h-52 sm:h-56 object-cover mb-4"
              />
              {/* Flex row: info kiri, tombol kanan */}
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="text-sm text-gray-500">{herb.type}</div>
                  <div className="font-semibold text-lg">{herb.name}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    title="Suka"
                    className="p-2 rounded hover:bg-gray-100"
                    onClick={() => toggleLike(herb.id)}
                  >
                    {liked[herb.id] ? (
                      <Heart className="text-red-500 fill-red-500" />
                    ) : (
                      <Heart className="text-gray-400" />
                    )}
                  </button>
                  <button
                    title="Simpan"
                    className="p-2 rounded hover:bg-gray-100"
                    onClick={() => toggleSave(herb.id)}
                  >
                    {saved[herb.id] ? (
                      <BookmarkCheck className="text-yellow-500 fill-yellow-500" />
                    ) : (
                      <Bookmark className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="text-xs mt-2 mb-2 text-gray-700">{herb.description}</div>
              {/* Selengkapnya */}
              <a
                href={`/herbs/${herb.id}`}
                className="text-[#273c2c] text-xs font-semibold border-b border-[#bfea51] w-fit hover:text-[#bfea51] transition"
              >
                Selengkapnya
              </a>
            </div>
          ))}
        </div>
      </section>

            {/* Hero Langkah Section */}
      <section className="bg-white py-16 px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 mt-20">
        <div className="max-w-xl w-full">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Mulai dari Langkah kecil</h4>
          <h1 className="text-5xl md:text-6xl font-bold text-[#273c2c] mb-6 leading-tight">Snap. Read. Collect.</h1>
          <p className="text-5x1 md:text-6x1 font-semibold text-gray-700 mb-6 leading-tight">
            Ambil foto tanaman, baca info menariknya, dan kumpulkan sebagai koleksi tanaman herbalmu!
          </p>
          <Button className="bg-[#fbfdef] border border-[#cfe69f] hover:bg-[#dcefa3] px-6 py-2 text-[#273c2c] text-lg font-medium px-8 py-3 rounded-md">
            Mulai Jelajah
          </Button>
        </div>
        <img
          src="/asset/maskot-mulai.png"
          alt="Maskot Mulai"
          className="w-[600px] h-auto"
        />
      </section>

      {/* 3 Langkah Section */}
      <section className="bg-[#fbfdef] py-10 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "Snap",
            desc: "Mulai dengan foto tanaman sekitarmu. Foto tanaman herbal langsung dari kamera atau galeri. Sistem akan otomatis mendeteksinya.",
            step: 1,
            button: "Mulai Foto"
          },
          {
            title: "Read",
            desc: "Kenali dan pelajari nama, jenis, manfaat dan fakta unik seputar tanaman yang kamu temukan.",
            step: 2,
            button: "Jelajahi Tanaman"
          },
          {
            title: "Collect",
            desc: "Simpan tanaman favoritmu dan kumpulkan sebanyaknya untuk mendapatkan poin.",
            step: 3,
            button: "Koleksi Tanamanmu"
          },
        ].map((item, index) => (
          <div key={index} className="bg-[#f5f9e6] rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
              <span className="text-md font-bold text-[#273c2c]">Langkah {item.step}</span>
            </div>
            <Button className="bg-[#dcefa3] hover:bg-[#bfea51] mt-4">{item.button}</Button>
          </div>
        ))}
      </section>

      {/* Challenge Section */}
      <section className="relative bg-white py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 mt-20 overflow-visible">
        {/* Maskot absolute agar overlap ke bawah */}
        <img
          src="/asset/maskot-challenge.png"
          alt="Maskot Challenge"
          className="w-[600px] h-auto mb-8 lg:mb-0 lg:absolute left-1/2 -translate-x-1/2 bottom-[-60px] z-10"
          style={{ left: '25%' }} // Atur posisi horizontal jika perlu
        />
        <div className="max-w-xl text-center lg:text-left lg:ml-auto">
          <h4 className="text-sm uppercase font-medium text-gray-600 mb-2">Challenges for Fun</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#273c2c] mb-3 leading-tight">
            Siap Terima Tantangan? <br />
            Cari, Temukan, dan <br />
            Kalahkan Misi Harian!
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Uji pengetahuanmu soal tanaman herbal lewat misi seru dan kumpulkan badge eksklusif. 
            Belajar jadi lebih menyenangkan!
          </p>
        </div>
      </section>

      {/* Ajakan Section */}
      <section 
        className="bg-[#fbfdef] py-20 px-6 md:px-12 text-center relative overflow-hidden mt-0"
        style={{
          backgroundImage: 'url("/asset/pattern.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1250px'
        }}
      >
        {/* Oval putih full width, soft, dinaikkan */}
        <div className="absolute left-0 right-0 -top-12 w-full h-28 bg-white rounded-b-[100%] opacity-90 blur-[2px] z-0"></div>
        
        {/* Teks di atas */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#273c2c] leading-tight relative z-10 mb-6">
          Mulai petualangan herbalmu <br /> bersama Herbplants
        </h2>

        <img
          src="/asset/maskot-lucu.png"
          alt="Maskot Lucu"
          className="w-[200px] h-auto mx-auto relative z-10"
        />
      </section>


    </div>
  );
}
