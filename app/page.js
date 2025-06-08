"use client";

import { useState } from "react";
import SideBar from "@/components/SkipsSelection/sideBar";
import SkipsList from "@/components/SkipsSelection/SkipsList";
import StepNavigation from "@/components/SkipsSelection/StepNavigation";

export default function Home() {
  const [step, setStep] = useState(2);

  const handleNextStep = () => {
    if (step < 5) {
      console.log("step: ", step);
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-4 w-full p-2 sm:p-4 rounded-lg max-w-7xl relative">
        <SideBar currentStep={step} />
        {(() => {
          switch (step) {
            case 0:
              return (
                <div className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200">
                  Step 0
                </div>
              );
            case 1:
              return (
                <div className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200">
                  Step 1
                </div>
              );
            case 2:
              return <SkipsList />;
            case 3:
              return (
                <div className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200">
                  Step 3
                </div>
              );
            case 4:
              return (
                <div className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200">
                  Step 4
                </div>
              );
            default:
              return (
                <div className="bg-white h-full w-full rounded-lg p-4 border-2 border-gray-200">
                  Step 5
                </div>
              );
          }
        })()}
      </div>
      <StepNavigation
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </div>
  );
}
