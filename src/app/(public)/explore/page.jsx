"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ExploreSearch from "@/components/layout/explore-page/ExploreSearch";
import LoadingOverlay from "@/components/my-components/LaodingOverlay";
import { fetchBestHerbs} from "@/services/herbService";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger,
} from "@/lib/motionVariants";

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

  return (
    <motion.div
      className="container max-w-screen-xl mx-auto flex flex-col items-center px-4 sm:px-6 gap-6"
      initial="hidden"
      animate="visible"
      variants={containerStagger}
    >
      {isLoading && <LoadingOverlay message="Mengambil Data Tanaman" />}

      <motion.section
        className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-4 md:gap-6 py-10 md:ml-6"
        variants={fadeUp}
      >
        <motion.div className="flex justify-center" variants={fadeRight}>
          <Image
            src="/images/logo/mascot-kiss.png"
            alt="Maskot Kiss Herbplants"
            width={640}
            height={640}
            className="max-w-sm lg:max-w-md"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4"
          variants={fadeLeft}
        >
          <h1 className="text-dark-green-shades-15 text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start">
            <span className="leading-tight">Jelajahi Tanaman Herbal</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start">
            Cari tanaman dan temukan manfaatnya!
          </p>
        </motion.div>
      </motion.section>

      <motion.section className="w-full pb-10" variants={fadeUp}>
        <ExploreSearch
          data={data}
          token={token}
        />
      </motion.section>
    </motion.div>
  );
};

export default ExplorePage;
