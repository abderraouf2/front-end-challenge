"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "@/components/SkipsSelection/sideBar";
import SkipsList from "@/components/SkipsSelection/SkipsList";
import StepNavigation from "@/components/SkipsSelection/StepNavigation";

export default function Home() {
  const [step, setStep] = useState(2);
  const [direction, setDirection] = useState("up");

  const handleNextStep = () => {
    if (step < 5) {
      setDirection("up");
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setDirection("down");
      setStep(step - 1);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <div>Step 0</div>;
      case 1:
        return <div>Step 1</div>;
      case 2:
        return <SkipsList />;
      case 3:
        return <div>Step 3</div>;
      case 4:
        return <div>Step 4</div>;
      default:
        return <div>Step 5</div>;
    }
  };

  const slideVariants = {
    initial: (direction) => ({
      y: direction === "up" ? 100 : -100,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
    animate: {
      y: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.3 },
    },
    exit: (direction) => ({
      y: direction === "up" ? -100 : 100,
      opacity: 0,
      position: "absolute",
      width: "100%",
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-4 w-full p-2 sm:p-4 rounded-lg max-w-7xl relative overflow-hidden min-h-[300px]">
        <SideBar currentStep={step} />

        <div className="relative w-full h-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200 mb-30 sm:mb-20"
            >
              {getStepContent(step)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <StepNavigation
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </div>
  );
}
