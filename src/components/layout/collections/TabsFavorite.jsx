"use client";

import React, { useEffect, useState } from "react";
import CardExplore from "@/components/my-components/CardExplore";
import DialogCardColection from "./DialogCardColection";
import { likeHerb, unlikeHerb } from "@/services/herbService";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const TabsFavorite = ({ data = [] }) => {
  const [liked, setLiked] = useState({});
  const [loadingLikeId, setLoadingLikeId] = useState(null);
  const [token, setToken] = useState(null);

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || null);

    const initialLikedState = {};
    data.forEach((item) => {
      initialLikedState[item.herb.herbId] = item.isLiked;
    });
    setLiked(initialLikedState);
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
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Gagal memberi like tanaman.",
      });
    } finally {
      setLoadingLikeId(null);
    }
  };

  return data.map((herb, index) => (
    <CardExplore key={index} data={herb}>
      <DialogCardColection
        data={herb.herb}
        image={herb.image}
        isLiked={liked[herb.herb.herbId]}
        handleLike={() => toggleLike(herb.herb.herbId, herb.image)}
        disabled={loadingLikeId === herb.herb.herbId}
      />
    </CardExplore>
  ));
};

export default TabsFavorite;
