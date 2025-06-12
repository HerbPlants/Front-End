import React from "react";
import clsx from "clsx";

const rankIcons = {
  1: "/images/logo/1.png",
  2: "/images/logo/2.png",
  3: "/images/logo/3.png",
};

const LeaderboardItem = ({ rank, name, points, isCurrentUser }) => {
  return (
    <tr
      className={clsx(
        "text-sm md:text-base text-gray-800 border border-[#E5F5BD]",
        rank <= 3 && "font-semibold", // (highlight top 3)
        isCurrentUser && "bg-yellow-100" // (highlight user login dengan latar kuning muda)
      )}
    >
      {/* Rank */}
      <td className="w-40 md:w-52 px-4 py-3 text-center bg-[#F6FBE9]">
        {rankIcons[rank] ? (
          <img
            src={rankIcons[rank]}
            alt={`Rank ${rank}`}
            className="w-10 h-10 md:w-12 md:h-12 mx-auto"
          />
        ) : (
          <span className="text-xl md:text-2xl font-bold text-gray-800">
            {rank} {/* (tampilkan nomor rank jika tidak pakai icon) */}
          </span>
        )}
      </td>

      {/* Name */}
      <td className="px-4 py-3 bg-[#EEF8D3]">
        {name}
        {isCurrentUser && ( // (jika user login, tampilkan label "Kamu")
          <span className="ml-2 inline-block text-xs px-2 py-0.5 bg-green-200 text-green-800 rounded-full">
            Kamu
          </span>
        )}
      </td>

      {/* Points */}
      <td className="px-4 py-3 text-center bg-[#F6FBE9]">
        <span className="text-sm md:text-base font-medium">
          {points} Points
        </span>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
