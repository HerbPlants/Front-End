import Image from "next/image";
import React from "react";

const ActivityCard = ({ title, image, alt, points, actionText, heading, description, onActionClick }) => {
  return (
    <div className="bg-[#F6FBE9] p-4 sm:p-6 rounded-xl">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#CBEA7B] px-2 py-1 w-fit">
        {title}
      </h3>

      <Image
        width={480}
        height={480}
        src={image}
        alt={alt}
        className="w-full h-48 sm:h-64 md:h-[300px] object-cover object-top rounded-md mb-4"
      />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Points di kiri */}
        <div className="md:mt-9">
          <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
            {points}
          </span>
        </div>

        {/* Konten utama */}
        <div className="flex-1">
          <p className="text-base sm:text-lg text-gray-900 font-bold mb-1">{heading}</p>
          <p className="text-sm sm:text-base text-gray-900">{description}</p>
        </div>

        {/* Tombol */}
        <div className="md:mt-9">
          <button
            onClick={onActionClick}
            className="px-4 py-2 text-sm sm:text-base bg-dark-green-shades-30 hover:bg-dark-green-shades-40 text-white font-semibold rounded-md transition"
          >
            {actionText}
          </button>

        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
