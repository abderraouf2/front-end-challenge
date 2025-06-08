"use client";

import React from "react";
import { useSkip } from "@/contexts/SkipContext";

export default function StepNavigation({ handleNextStep, handlePreviousStep }) {
  const { selectedSkip } = useSkip();

  return (
    <div className="w-full fixed bottom-0 bg-white p-3 sm:p-4 z-10 border-t border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-4 px-2 sm:px-4">
        {selectedSkip && (
          <div className="block sm:hidden text-center">
            <div className="text-xs sm:text-sm">
              {selectedSkip?.size} Yard Skip
            </div>
            <div className="text-base font-semibold">
              Total: £{selectedSkip?.totalPrice.toFixed(2)}{" "}
              <span className="font-normal text-xs">(incl. VAT)</span>
            </div>
          </div>
        )}

        {/* Button group + Centered skip info for large screens */}
        <div className="flex gap-4 sm:flex-row sm:items-center justify-between w-full sm:gap-4">
          {/* Previous button */}
          <button
            onClick={handlePreviousStep}
            className="w-full sm:w-auto text-base sm:text-sm bg-white text-blue-500 px-4 py-3 sm:py-2 rounded-md border border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 duration-300 hover:scale-105 transition-all active:scale-95 cursor-pointer"
          >
            Previous
          </button>

          {selectedSkip && (
            <div className="hidden sm:flex flex-col text-center">
              <div className="text-sm">{selectedSkip?.size} Yard Skip</div>
              <div className="text-base font-semibold">
                Total: £{selectedSkip?.totalPrice.toFixed(2)}{" "}
                <span className="font-normal text-xs">(incl. VAT)</span>
              </div>
            </div>
          )}

          {/* Next button */}
          <button
            onClick={handleNextStep}
            className="w-full sm:w-auto text-base sm:text-sm bg-blue-500 text-white px-4 py-3 sm:py-2 rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 border border-transparent duration-300 hover:scale-105 transition-all active:scale-95 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
