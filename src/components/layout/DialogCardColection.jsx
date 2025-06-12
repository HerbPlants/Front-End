import React from "react";
import Image from "next/image";

import { ArrowRight, Heart, Import } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LikeButton from "@/components/my-components/LikeButton";

const DialogCardPlants = ({ data, image }) => {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <p
          className="ml-1 text-dark-green-shades-20 text-sm font-semibold border-green-shades-75 hover:text-dark-green-shades-30 hover:underline underline-offset-4 decoration-[1.5px] transition-all duration-100 cursor-pointer hover:scale-[1.015]"
        >
          Selengkapnya
        </p>
      </DialogTrigger>
      <DialogContent className="px-4 py-4 max-w-screen-sm max-h-[95vh] sm:max-h-[90vh] overflow-y-auto no-scrollbar bg-green-shades-95 flex flex-col gap-6">
        <DialogHeader className={" flex flex-col gap-2"}>
          <Card className="mx-auto rounded-xl border border-none bg-inherit shadow-none px-4 py-4 flex items-center gap-2 justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/svg/ic_predict_plants.svg"
                alt="Predict Image"
                className="w-8 sm:w-10"
                width={48}
                height={48}
              />
              <h3 className="text-base sm:text-lg font-semibold text-dark-green-shades-15">
                {data.name} - {data.nameLatin}
              </h3>
            </div>
          </Card>
          <div className="rounded-lg overflow-hidden group">
            <Image
              width={480}
              height={480}
              src={image || "/images/assets/image_placeholder.png"}
              alt={data.name || "Image"}
              className="aspect-[12/7] w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </DialogHeader>

        <Separator />

        <DialogTitle className="px-2">
          <div className="max-w-screen-xl w-full mx-auto space-y-6 md:space-y-10">
            <div className="mx-auto space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
                <div className="font-semibold text-dark-green-shades-15 pt-5">
                  Nama
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium leading-relaxed bg-green-shades-90 p-4 rounded-md text-justify">
                    {data?.name || "-"}
                  </p>
                </div>

                <div className="font-semibold text-dark-green-shades-15 pt-5">
                  Nama Latin
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium leading-relaxed bg-green-shades-90 p-4 rounded-md text-justify">
                    {data?.nameLatin || "-"}
                  </p>
                </div>

                <div className="font-semibold text-dark-green-shades-15 pt-5">
                  Nama Lokal
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium leading-relaxed bg-green-shades-90 p-4 rounded-md text-justify">
                    {data?.nameLocal || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogTitle>
        <Separator />

        <div className="px-2 flex flex-col gap-6 text-dark-grey-shades-20">
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
              Khasiat
            </h5>
            <p className="text-base  leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
              {data?.khasiat || "-"}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
              Penyebaran Tanaman
            </h5>
            <p className="text-base leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
              {data?.penyebaranTanaman || "-"}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-dark-green-shades-15 mb-1">
              Agroekologi
            </h5>
            <p className="text-base leading-relaxed bg-green-shades-90 p-4 md:p-6 rounded-md text-justify">
              {data?.agroekologi || "-"}
            </p>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center w-full px-2">
          <DialogClose asChild>
            <Button variant="outline">Tutup</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCardPlants;
