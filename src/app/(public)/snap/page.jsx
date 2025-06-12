"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import CameraCapture from "@/components/layout/snap-page/CameraCapture";
import { Button } from "@/components/ui/button";
import CardTips from "@/components/layout/snap-page/CardTips";
import SnapSuccesPredict from "@/components/layout/snap-page/SnapSuccesPredict";
import LoadingOverlay from "@/components/my-components/LaodingOverlay";
import { useToast } from "@/hooks/use-toast";
import { uploadToPredict } from "@/services/modelMlServices";
import SnapFailedPredict from "@/components/layout/snap-page/SnapFailedPredict";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import { savePredictHistory } from "@/services/herbService";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger,
} from "@/lib/motionVariants";

const SnapPage = () => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPredictingSuccess, setIsPredictingSuccess] = useState(false);
  const [isPredictingFailed, setIsPredictingFailed] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showAnalyzeButton, setShowAnalyzeButton] = useState(true);

  const resultRef = useRef(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setTimeout(() => {
        toast({
          className: "bg-dark-green-shades-20 text-white border-none",
          title: "Anda belum login",
          description: (
            <h2 className="text-sm">
              Anda tetap bisa menggunakan fitur Snap, namun data anda tidak akan
              disimpan.
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
      }, 100);
      return;
    }
    setToken(token);
  }, []);

  const handlePredict = async () => {
    if (!capturedImage) {
      toast({
        className: "bg-dark-green-shades-20 text-white border-none",
        title: "Gambar belum diambil",
        description: "Silakan ambil gambar terlebih dahulu sebelum prediksi.",
      });
      return;
    }

    try {
      setIsLoading(true);

      const blob = await (await fetch(capturedImage)).blob();
      const result = await uploadToPredict({ file: blob });

      setPredictionResult(result.data);
      setIsPredictingSuccess(true);
      setIsPredictingFailed(false);

      if (token) {
        try {
          await savePredictHistory({
            token,
            name: result.data.detail.name,
            confidence: result.data.hasil_predict.confidence,
            imageBlob: blob,
          });

          toast({
            title: "Berhasil disimpan",
            description: "Hasil prediksi berhasil disimpan ke riwayat.",
            className: "bg-dark-green-shades-20 text-white border-none",
            duration: 3000,
          });
        } catch (err) {
          console.error("Gagal menyimpan ke riwayat:", err.message);
          toast({
            title: "Gagal menyimpan riwayat",
            description: "Terjadi kendala pada server saat menyimpan riwayat.",
            variant: "destructive",
            duration: 3000,
          });
        }
      }

      setTimeout(() => {
        const element = resultRef.current;
        if (element) {
          const yOffset = -120;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setShowAnalyzeButton(false);
      }, 300);
    } catch (error) {
      setTimeout(() => {
        setPredictionResult(null);
        setIsPredictingSuccess(false);
        setIsPredictingFailed(true);
        const element = resultRef.current;
        if (element) {
          const yOffset = -120;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
        setShowAnalyzeButton(false);
      }, 300);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleClickMulai = () => {
    if (!predictionResult) {
      toast({
        title: "Belum ada hasil prediksi / Hasil Tidak Valid",
        description:
          "Silakan unggah gambar dan lakukan prediksi terlebih dahulu.",
        className: "bg-dark-green-shades-20 text-white border-none",
            duration: 3000,
      });
      return;
    }

    if (!token) {
      toast({
        title: "Harus login terlebih dahulu",
        description: "Login untuk bisa menyimpan tanaman ke koleksi pribadi.",
        className: "bg-dark-green-shades-20 text-white border-none",
            duration: 3000,
      });
      return;
    }

    toast({
      title: "Tanaman berhasil disimpan",
      description: "Kamu dapat melihatnya di halaman koleksi herbalmu!",
      className: "bg-dark-green-shades-20 text-white border-none",
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerStagger}
      className="container max-w-screen-xl mx-auto flex flex-col items-center px-4 py-10 sm:px-6 md:p-10"
    >
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center gap-10"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-8 py-4 md:py-6 lg:py-8"
        >
          <Image
            className="max-w-52 sm:max-w-64 md:max-w-72"
            src="/images/assets/image_capture.png"
            alt="snap"
            width={480}
            height={480}
          />
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-2 md:gap-4 lg:gap-6"
          >
            <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Kenali Tanaman dari Foto
            </h2>
            <p className="max-w-screen-lg text-center font-medium text-sm md:text-base lg:text-lg">
              Cukup unggah satu foto tanaman, dan Herbplants akan mengenalinya
              untukmu! Kamu bisa tahu nama, kegunaan, bahkan menyimpannya ke
              koleksi pribadimu
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="w-fit">
          <CameraCapture
            setPredictionResult={setPredictionResult}
            isLoading={isLoading}
            handlePredict={handlePredict}
            toast={toast}
            capturedImage={capturedImage}
            setCapturedImage={(img) => {
              setCapturedImage(img);
              setShowAnalyzeButton(true);
            }}
            showAnalyzeButton={showAnalyzeButton}
          />
        </motion.div>

        {isLoading && <LoadingOverlay message="Memprediksi hasil gambar" />}

        <motion.div variants={fadeUp} className="w-full" ref={resultRef}>
          {isPredictingSuccess && predictionResult ? (
            <SnapSuccesPredict
              data={predictionResult?.detail || { name: "", nameLatin: "" }}
            />
          ) : isPredictingFailed && !predictionResult ? (
            <SnapFailedPredict />
          ) : (
            <CardTips />
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center w-full">
          <Card className="max-w-screen-xl bg-transparent shadow-none rounded-xl bg-green-shades-95">
            <CardContent className="p-6 flex flex-col justify-center items-center space-y-4 lg:flex-row lg:justify-between lg:p-8">
              <motion.div variants={fadeLeft} className="space-y-4 lg:w-10/12">
                <h4 className="font-semibold text-dark-grey-shades-15 text-lg sm:text-xl md:text-2xl leading-tight">
                  Ingin menyimpan tanaman ke koleksi pribadimu?
                </h4>
                <p className="text-dark-grey-shades-30 font-medium text-sm md:text-base">
                  Dengan masuk atau membuat akun, kamu bisa menyimpan tanaman
                  yang kamu temukan, mengumpulkan poin dari tantangan, dan
                  membangun koleksi herbal versimu sendiri.
                </p>
              </motion.div>
              <motion.div
                variants={fadeRight}
                className="w-full lg:w-2/12 flex justify-center"
              >
                <Button
                  onClick={handleClickMulai}
                  size="lg"
                  className="w-full lg:w-fit font-semibold text-dark-grey-shades-15"
                >
                  Mulai
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SnapPage;
