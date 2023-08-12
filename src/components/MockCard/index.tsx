import { TSalesPipelineColums } from "@/interface/pipelines";
import clsx from "clsx";

interface Props {
  column: TSalesPipelineColums;
}

export const MockCard = ({ column }: Props) => {

  return (
    <div className={clsx("w-[212px] h-[175px] border-1 rounded-custom11 opacity-50", {
      "border-2 border-purple-200": column === "LEAD",
      "border-2 border-yellow-200": column === "RFP IN PROGRESS",
      "border-2 border-blue-200": column === "SUBMITTED",
      "border-2 border-green-200": column === "WON",
      "border-2 border-pink-200": column === "LOST",
      "border-2 border-gray-200": column === "CLOSED",
    })} />
  )
}
