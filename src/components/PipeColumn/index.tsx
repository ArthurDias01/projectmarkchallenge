import { TSalesPipelineColums } from '@/interface/pipelines'
import clsx from 'clsx';
import { MockCard } from '../MockCard';
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  column: TSalesPipelineColums;
}

export const PipeColumn = ({ column }: Props) => {



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className={clsx("flex flex-col w-full max-w-[222px] py-[14px] rounded-custom14 h-[558px] border-1", {
          "bg-gradient-to-b from-purple-100 via-purple-100 to-transparent border-1 border-purple-200": column === "LEAD",
          "bg-gradient-to-b from-yellow-100 via-yellow-100 to-transparent border-1 border-yellow-200": column === "RFP IN PROGRESS",
          "bg-gradient-to-b  from-blue-100 via-blue-100 to-transparent border-1 border-blue-200": column === "SUBMITTED",
          "bg-gradient-to-b  from-green-100 via-green-100 to-transparent border-1 border-green-200": column === "WON",
          "bg-gradient-to-b  from-pink-100 via-pink-100 to-transparent border-1 border-pink-200": column === "LOST",
          "bg-gradient-to-b  from-gray-100 via-gray-100 to-transparent border-1 border-gray-200": column === "CLOSED",
        })}>
        <div className="flex flex-col px-[14px]">
          <h3 className={clsx("font-bold text-[14px]", {
            "text-purple-title": column === "LEAD",
            "text-yellow-title": column === "RFP IN PROGRESS",
            "text-blue-title": column === "SUBMITTED",
            "text-green-title": column === "WON",
            "text-pink-title": column === "LOST",
            "text-gray-title": column === "CLOSED",
          })}>{column}</h3>
          <span className={clsx("w-[114px] h-6 rounded-custom11 items-center inline-flex mt-[17px]", {
            "bg-purple-200": column === "LEAD",
            "bg-yellow-200": column === "RFP IN PROGRESS",
            "bg-blue-200": column === "SUBMITTED",
            "bg-green-200": column === "WON",
            "bg-pink-200": column === "LOST",
            "bg-gray-200": column === "CLOSED",
          })}>
            <span className={clsx("w-[42px] h-[22px] rounded-custom11", {
              "bg-purple-300": column === "LEAD",
              "bg-yellow-300": column === "RFP IN PROGRESS",
              "bg-blue-300": column === "SUBMITTED",
              "bg-green-300": column === "WON",
              "bg-pink-300": column === "LOST",
              "bg-gray-300": column === "CLOSED",
            })} />
          </span>
        </div>
        <section className="flex flex-col mt-[9px] mx-[5px]">
          <MockCard column={column} />
        </section>
      </motion.div>
    </AnimatePresence>
  )
}
