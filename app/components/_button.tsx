import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function PrimaryButton({ className = "", children }: ButtonProps) {
  return (
    <button
      className={`p-2 border-2 border-[#65AD47] bg-[#65AD47] text-white rounded-md transition transition-ease-out hover:bg-transparent hover:text-[#65AD47] hover:border-[#65AD47] cursor-pointer flex items-center justify-center gap-4 ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ className = "", children }: ButtonProps) {
  return (
    <button
      className={`p-2 border-2 border-white bg-transparrent text-white rounded-md transition transition-ease-out cursor-pointer hover:border-[#65AD47] hover:text-[#65AD47] flex items-center justify-center gap-4 ${className}`}
    >
      {children}
    </button>
  );
}
