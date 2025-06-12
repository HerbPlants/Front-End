import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardStep = ({ data }) => {
  return (
    <Card className="bg-green-shades-95 border-green-shades-90 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md gap-4 justify-between flex-grow flex-shrink lg:max-w-[21rem] ">
      <CardContent className="p-0 flex flex-col gap-4 flex-grow justify-between">
        <div className="">
          <h3 className="text-lg md:text-xl font-semibold text-dark-grey-shades-15">
            {data.title}
          </h3>
          <h4 className="text-md md:text-base text-dark-grey-shades-30 font-medium">
            {data.shortDesc}
          </h4>
        </div>

        <p className="text-sm md:text-base text-dark-grey-shades-15">
          {data.desc}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-md font-medium text-dark-grey-shades-20">
            Langkah
          </p>
          <h6 className="text-dark-green-shades-25 font-bold text-4xl">
            {data.step}
          </h6>
        </div>
      </CardContent>
      <CardFooter className="p-0 w-full">
        <Link
          href={data.link}
          className="w-full"
        >
          <Button className="w-full">{data.button}</Button>
        </Link>
        
      </CardFooter>
    </Card>
  );
};

export default CardStep;
