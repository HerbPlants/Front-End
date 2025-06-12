"use client";
import React, { useState, useEffect } from "react";
import CardExplore from "@/components/my-components/CardExplore";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SearchIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LikeButton from "@/components/my-components/LikeButton";
import { likeHerb, unlikeHerb } from "@/services/herbService";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import DialogCardPlants from "../DialogCardColection";
import NotFoundPlants from "@/components/my-components/NotFoundPlants";
import { motion, AnimatePresence } from "framer-motion";

const ExploreSearch = ({ data, token }) => {
  const [liked, setLiked] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);
  const [loadingLikeId, setLoadingLikeId] = useState(null);

  const { toast } = useToast();
  const router = useRouter();

  const toggleLike = async (id, imageUrl) => {
    if (!token || token.trim() === "") {
      toast({
        className: "bg-dark-green-shades-20 text-white border-none",
        title: "Tidak Bisa Menyukai",
        description: (
          <h2 className="text-sm">
            Anda harus login untuk menyukai tanaman ini.
          </h2>
        ),
        action: (
          <ToastAction
            className="text-sm hover:bg-green-shades-85 hover:text-dark-green-shades-20 py-4 px-6"
            onClick={() => {
              router.push("/login");
            }}
            altText="Okey"
          >
            Login
          </ToastAction>
        ),
        duration: 3500,
      });
      return;
    }

    if (loadingLikeId === id) return;

    const previous = liked[id] || false;
    setLiked((prev) => ({ ...prev, [id]: !previous }));
    setLoadingLikeId(id);

    try {
      if (!previous) {
        await likeHerb(id, token, imageUrl);
      } else {
        await unlikeHerb(id, token);
      }

      toast({
        className: "bg-dark-green-shades-20 text-white border-none",
        title: "Berhasil!",
        description: `Tanaman berhasil ${!previous ? "Like" : "Unlike"}`,
      });
    } catch (error) {
      setLiked((prev) => ({ ...prev, [id]: previous }));
      console.error(error);
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Gagal memberi like tanaman.",
      });
    } finally {
      setLoadingLikeId(null);
    }
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const initialLiked = {};
      data.forEach((item) => {
        initialLiked[item.herbId] = item.isLiked || false;
      });
      setLiked(initialLiked);
    }
  }, [data]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = data.filter(
      (herb) =>
        herb.name.toLowerCase().includes(term) ||
        herb.khasiat.toLowerCase().includes(term)
    );

    setFilteredData(results);
  }, [searchTerm, data]);

  return (
    <motion.div
      className="w-full space-y-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full mx-auto rounded-b-2xl flex justify-between items-center text-dark-grey-shades-99 bg-dark-green-shades-20 px-10 py-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="hidden w-full md:inline-block">
          Explore Tanaman Herbal
        </h2>
        <div className="relative w-full flex justify-center items-center">
          <SearchIcon
            className="absolute left-2 text-dark-green-shades-15"
            size={20}
          />
          <Separator orientation="vertical" />
          <Input
            className="w-full pl-10"
            placeholder="Cari Tanaman Herbal berdasarkan nama atau khasiat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      {filteredData.length === 0 ? (
        <NotFoundPlants />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredData.map((herb, index) => (
              <motion.div
                key={herb.herbId}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CardExplore data={herb}>
                  <div className="w-full flex justify-between items-center">
                    <DialogCardPlants data={herb.herb} image={herb.image} />
                    <LikeButton
                      isLiked={liked[herb.herbId]}
                      onClick={() => toggleLike(herb.herbId, herb.image)}
                      disbled={loadingLikeId === herb.herbId}
                    />
                  </div>
                </CardExplore>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreSearch;
