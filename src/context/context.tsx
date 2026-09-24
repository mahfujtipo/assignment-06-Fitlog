"use client";

import React, { useState, createContext, useEffect } from "react";

import { Workout } from "@/type/Datatype";

type FitcontextType = {
  addplan: Workout[];
  setaddplan: React.Dispatch<React.SetStateAction<Workout[]>>;
  save: Workout[];
  setsave: React.Dispatch<React.SetStateAction<Workout[]>>;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const Fitcontext = createContext<FitcontextType | undefined>(undefined);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [addplan, setaddplan] = useState<Workout[]>([]);
  const [save, setsave] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSave = localStorage.getItem("fitlog-save");

    if (storedPlan) {
      try {
        setaddplan(JSON.parse(storedPlan));
      } catch {
        localStorage.removeItem("fitlog-plan");
      }
    }

    if (storedSave) {
      try {
        setsave(JSON.parse(storedSave));
      } catch {
        localStorage.removeItem("fitlog-save");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(addplan));
  }, [addplan]);

  useEffect(() => {
    localStorage.setItem("fitlog-save", JSON.stringify(save));
  }, [save]);

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

export default ContextProvider;
