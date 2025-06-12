import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const MissionCard = ({ title, current, total }) => {
  const progress = (current / total) * 100;

  return (
    <Card className="bg-green-shades-95 border-green-shades-90 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm flex flex-col space-y-3">
      <div className="flex items-start space-x-3 mb-3 sm:mb-4">
        <div className="bg-[#CBEA7B] p-2 sm:p-3 rounded-md flex items-center justify-center">
          <Image
            width={48}
            height={48}
            src="/svg/ic_bendera.svg"
            alt="iconbendera"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 p-2 sm:p-3">
          {title}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex-1 h-2 bg-[#DDEDE8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#468671] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          {current}/{total}
        </span>
      </div>
    </Card>
  );
};

export default MissionCard;
