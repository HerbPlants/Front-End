import React from "react";
import clsx from "clsx";

const rankIcons = {
  1: "/images/logo/1.png",
  2: "/images/logo/2.png",
  3: "/images/logo/3.png",
};

const LeaderboardItem = ({ rank, name, points }) => {
  return (
    <tr
      className={clsx(
        "text-sm md:text-base text-gray-800 border border-[#E5F5BD]",
        rank <= 3 && "font-semibold"
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
            {rank}
          </span>
        )}
      </td>

      {/* Name */}
      <td className="px-4 py-3 bg-[#EEF8D3]">{name}</td>

      {/* Points */}
      <td className="px-4 py-3 text-center bg-[#F6FBE9]">
        <span className="text-sm md:text-base font-medium">{points} Points</span>
      </td>
    </tr>
  );
};

export default LeaderboardItem;
