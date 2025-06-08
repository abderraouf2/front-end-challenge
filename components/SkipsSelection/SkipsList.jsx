import React from "react";
import SkipCard from "./SkipCard";
import skips from "@/data/skips";
import { useSkip } from "@/contexts/SkipContext";

export default function SkipsList() {
  const { selectedSkip, selectSkip } = useSkip();

  return (
    <div className="w-full p-4 bg-white rounded-lg h-full shadow-xl mb-16 border-2 border-gray-200 mb-30 sm:mb-20 ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Choose Your Skip Size
      </h2>
      <p className="text-sm text-gray-500 text-center">
        Select the skip size that best suits your needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4 bg-white rounded-lg h-fit">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selectedSkip={selectedSkip}
            handleSelect={selectSkip}
          />
        ))}
      </div>
    </div>
  );
}
