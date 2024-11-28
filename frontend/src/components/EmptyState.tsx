"use client";

import React from "react";
import { CloudDrizzleIcon } from "lucide-react";

interface EmptyStateProps {
  emptyPromptText: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ emptyPromptText }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <CloudDrizzleIcon
        className="h-12 w-12 text-gray-400"
        aria-hidden="true"
      />
      <p className="mt-2 text-sm text-gray-500">{emptyPromptText}</p>
    </div>
  );
};

export default EmptyState;
