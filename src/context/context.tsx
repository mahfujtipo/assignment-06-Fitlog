"use client";

import React, { useState, createContext } from "react";

import { Workout } from "@/type/Datatype";

type FitcontextType = {
  addplan: Workout[];
  setaddplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  save: Workout[];
  setsave: React.Dispatch<React.SetStateAction<Workout[]>>;
};

type contextProviderProps = {
  children: React.ReactNode;
};

export const Fitcontext = createContext<FitcontextType | undefined>(undefined);

const contextProvider = ({ children }: contextProviderProps) => {
  const [addplan, setaddplan] = useState<Workout[]>([]);
  const [save, setsave] = useState<Workout[]>([]);

  const shareddata = {
    addplan,
    setaddplan,
    save,
    setsave,
  };

  return (
    <Fitcontext.Provider value={shareddata}>{children}</Fitcontext.Provider>
  );
};

export default contextProvider;
