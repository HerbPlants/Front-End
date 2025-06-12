"use client";
import ExploreSearch from "@/components/layout/explore-page/ExploreSearch";
import LoadingOverlay from "@/components/my-components/LaodingOverlay";
import { fetchBestHerbs, likeHerb, unlikeHerb } from "@/services/herbService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ExplorePage = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="container max-w-screen-xl mx-auto flex flex-col items-center px-4 sm:px-6 gap-6">
      {isLoading && <LoadingOverlay message="Mengambil Data Tanaman" />}
      <section className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-4 md:gap-6 py-10 md:ml-6">
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
            <span className="leading-tight">Jelajahi Tanaman Herbal</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start">
            Cari tanaman dan temukan manfaatnya!
          </p>
        </div>
      </section>
      <section className="w-full pb-10">
        <ExploreSearch data={data} token={token} />
      </section>
    </div>
  );
};

export default ExplorePage;
