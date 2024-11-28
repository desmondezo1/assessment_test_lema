"use client";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "@/lib/GlobalContextAPi";
import { useContext } from "react";

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = useContext(GlobalDispatchContext);
  if (!context) {
    throw new Error("useGlobalDispatch must be used within a GlobalProvider");
  }
  return context;
};

// Custom Hook
export const useAppState = () => {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  return { state, dispatch };
};
