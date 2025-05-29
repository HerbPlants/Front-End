import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardTips from "@/components/layout/snap-page/CardTips";
import CameraCapture from "@/components/layout/snap-page/CameraCapture";
import { Button } from "@/components/ui/button";

const tipsSnap = [
  {
    image_reject: "/images/snap/snap-card-1-1.svg",
    image_accept: "/images/snap/snap-card-1-2.svg",
    title: "Letakkan tanamanmu di tengah",
    description:
      "Arahkan kamera pada posisi tanaman berada di tengah frame untuk memudahkan identifikasi tanaman.",
  },
  {
    image_reject: "/images/snap/snap-card-2-1.svg",
    image_accept: "/images/snap/snap-card-2-2.svg",
    title: "Ambil gambar yang jelas dan jernih",
    description:
      "Hindari mengambil gambar yang blur, gelap, atau terlalu terang.",
  },
  {
    image_reject: "/images/snap/snap-card-3-1.svg",
    image_accept: "/images/snap/snap-card-3-2.svg",
    title: "Jika tanaman terlalu besar, foto bagian daunnya",
    description:
      "Ukuran tanaman yang terlalu besar dan tidak pas di frame, ambil foto di bagian yang paling mudah dijangkau seperti daun atau bunganya.",
  },
];

const SnapPage = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="max-w-screen-xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 py-4 md:py-6 lg:py-8">
          <Image
            className="w-40"
            src="/images/assets/image_capture.png"
            alt="snap"
            width={480}
            height={480}
          />
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <h2 className="text-center font-semibold text-2xl md:text-4xl lg:text-5xl">
              Kenali Tanaman dari Foto
            </h2>
            <p className="max-w-screen-lg text-center font-medium text-sm md:text-base lg:text-lg">
              Cukup unggah satu foto tanaman, dan Herbplants akan mengenalinya
              untukmu! Kamu bisa tahu nama, kegunaan, bahkan menyimpannya ke
              koleksi pribadimu
            </p>
          </div>
        </div>
        <div className="">
          <CameraCapture />
        </div>
        <div className="max-w-screen-xl mx-auto space-y-10">
          <h2 className="text-dark-grey-shades-15 text-center text-4xl font-bold">
            Tips Foto Tanaman
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {tipsSnap.map((item, index) => (
              <CardTips
                key={index}
                image_reject={item.image_reject}
                image_accept={item.image_accept}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="max-w-screen-xl bg-transparent shadow-none rounded-xl bg-green-shades-95">
            <CardContent className="p-6 flex flex-col justify-center items-center space-y-4 lg:flex-row lg:justify-between lg:p-8">
              <div className="space-y-4 lg:w-10/12">
                <h4 className="font-semibold text-dark-grey-shades-15 text-lg sm:text-xl md:text-2xl leading-tight">
                  Ingin menyimpan tanaman ke koleksi pribadimu?
                </h4>
                <p className="text-dark-grey-shades-30 font-medium text-sm md:text-base">
                  Dengan masuk atau membuat akun, kamu bisa menyimpan tanaman
                  yang kamu temukan, mengumpulkan poin dari tantangan, dan
                  membangun koleksi herbal versimu sendiri.
                </p>
              </div>
              <div className="w-full lg:w-2/12 flex justify-center">
                <Button size="lg" className="w-full lg:w-fit font-semibold text-dark-grey-shades-15">Mulai</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SnapPage;
