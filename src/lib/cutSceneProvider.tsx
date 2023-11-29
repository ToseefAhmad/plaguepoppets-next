'use client'

import React, { PropsWithChildren, useContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react'

  
  export interface ICutscene {
    name: string;
    playing: boolean;
  }

interface CutsceneContextType {
  cutscene: ICutscene;
  setCutscene?: Dispatch<SetStateAction<ICutscene>>;
}

const CutsceneContext = React.createContext<CutsceneContextType>({cutscene: {name:"", playing: false}})

export function CutsceneProvider({ children }: PropsWithChildren) {

  const [cutscene, setCutscene] = useState<ICutscene>({name: "", playing: false})

  return (
    <CutsceneContext.Provider value={{ cutscene, setCutscene }}>
      {children}
    </CutsceneContext.Provider>
  )
}

export const useCutscenes = () => {
  const { cutscene, setCutscene } = useContext(CutsceneContext)
  return { cutscene, setCutscene }
}