import Image from "next/image";
import React from "react";

const NotFoundPlants = ({ children }) => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 py-20">
      <div className="flex justify-center">
        <Image
          src="/images/assets/mascot/sad.png"
          alt="Maskot Kiss Herbplants"
          width={144}
          height={144}
          className="w-32 lg:w-24"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        {children || (
          <p className="w-full text-center font-medium italic text-gray-500 lg:mt-10 text-lg md:text-xl lg:text-2xl">
            Tumbuhan yang anda cari tidak ada
          </p>
        )}
      </div>
    </section>
  );
};

export default NotFoundPlants;
