"use client";
import React, { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalProvider } from "./GlobalContextAPi";
import { Toaster } from "@/components/ui/toaster";

interface IntegrationWrapperProps {
  children: React.ReactNode;
}

const IntegrationWrapper: React.FC<IntegrationWrapperProps> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalProvider>
  );
};

export default IntegrationWrapper;
