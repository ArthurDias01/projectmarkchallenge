'use client'

import { useShowPipes } from "@/context/PipeContext";
import { TSalesPipeline } from "@/interface/pipelines"
import clsx from "clsx"
import { useRef, useState } from "react"

interface Props {
  type: TSalesPipeline;
}

export const CustomCheckbox = ({ type }: Props) => {
  const { handleSelectPipeType, selectedPipeType } = useShowPipes();
  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="group static flex flex-col">
      <div className={clsx("relative px-[14px] py-4 flex flex-row gap-[13px] border-1  items-center p-4 w-[210px] h-[49px] rounded-custom11 hover:bg-gray-250 select-none cursor-pointer", {
        "border-2 border-accent": selectedPipeType === type,
        "border-2 border-gray-200": selectedPipeType !== type
      })}
        onClick={() => checkBoxRef?.current?.click()}
      >

        <input type="checkbox" className="w-[18px] h-[18px] focus:outline-none focus:border-transparent group-hover:bg-slate-400 cursor-pointer rounded-sm"
          checked={selectedPipeType === type}
          ref={checkBoxRef}
          onChange={(e) => handleSelectPipeType(type)}
        />

        <p className="w-full text-[14px]">
          {type}
        </p>

      </div>
      {
        selectedPipeType === type && (
          <span className="relative w-3 h-3 rotate-45 bg-white group-hover:bg-gray-250 bottom-[6px] left-1/2 border border-t-0 border-l-0 border-b-2 border-r-2 border-accent " />
        )
      }
    </div>
  )
}
