import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const SnapFailedPredict = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto space-y-6 md:space-y-10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-dark-grey-shades-15 text-center text-4xl lg:text-5xl font-bold">
          Hasil Identifikasi
        </h2>
        <div className="flex flex-col items-center">
          <h4 className="text-dark-grey-shades-20 text-lg lg:text-xl font-medium">
            Tanaman Misterius
          </h4>
        </div>
      </div>
      <div className="mx-auto space-y-4 md:space-y-6">
        <Card className="w-full rounded-xl border border-green-shades-85 bg-green-shades-95 px-6 py-4 md:px-10 md:py-8 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/svg/ic_predict_plants.svg"
              alt="Predict Image"
              className="w-10 md:w-12"
              width={48}
              height={48}
            />
            <h3 className="text-sm sm:text-base md:text-xl font-semibold text-dark-grey-shades-15">
              Data tidak ditemukan - Tanaman Misterius
            </h3>
          </div>
        </Card>

        <Card className="mx-auto border-none rounded-none shadow-none bg-transparent  px-4 sm:px-6 md:px-10 py-8 flex flex-col items-center lg:flex-row lg:justify-center gap-8">
          <CardHeader className="w-full p-0 max-w-52 sm:max-w-64 md:max-w-sm lg:w-1/3 -mt-8">
            <Image
              width={480}
              height={480}
              className="w-full h-full object-bottom object-fit"
              src={"/images/assets/mascot/sad.png"}
              alt={"mascot_sad"}
            />
          </CardHeader>
          <CardContent className="w-full lg:w-4/6 p-0 space-y-6 text-dark-grey-shades-20 ">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-dark-green-shades-15 md:text-4xl lg:text-5xl leading-tight">
                Oops!!
              </h2>
              <h3 className="text-2xl font-semibold text-dark-green-shades-15 md:text-4xl leading-tight md:leading-snug">
                Tanaman ini belum Terdata atau Gambar yang kamu unggah bukan
                tanaman
              </h3>
            </div>

            <p className="text-dark-grey-shades-20 text-5x1 md:text-6x1 font-medium  mb-6">
              Silahkan Coba Lagi dan Ikuti Tips Foto Tanaman
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SnapFailedPredict;
