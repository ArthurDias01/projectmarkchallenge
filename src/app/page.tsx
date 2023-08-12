import { CustomCheckbox } from "@/components/CustomCheckbox";
import { PipeColumn } from "@/components/PipeColumn";
import { PipeSection } from "@/components/PipeSection";
import { SalesPipelines, SalesPipelineColumns } from '@/config/constants'
import { PipeContext } from "@/context/PipeContext";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white rounded-3xl">
      <PipeContext>
        <section className="flex flex-col h-[166px] w-fit mx-auto my-12 items-center">
          <h2 className="font-bold text-strong text-custom-3xl">Please Select the type of sales pipeline that best fits to your company</h2>
          <section className="w-fit flex flex-row gap-4 mt-[42px] mb-[70px]">
            {SalesPipelines.map((type, index) => (
              <CustomCheckbox type={type} key={`${type}-${index}`} />
            ))}
          </section>
        </section>
        <PipeSection />
      </PipeContext>
    </main >
  )
}
