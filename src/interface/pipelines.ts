import { SalesPipelineColumns, SalesPipelines } from '@/config/constants'

export type TSalesPipeline = typeof SalesPipelines[number]
export type TSalesPipelineColums = typeof SalesPipelineColumns[number]

type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]]

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

function stringUnionToArray<T>() {
  return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) => elements;
}

export const SalesPipelineColumnsArray = stringUnionToArray<TSalesPipelineColums>()(...SalesPipelineColumns)
