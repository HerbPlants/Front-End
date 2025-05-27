
import FormRegister from "@/components/layout/form/FormRegister";
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";

export default function Home() {

  return (
    <div>
       <section className="flex items-center gap-8" >
        <img
          src="/asset/mascot-hero.png"
          alt="Maskot Herbplants"
          className="w-[400px] h-auto"
        />
        <div>
          <h1 className="text-[58px] font-urbanist font-bold">Kenali Tanaman Herbal di Sekitarmu dengan Cara Seru!</h1>
          <p className="text-[18px] font-urbanist font-medium">
            Selamat datang di Herbplants. Belajar tanaman herbal jadi lebih menyenangkan.
            Yuk, jelajahi dunia tanaman herbal dari sekitar rumahmu!
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-[#bfea51] hover:bg-green-800">Daftar</Button>
            <Button  variant="outline">Masuk</Button>
          </div>
        </div>
      </section>
      

<section className="mt-16">
  <h2 className="text-3xl font-bold text-center mb-2">Explore</h2>
  <p className="text-center mb-8">
    Telusuri berbagai jenis tanaman herbal dari seluruh Indonesia. Mulai dari tanaman langka hingga yang sering kamu lihat di halaman rumah, semua bisa kamu pelajari dengan fitur pencarian dan penjelasan yang mudah dipahami.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="bg-[#f7faec] rounded-xl p-4 shadow-sm">
      <img src="/asset/daun_ketumbar.png" alt="Daun Ketumbar" className="rounded-lg w-full h-56 object-cover mb-4" />
      <div className="text-sm text-gray-500">Daun</div>
      <div className="font-semibold text-lg">Daun Ketumbar</div>
      <div className="text-xs mt-2 mb-4">Memiliki khasiat yang dapat menghangatkan tubuh</div>
      <div className="flex gap-2">
        <button title="Suka" className="p-2 rounded hover:bg-gray-100">
          {/* Ganti dengan icon */}
          <span>♡</span>
        </button>
        <button title="Simpan" className="p-2 rounded hover:bg-gray-100">
          {/* Ganti dengan icon */}
          <span>🔖</span>
        </button>
      </div>
    </div>
    {/* Card 2 */}
    <div className="bg-[#f7faec] rounded-xl p-4 shadow-sm">
      <img src="/asset/tanaman2.jpg" alt="Tanaman Jahe" className="rounded-lg w-full h-56 object-cover mb-4" />
      <div className="text-sm text-gray-500">Daun</div>
      <div className="font-semibold text-lg">Tanaman Jahe</div>
      <div className="text-xs mt-2 mb-4">Memiliki khasiat yang dapat menghangatkan tubuh</div>
      <div className="flex gap-2">
        <button title="Suka" className="p-2 rounded hover:bg-gray-100">
          <span>♡</span>
        </button>
        <button title="Simpan" className="p-2 rounded hover:bg-gray-100">
          <span>🔖</span>
        </button>
      </div>
    </div>
    {/* Card 3 */}
    <div className="bg-[#f7faec] rounded-xl p-4 shadow-sm">
      <img src="/asset/tanaman3.jpg" alt="Tanaman Jahe" className="rounded-lg w-full h-56 object-cover mb-4" />
      <div className="text-sm text-gray-500">Daun</div>
      <div className="font-semibold text-lg">Tanaman Jahe</div>
      <div className="text-xs mt-2 mb-4">Memiliki khasiat yang dapat menghangatkan tubuh</div>
      <div className="flex gap-2">
        <button title="Suka" className="p-2 rounded hover:bg-gray-100">
          <span>♡</span>
        </button>
        <button title="Simpan" className="p-2 rounded hover:bg-gray-100">
          <span>🔖</span>
        </button>
      </div>
    </div>
    {/* Card 4 */}
    <div className="bg-[#f7faec] rounded-xl p-4 shadow-sm">
      <img src="/asset/tanaman4.jpg" alt="Tanaman Jahe" className="rounded-lg w-full h-56 object-cover mb-4" />
      <div className="text-sm text-gray-500">Daun</div>
      <div className="font-semibold text-lg">Tanaman Jahe</div>
      <div className="text-xs mt-2 mb-4">Memiliki khasiat yang dapat menghangatkan tubuh</div>
      <div className="flex gap-2">
        <button title="Suka" className="p-2 rounded hover:bg-gray-100">
          <span>♡</span>
        </button>
        <button title="Simpan" className="p-2 rounded hover:bg-gray-100">
          <span>🔖</span>
        </button>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}
