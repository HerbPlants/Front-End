import React from "react";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";

const CardTips = ({image_reject, image_accept, title, description}) => {
  return (
    <Card className="max-w-[23rem] sm:max-w-[18rem] md:max-w-[21rem] lg:max-w-[23rem] bg-transparent border-none shadow-none flex-grow sm:flex-grow-0">
      <CardHeader className="space-y-2 p-0 m-0 border-none">
        <Image
          className="aspect-[7/3] w-full"
          src={image_reject}
          alt="snap_reject"
          width={480}
          height={480}
        />
        <Image
          className="aspect-[7/3] w-full"
          src={image_accept}
          alt="snap_accept"
          width={480}
          height={480}
        />
      </CardHeader>
      <CardContent className="p-4 bg-green-shades-95 space-y-1">
        <h4 className="font-semibold text-dark-grey-shades-15 text-sm sm:text-lg md:text-xl leading-tight">
          {title}
        </h4>
        <p className="text-dark-grey-shades-30 font-medium text-[0.81rem]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardTips;
