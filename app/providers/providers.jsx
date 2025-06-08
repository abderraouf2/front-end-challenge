"use client";

import { SkipProvider } from "@/contexts/SkipContext";

export function Providers({ children }) {
  return <SkipProvider>{children}</SkipProvider>;
}
