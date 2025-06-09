import React, { useState, useEffect } from "react";
import SkipCard from "./SkipCard";
import { useSkip } from "@/contexts/SkipContext";

export default function SkipsList() {
  const { selectedSkip, selectSkip } = useSkip();
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => console.error("Failed to fetch skips:", err));
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-lg h-full shadow-xl border-2 border-gray-200  ">
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
