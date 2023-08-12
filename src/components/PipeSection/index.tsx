'use client'
import { PipeColumn } from "../PipeColumn"
import { useShowPipes } from "@/context/PipeContext"
import { TSalesPipelineColums } from '@/interface/pipelines'


export const PipeSection = () => {
  const { shownColumns } = useShowPipes();

  return (

      <section className="flex flex-row w-full gap-[14px] items-center justify-center">
        {shownColumns.map((column, index) => (
          <PipeColumn column={column as TSalesPipelineColums} key={`${column}-${index}`} />
        ))}
      </section>
  )
}
