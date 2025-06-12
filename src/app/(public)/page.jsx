"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardStep from "@/components/layout/landing-page/CardStep";
import { StepDataDummy } from "@/data/landing-page-data";
import ExploreSection from "@/components/layout/landing-page/ExploreSection";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger,
} from "@/lib/motionVariants";

export default function Home() {
  const stepData = StepDataDummy;

  return (
    <div className="">
      <div className="container max-w-screen-xl space-y-10 sm:space-y-16 lg:space-y-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 md:gap-8 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src="/asset/mascot-hero-square.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-52 sm:max-w-sm lg:max-w-md"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <motion.h1
              variants={fadeUp}
              className="text-dark-green-shades-15 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-start"
            >
              Kenali Tanaman Herbal di Sekitarmu dengan Cara Seru!
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-dark-grey-shades-20 w-11/12 md:w-full text-center lg:text-start"
            >
              Selamat datang di Herbplants, Belajar tanaman herbal jadi lebih
              menyenangkan. Yuk, jelajahi dunia tanaman herbal dari sekitar
              rumahmu!
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-2 mt-6 w-full md:max-w-sm lg:w-full"
            >
              <Link href="/register" className="w-full lg:w-fit">
                <Button className="w-full px-10">Daftar</Button>
              </Link>
              <Link href="/login" className="w-full lg:w-fit">
                <Button variant="outline" className="w-full px-10">
                  Masuk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Explore Section */}
        <ExploreSection />

        {/* Hero Langkah Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mx-auto flex flex-col items-center md:flex-row-reverse lg:justify-center gap-5 md:px-6"
        >
          <motion.div
            variants={fadeLeft}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/asset/mascot-mulai.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-xssm:max-w-sm md:max-w-xs lg:max-w-md"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="lg:w-7/12 flex flex-col mt-6"
          >
            <motion.div
              variants={fadeRight}
              className="flex flex-col gap-6 md:gap-8 lg:gap-10"
            >
              <motion.h4
                variants={fadeUp}
                className="text-xl font-semibold underline underline-offset-[12px] decoration-green-shades-70 decoration-4 text-dark-green-shades-15"
              >
                Mulai dari Langkah kecil
              </motion.h4>
              <motion.h1
                variants={fadeUp}
                className="text-5xl font-bold text-dark-green-shades-15 md:text-4xl lg:text-6xl"
              >
                Snap. Read. Collect.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-dark-grey-shades-20 font-medium mb-6"
              >
                Ambil foto tanaman, baca info menariknya, dan kumpulkan sebagai
                koleksi tanaman herbalmu!
              </motion.p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link className="w-full" href={'/explore'}>
              <Button variant="outline" className="w-full md:w-fit">
                Mulai Jelajah
              </Button></Link>
              
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 3 Langkah Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mx-auto flex flex-wrap justify-center gap-6 sm:px-4"
        >
          {stepData.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <CardStep data={item} />
            </motion.div>
          ))}
        </motion.section>

        {/* Challenge Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
          className="mx-auto flex flex-col items-center md:flex-row-reverse lg:justify-center gap-5 md:px-6"
        >
          <motion.div
            variants={fadeLeft}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/asset/maskot-challenge.png"
              alt="Maskot Herbplants"
              width={640}
              height={640}
              className="max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-lg"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="lg:w-7/12 flex flex-col mt-6"
          >
            <motion.div
            variants={fadeRight} className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <motion.h4
                variants={fadeUp}
                className="text-2xl font-semibold underline underline-offset-[12px] decoration-green-shades-70 decoration-4 text-dark-green-shades-15"
              >
                Challenges for Fun
              </motion.h4>
              <motion.div
            variants={fadeUp} className="w-full flex flex-col gap-2 md:gap-4 lg:gap-6">
                <motion.h4
                  variants={fadeUp}
                  className="font-bold text-3xl md:text-4xl lg:text-5xl text-dark-green-shades-15"
                >
                  Siap Terima Tantangan? Cari, Temukan, dan Kalahkan Misi
                  Harian!
                </motion.h4>
                <motion.p
                  variants={fadeUp}
                  className="text-dark-grey-shades-20 font-medium mb-6"
                >
                  Uji pengetahuanmu soal tanaman herbal lewat misi seru dan
                  kumpulkan badge eksklusif. Belajar jadi lebih menyenangkan!
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Ajakan Section */}
      <section className="bg-[url(/asset/pattern.png)] bg-contain bg-top min-h-48 flex flex-col items-center justify-center gap-4 -mt-10 pt-20 md:pt-32 lg:pt-40 pb-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-bold text-dark-green-shades-15 text-center text-3xl md:text-4xl lg:text-5xl"
        >
          Mulai petualangan herbalmu <br /> bersama Herbplants
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/asset/maskot-lucu.png"
            alt="Maskot Lucu"
            className="max-w-56 sm:max-w-64 md:max-w-72 lg:max-w-80"
            width={480}
            height={480}
          />
        </motion.div>
      </section>
    </div>
  );
}
