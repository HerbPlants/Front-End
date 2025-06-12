"use client";
import React, { useEffect, useState } from "react";
import CardExplore from "@/components/my-components/CardExplore";
import { useToast } from "@/hooks/use-toast";
import LikeButton from "@/components/my-components/LikeButton";
import { fetchBestHerbs, likeHerb, unlikeHerb } from "@/services/herbService";
import LoadingSpinner from "@/components/my-components/LoadingSpinner";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import DialogCardPlants from "@/components/layout/DialogCardColection";
import { motion, AnimatePresence } from "framer-motion";

export default function ExploreSection() {
  const [liked, setLiked] = useState({});
  const [visibleHerbs, setVisibleHerbs] = useState([]);
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingLikeId, setLoadingLikeId] = useState(null);
  const { toast } = useToast();

  const router = useRouter();

  // Mengambil Data Best Tanaman
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token);

    const getData = async () => {
      try {
        const exploreData = await fetchBestHerbs(token);
        setData(exploreData || []);
      } catch (error) {
        console.error("Gagal fetch data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    getData();
  }, []);

  //Menampikan Data terbatas saja untuk view
  useEffect(() => {
    const updateVisibleHerbs = () => {
      const width = window.innerWidth;
      const maxItems = width < 640 ? 4 : 6;
      setVisibleHerbs(data.slice(0, maxItems));
    };

    updateVisibleHerbs();
    window.addEventListener("resize", updateVisibleHerbs);
    return () => window.removeEventListener("resize", updateVisibleHerbs);
  }, [data]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const initialLiked = {};
      data.forEach((item) => {
        initialLiked[item.herbId] = item.isLiked || false;
      });
      setLiked(initialLiked);
    }
  }, [data]);

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

  return (
    <section className="px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 ">
      <AnimatePresence>
        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore
          </motion.h2>

          <motion.p
            className="text-center max-w-screen-lg mx-auto text-sm sm:text-base md:text-base lg:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Telusuri berbagai jenis tanaman herbal dari seluruh Indonesia. Mulai
            dari tanaman langka hingga yang sering kamu lihat di halaman rumah,
            semua bisa kamu pelajari dengan fitur pencarian dan penjelasan yang
            mudah dipahami.
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {isLoading ? (
        <div className="min-h-[40vh] flex justify-center items-center">
          <LoadingSpinner message="Mengambil Data Tanaman" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {visibleHerbs.map((herb, index) => (
              <motion.div
                key={herb.herbId}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
    </section>
  );
}
