"use client";

import { Heart, Import } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CollectionsPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-dark-green-shades-15 text-4xl font-bold lg:text-5xl">
              Koleksi Tanamanmu
            </h1>
            <p className="text-dark-green-shades-15 font-semibold">
              Semua tanaman yang kamu kumpulkan tersimpan disini
            </p>
          </div>
        </div>

        {/* hero image */}
        <div className="flex justify-center items-center">
          <img
            src="/asset/mascot-hero.png"
            alt="Hero"
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>

      {/* Tabs section */}
      <div className="flex justify-center">
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full px-4 py-[22px]"
        >
          <TabsList className="rounded-b-2xl flex justify-center gap-28 text-dark-grey-shades-99 bg-dark-green-shades-20 py-11">
            {/* HP: hanya tampil kategori */}
            <div className="block md:hidden w-full px-4">
              <Select value={selectedTab} onValueChange={setSelectedTab}>
                <SelectTrigger className="w-full bg-white text-black">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="herbal">Tanaman Herbal</SelectItem>
                  <SelectItem value="misterius">Tanaman Misterius</SelectItem>
                  <SelectItem value="favorit">Tanaman Favorit</SelectItem>
                  <SelectItem value="tersimpan">Tanaman Tersimpan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tablet & Desktop: tampil "All" */}
            <TabsTrigger value="all" className="hidden md:inline">
              All
            </TabsTrigger>

            {/* Tablet & Desktop: tampil "Tanaman Herbal" */}
            <TabsTrigger value="herbal" className="hidden md:inline">
              Tanaman Herbal
            </TabsTrigger>

            {/* Tablet ONLY: tampil "Lainnya" sebagai pengganti misterius */}
            <div className="hidden md:inline lg:hidden">
              <Select onValueChange={(value) => setSelectedTab(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lainnya" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="misterius">Tanaman Misterius</SelectItem>
                  <SelectItem value="favorit">Tanaman Favorit</SelectItem>
                  <SelectItem value="tersimpan">Tanaman Tersimpan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Desktop ONLY: tampil asli "Tanaman Misterius", "Favorit", dan "Tersimpan" */}
            <TabsTrigger value="misterius" className="hidden lg:inline">
              Tanaman Misterius
            </TabsTrigger>
            <TabsTrigger value="favorit" className="hidden lg:inline">
              Tanaman Favorit
            </TabsTrigger>
            <TabsTrigger value="tersimpan" className="hidden lg:inline">
              Tanaman Tersimpan
            </TabsTrigger>
          </TabsList>

          {/* ini bagian card ALL nya  */}

          <div className="text-black pt-16">
            <TabsContent value="all">
              {/* card semua */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {/* Card 1 */}

                {/* batas biar gak bingung saya  */}

                {/* Card 1 dengan Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                      <CardHeader className="p-2 md:p-3">
                        <img
                          src="/asset/daun_bit.png"
                          alt="Tanaman Jahe"
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-3 md:p-4 lg:p-5">
                        <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                          Tanaman Jahe
                        </h2>
                        <p className="text-xs md:text-sm text-gray-500">
                          29 Mei 2025
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto no-scrollbar bg-green-shades-95 p-4">
                    <DialogHeader>
                      <div className="text-start pt-5">
                        <img src="/asset/daun_bit.png" alt="" />
                        <p className="pt-7">Daun</p>
                      </div>
                      <div className="pb-4 text-start font-bold">
                        Tanaman Orthosiphon aristatus - Kumis Kucing
                      </div>
                      <div className="text-black text-start">
                        <div className="pb-3">
                          <h1 className="font-bold ">Taxonomy :</h1>
                          <li>Kingdom: Plantae</li>
                          <li>Phylum: Tracheophyta</li>
                          <li>Class: Magnoliopsida</li>
                          <li>Order: Lamiales</li>
                          <li>Family: Lamiaceae</li>
                          <li>Genus: Orthosiphon</li>
                        </div>
                        <div className="pb-3">
                          <h1 className="font-bold pb-2">Deskripsi : </h1>
                          <p>
                            Orthosiphon aristatus atau dikenal dengan nama kumis
                            kucing termasuk tanaman dari famili
                            Lamiaceae/Labiatae. Tanaman ini merupakan salah satu
                            tanaman obat asli Indonesia yang mempunyai manfaat
                            dan kegunaan yang cukup banyak dalam menanggulangi
                            berbagai penyakit.
                          </p>
                        </div>
                        <div>
                          <h1 className="font-bold pb-2">Manfaat :</h1>
                          <p className="">
                            Tanaman kumis kucing memiliki berbagai manfaat untuk
                            kesehatan. Misalnya untuk mengobati masalah
                            pernapasan, mencegah jamur, detoks alami, membantu
                            menurunkan berat badan, dan menangani masalah
                            diabetes. Kumis kucing juga populer disebut sebagai
                            tanaman Ginjal, bisa jadi karena tanaman ini dapat
                            mengobati gangguan ginjal. Tanaman ini bermanfaat
                            digunakan untuk mengobati infeksi ginjal akut dan
                            kronis, infeksi kandung kemih, infeksi saluran
                            kemih, permasalahan sering buang air kecil dan
                            keberadaan batu kandung kemih.
                          </p>
                        </div>
                      </div>
                      <DialogTitle></DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-between items-center w-full mt-4">
                      <DialogClose asChild>
                        <Button variant="outline">Tutup</Button>
                      </DialogClose>

                      <div className="flex gap-2">
                        <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />
                        <Import className="w-5 h-5 text-gray-700 cursor-pointer" />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* batas biar gak bingung saya  */}

                {/* Card 2 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 4 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 5 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 6 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 7 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 8 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>

                {/* Card 9 */}
                <Card className="w-full bg-green-shades-95 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-2 md:p-3">
                    <img
                      src="/asset/daun_bit.png"
                      alt="Tanaman Jahe"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 lg:p-5">
                    <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 line-clamp-2">
                      Tanaman Jahe
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      29 Mei 2025
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* ini bagian card ALL nya  */}

            <TabsContent value="herbal">
              <p>Tanaman Herbal di sini...</p>
            </TabsContent>
            <TabsContent value="misterius">
              <p>Tanaman Misterius di sini...</p>
            </TabsContent>
            <TabsContent value="favorit">
              <p>Tanaman Favorit di sini...</p>
            </TabsContent>
            <TabsContent value="tersimpan">
              <p>Tanaman Tersimpan di sini...</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default CollectionsPage;