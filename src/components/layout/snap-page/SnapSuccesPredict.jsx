"use client";

import React, { useState } from "react";
// import LikeButton from "@/components/my-components/LikeButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";
// import { likeHerb, unlikeHerb } from "@/services/herbService";
// import { useRouter } from "next/navigation";

const SnapSuccesPredict = ({ data, token }) => {
  // const [isLiked, setIsLiked] = useState(data?.isLiked || false);
  // const [loading, setLoading] = useState(false);
  // const { toast } = useToast();
  // const router = useRouter();

  // const handleLike = async (herbId) => {
  //   if (!token || token.trim() === "") {
  //     toast({
  //       className: "bg-dark-green-shades-20 text-white border-none",
  //       title: "Tidak Bisa Menyukai",
  //       description: (
  //         <h2 className="text-sm">Anda harus login untuk menyukai tanaman ini.</h2>
  //       ),
  //       action: (
  //         <ToastAction
  //           className="text-sm hover:bg-green-shades-85 hover:text-dark-green-shades-20 py-4 px-6"
  //           onClick={() => {
  //             router.push("/login");
  //           }}
  //           altText="Okey"
  //         >
  //           Login
  //         </ToastAction>
  //       ),
  //       duration: 3500,
  //     });
  //     return;
  //   }

  //   if (loading) return;

  //   const previous = isLiked;
  //   setIsLiked(!previous);
  //   setLoading(true);

  //   try {
  //     if (!previous) {
  //       await likeHerb(herbId, token, data?.image || ""); 
  //     } else {
  //       await unlikeHerb(herbId, token);
  //     }

  //     toast({
  //       className: "bg-dark-green-shades-20 text-white border-none",
  //       title: "Berhasil!",
  //       description: `Tanaman berhasil ${!previous ? "Like" : "Unlike"}`,
  //     });
  //   } catch (error) {
  //     setIsLiked(previous); // revert
  //     console.error(error);
  //     toast({
  //       variant: "destructive",
  //       title: "Gagal",
  //       description: "Gagal memberi like tanaman.",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="max-w-screen-xl w-full mx-auto space-y-6 md:space-y-10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-dark-grey-shades-15 text-center text-4xl lg:text-5xl font-bold">
          Hasil Identifikasi
        </h2>
        <div className="flex flex-col items-center">
          <h4 className="text-dark-grey-shades-20 text-lg lg:text-xl font-medium">
            {data?.nameLatin || ""}
          </h4>
          <h5 className="text-dark-grey-shades-20 text-lg lg:text-xl font-medium">
            {data?.name || ""}
          </h5>
        </div>
      </div>

      <div className="mx-auto space-y-4 md:space-y-6">
        <Card className="max-w-screen-xl rounded-xl border border-green-shades-85 bg-green-shades-95 px-4 sm:px-6 md:px-10 py-8 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/svg/ic_predict_plants.svg"
              alt="Predict Image"
              className="w-10 md:w-12"
              width={48}
              height={48}
            />
            <h3 className="text-sm sm:text-base md:text-xl font-semibold text-dark-grey-shades-15">
              {data.name} - {data.nameLatin}
            </h3>
          </div>
          {/* <div className="flex gap-2">
            <LikeButton
              isLiked={isLiked}
              onClick={() => handleLike(data.id)}
              disabled={loading}
            />
          </div> */}
        </Card>

        {/* Detail Card */}
        <Card className="max-w-screen-xl rounded-xl border border-green-shades-85 bg-green-shades-95 px-6 md:px-10 py-8 flex flex-col gap-8">
          <CardHeader className="p-0 space-y-4">
            <h4 className="text-lg font-semibold text-dark-green-shades-15">
              Detail Tanaman
            </h4>
            <ul className="list-disc list-inside space-y-1 text-dark-grey-shades-15 text-base">
              <li>
                <span className="font-medium">Nama:</span> {data?.name || "-"}
              </li>
              <li>
                <span className="font-medium">Nama Latin:</span>{" "}
                <em>{data?.nameLatin || "-"}</em>
              </li>
              <li>
                <span className="font-medium">Nama Lokal:</span>{" "}
                {data?.nameLocal || "-"}
              </li>
            </ul>
          </CardHeader>
          <CardContent className="p-0 space-y-6 text-dark-grey-shades-20 ">
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
                Khasiat
              </h5>
              <p className="text-base leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
                {data?.khasiat || "-"}
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
                Penyebaran Tanaman
              </h5>
              <p className="text-base leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
                {data?.penyebaranTanaman || "-"}
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
                Agroekologi
              </h5>
              <p className="text-base leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
                {data?.agroekologi || "-"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SnapSuccesPredict;
