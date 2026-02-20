import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  className = "",
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bgPrimary";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent shadow-[0_0_15px_rgba(128,0,0,0.3)] disabled:opacity-100 disabled:cursor-not-allowed disabled:bg-accent",
    secondary: "bg-bgSecondary text-textPrimary hover:bg-gray-800",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const innerContent = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={target}
        rel={rel}
        download={download}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {innerContent}
    </motion.button>
  );
};
