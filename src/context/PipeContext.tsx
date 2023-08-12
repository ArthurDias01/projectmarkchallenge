'use client'
import { SalesPipelines, SalesPipelineColumns } from '@/config/constants';
import { TSalesPipeline, TSalesPipelineColums } from '@/interface/pipelines';
import { useContext, useState, createContext, ReactNode, useEffect } from 'react';

interface PipeContextData {
  selectedPipeType: TSalesPipeline;
  handleSelectPipeType: (pipeType: TSalesPipeline) => void;
  shownColumns: string[];
};

interface PipeProviderProps {
  children: ReactNode;
};


const Context = createContext({} as PipeContextData);

export const PipeContext = ({ children }: PipeProviderProps) => {
  const [selectedPipeType, setSelectedPipeType] = useState<TSalesPipeline>('Basic');
  const [shownColumns, setShownColumns] = useState<any[]>([]);


  const handleSelectPipeType = (pipeType: TSalesPipeline) => {
    setSelectedPipeType(pipeType);
  }

  function getSalesPipelineColumns(pipeline: TSalesPipeline) {
    switch (pipeline) {
      case "Basic":
        return ['LEAD', 'SUBMITTED', 'WON']
      case "Advanced":
        return ['LEAD', 'SUBMITTED', 'WON', 'CLOSED']
      case "Expert":
        return ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST', 'CLOSED']
      case "Custom":
        return ['LEAD', 'RFP IN PROGRESS', 'SUBMITTED', 'WON', 'LOST']
    }
  }


  useEffect(() => {
    const columns = getSalesPipelineColumns(selectedPipeType);
    setShownColumns(columns);
  }, [selectedPipeType]);

  return (
    <Context.Provider value={{
      handleSelectPipeType,
      selectedPipeType,
      shownColumns,
    }}>
      {children}
    </Context.Provider >
  )
}


export const useShowPipes = () => {
  const context = useContext(Context);
  return context;
}
