import React from "react";
import { useNavigate } from "react-router-dom";

type AppButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "warning" | "favorite";
  className?: string;
};

const variantClasses: Record<string, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-300 text-black hover:bg-gray-400",
  success: "bg-green-500 text-white hover:bg-green-600",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  favorite: "bg-pink-500 text-white hover:bg-pink-600",
};

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  to,
  onClick,
  variant = "secondary",
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default AppButton;
