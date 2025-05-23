import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // Add onClick prop
  type?: "button" | "submit" | "reset"; // Optional type prop for form buttons
}

export function PrimaryButton({
  className = "",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`p-2 border-2 border-[#65AD47] bg-[#65AD47] text-white rounded-md transition transition-ease-out hover:bg-transparent hover:text-[#65AD47] hover:border-[#65AD47] cursor-pointer flex items-center justify-center gap-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  className = "",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`p-2 border-2 border-white bg-transparent text-white rounded-md transition transition-ease-out cursor-pointer hover:border-[#65AD47] hover:text-[#65AD47] flex items-center justify-center gap-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
