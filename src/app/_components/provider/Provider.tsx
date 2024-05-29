"use client";

import store from "@/features/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
