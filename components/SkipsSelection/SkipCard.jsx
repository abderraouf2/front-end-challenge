"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { GiWeight } from "react-icons/gi";
import { FaFeatherAlt, FaRegCheckCircle, FaCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

export default function SkipCard({ skip, selectedSkip, handleSelect }) {
  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste,
  } = skip;

  return (
    <div
      className={`w-full sm:max-w-sm bg-white border-2 rounded-lg shadow-sm p-2 hover:shadow-md transition cursor-pointer transition-all duration-300 hover:shadow-none ${
        selectedSkip?.id === skip.id
          ? "border-green-500 shadow-md"
          : "border-gray-200 hover:border-blue-500"
      }`}
    >
      <div className="relative w-full h-48">
        <Image
          src="/images/skip.png"
          alt={`Image of a ${size} yard skip`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority
        />
        <div className="absolute top-2 left-2 font-semibold">
          {/* <span className="text-[12px] bg-white rounded-lg p-2 flex items-center gap-2 shadow-sm"> */}
          {allows_heavy_waste ? (
            <span className="bg-green-600 text-white flex items-center gap-2 px-2 py-1 rounded-full text-xs shadow">
              <GiWeight size={16} />
              Suitable for Heavy Waste
            </span>
          ) : (
            <span className="bg-rose-500 text-white flex items-center gap-2 px-2 py-1 rounded-full text-xs shadow">
              <FaFeatherAlt size={16} />
              Suitable for Light Waste
            </span>
          )}
          {/* </span> */}
        </div>
      </div>

      <div className="pt-5 space-y-4">
        <div className="flex flex-row items-center justify-between gap-2">
          <h5 className=" text-xl font-semibold tracking-tight text-gray-900">
            {size} Yard Skip
          </h5>
          <span className="text-blue-800 text-xl font-semibold">
            £{price_before_vat}
          </span>
        </div>

        <p className="text-gray-700 mb-2">
          <strong>{hire_period_days} days hire period</strong>
        </p>

        <ul className="text-sm mb-4 space-y-1">
          <li
            className={`flex items-center gap-2 ${
              allowed_on_road ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {allowed_on_road ? (
              <>
                <FaRegCheckCircle size={20} /> Allowed on Road
              </>
            ) : (
              <>
                <CiWarning size={20} /> Not Allowed on Road
              </>
            )}
          </li>
        </ul>

        {selectedSkip?.id === skip.id ? (
          <div
            type="button"
            onClick={() => handleSelect(skip)}
            aria-label={`Select ${size} yard skip`}
            className={`inline-flex items-center border border-white  gap-2 px-4 py-2 text-sm font-medium text-green-500 rounded-lg hover:bg-white hover:text-green-500 hover:border-green-500 duration-300 w-full justify-center cursor-pointer active:scale-95 transition-all`}
          >
            <IoCheckmark size={20} /> Selected
          </div>
        ) : (
          <button
            type="button"
            onClick={() => handleSelect(skip)}
            aria-label={`Select ${size} yard skip`}
            className={`inline-flex items-center border border-white  gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-lg hover:bg-white hover:text-blue-800 hover:border-blue-800 duration-300 w-full justify-center cursor-pointer active:scale-95 transition-all`}
          >
            Select Skip
          </button>
        )}
      </div>
    </div>
  );
}
