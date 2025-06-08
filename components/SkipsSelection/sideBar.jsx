"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiShippingContainerLight } from "react-icons/pi";
import { LuCalendarSearch } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";

const steps = [
  { icon: IoLocationOutline, label: "Location" },
  { icon: FaRegTrashAlt, label: "Waste type" },
  { icon: PiShippingContainerLight, label: "Select skip" },
  { icon: IoShieldCheckmarkOutline, label: "Permit check" },
  { icon: LuCalendarSearch, label: "Choose date" },
  { icon: MdOutlinePayment, label: "Payment" },
];

export default function SideBar({ currentStep = 0 }) {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-white border-2 border-gray-200 rounded-lg lg:sticky top-4 flex flex-col relative h-fit shadow-xl z-10 mb-6 lg:mb-0">
      {/* Progress Line */}
      <div className="absolute top-6 left-8 -translate-x-1/2 w-1 bg-gray-200 h-[calc(100%-3rem)] z-0 rounded-full overflow-hidden">
        <motion.div
          className="bg-blue-500 w-full h-full origin-top"
          style={{ scaleY: currentStep / (steps.length - 1) }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: currentStep / (steps.length - 1) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-6 z-10 mt-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <motion.div
              key={step.label}
              className="flex flex-row items-center gap-3 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  isCompleted
                    ? "bg-blue-500 border-blue-500 text-white"
                    : isActive
                    ? "bg-white border-blue-500 text-blue-500"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                <Icon size={18} />
              </div>
              <h1
                className={`text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-gray-600"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
