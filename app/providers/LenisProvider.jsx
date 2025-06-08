"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 5.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
