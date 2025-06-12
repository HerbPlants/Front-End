"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TabsFavorite from "@/components/layout/collections/TabsFavorite";
import { getHistoryPredictHerbs, getLikedHerbs } from "@/services/herbService";
import LoadingOverlay from "@/components/my-components/LaodingOverlay";
import TabsHistory from "@/components/layout/collections/TabsHistory";

const CollectionsPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [token, setToken] = useState(null);
  const [dataFavorite, setDataFavorite] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("accessToken");
    setToken(token);

    const getData = async () => {
      try {
        const favoriteData = await getLikedHerbs(token);
        setDataFavorite(favoriteData || []);

        const historyData = await getHistoryPredictHerbs(token);
        setDataHistory(historyData || []);
      } catch (error) {
        // console.error("Gagal fetch data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    if (token) getData();
    else setIsLoading(false);
  }, []);

  return (
    <section className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {isLoading && <LoadingOverlay message="Mengambil Data Tanaman" />}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-4 md:gap-8 lg:gap-14 py-10"
      >
        <div className="flex justify-center">
          <Image
            src="/images/logo/mascot-kiss.png"
            alt="Maskot Kiss Herbplants"
            width={640}
            height={640}
            className="max-w-sm lg:max-w-md"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-dark-green-shades-15 text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start">
            <span className="leading-tight">Koleksi Tanamanmu</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start">
            Semua tanaman yang telah kamu kumpulkan tersimpan disini
          </p>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <div className="flex justify-center">
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full px-4 py-[22px]"
        >
          {/* Tabs Navigation */}
          <TabsList className="rounded-b-2xl flex justify-center gap-28 text-dark-grey-shades-99 bg-dark-green-shades-20 py-11">
            {/* Mobile Select */}
            <div className="block lg:hidden w-full px-4">
              <Select value={selectedTab} onValueChange={setSelectedTab}>
                <SelectTrigger className="w-full bg-white text-black">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="favorit">Tanaman Favorit</SelectItem>
                  <SelectItem value="tersimpan">Tanaman Tersimpan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:px-20 xl:px-32 lg:w-full lg:flex lg:justify-between">
              <TabsTrigger value="all" className="tab-trigger">
                All
              </TabsTrigger>
              <TabsTrigger value="favorit" className="tab-trigger">
                Tanaman Favorit
              </TabsTrigger>
              <TabsTrigger value="tersimpan" className="tab-trigger">
                Tanaman Tersimpan
              </TabsTrigger>
            </div>
          </TabsList>

          {/* Tabs Content */}
          {!token ? (
            <div className="text-center py-20 text-lg text-dark-grey-shades-30">
              <p>
                <strong>Kamu harus login</strong> untuk melihat koleksi
                tanamanmu.
              </p>
            </div>
          ) : (
            <div className="text-black px-4 py-10">
              <AnimatePresence mode="wait">
                {selectedTab === "all" && (
                  <TabsContent value="all" forceMount>
                    <motion.div
                      key="all"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dataFavorite.length === 0 && dataHistory.length === 0 ? (
                        <p className="text-center w-full col-span-full">
                          Tidak ada yang ditampilkan
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                          <TabsFavorite data={dataFavorite} />
                          <TabsHistory data={dataHistory} />
                        </div>
                      )}
                    </motion.div>
                  </TabsContent>
                )}

                {selectedTab === "favorit" && (
                  <TabsContent value="favorit" forceMount>
                    <motion.div
                      key="favorit"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dataFavorite.length === 0 ? (
                        <p className="text-center w-full">
                          Tidak ada yang ditampilkan
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                          <TabsFavorite data={dataFavorite} />
                        </div>
                      )}
                    </motion.div>
                  </TabsContent>
                )}

                {selectedTab === "tersimpan" && (
                  <TabsContent value="tersimpan" forceMount>
                    <motion.div
                      key="tersimpan"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dataHistory.length === 0 ? (
                        <p className="text-center w-full">
                          Tidak ada yang ditampilkan
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                          <TabsHistory data={dataHistory} />
                        </div>
                      )}
                    </motion.div>
                  </TabsContent>
                )}
              </AnimatePresence>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default CollectionsPage;
