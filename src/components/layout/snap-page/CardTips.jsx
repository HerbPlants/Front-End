import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

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

const CardTips = ({ image_reject, image_accept, title, description }) => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-10">
      <h2 className="text-dark-grey-shades-15 text-center text-4xl font-bold">
        Tips Foto Tanaman
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {tipsSnap.map((item, index) => (
          <Card key={index} className="max-w-[23rem] sm:max-w-[18rem] md:max-w-[21rem] lg:max-w-[23rem] bg-transparent border-none shadow-none flex-grow sm:flex-grow-0">
            <CardHeader className="space-y-2 p-0 m-0 border-none">
              <Image
                className="aspect-[7/3] w-full"
                src={item.image_reject}
                alt="snap_reject"
                width={480}
                height={480}
              />
              <Image
                className="aspect-[7/3] w-full"
                src={item.image_accept}
                alt="snap_accept"
                width={480}
                height={480}
              />
            </CardHeader>
            <CardContent className="p-4 bg-green-shades-95 space-y-1">
              <h4 className="font-semibold text-dark-grey-shades-15 text-sm sm:text-lg md:text-xl leading-tight">
                {item.title}
              </h4>
              <p className="text-dark-grey-shades-30 font-medium text-[0.81rem]">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardTips;
