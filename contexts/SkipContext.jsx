"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const SkipContext = createContext();

export function SkipProvider({ children }) {
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    // Load saved skip from localStorage on initial render
    const savedSkip = localStorage.getItem("selectedSkip");
    if (savedSkip) {
      setSelectedSkip(JSON.parse(savedSkip));
    }
  }, []);

  const selectSkip = (skip) => {
    const skipData = {
      ...skip,
      totalPrice:
        skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100,
      selectedAt: new Date().toISOString(),
    };

    localStorage.setItem("selectedSkip", JSON.stringify(skipData));
    setSelectedSkip(skipData);
  };

  const clearSkip = () => {
    localStorage.removeItem("selectedSkip");
    setSelectedSkip(null);
  };

  return (
    <SkipContext.Provider value={{ selectedSkip, selectSkip, clearSkip }}>
      {children}
    </SkipContext.Provider>
  );
}

export function useSkip() {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkip must be used within a SkipProvider");
  }
  return context;
}
