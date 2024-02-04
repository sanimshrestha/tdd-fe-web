'use client';
import React from "react";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  text: string,
  type?: "button" | "submit" | "reset",
  onClick?: () => void
}

const PrimaryButton = ({ text, type, onClick }: PrimaryButtonProps) => {
  return (
    <motion.button
      layout
      className="bg-button-primary border border-button-primary text-white 
                  text-sm py-2 sm:py-2.5 px-4 rounded-lg cursor-pointer
                  w-full max-w-80
                  hover:bg-button-primary-hover
                  hover:border-button-primary-hover
                  "
      onClick={onClick}
      type={type}
    >
      {text}
    </motion.button>
  );
};

export default PrimaryButton;

{/* <input
type="text"
id="email"
name="email"
placeholder="Enter your email"
className={`bg-primary border py-2 sm:py-2.5 px-3.5 rounded-lg 
    border-border-primary text-primary-foreground w-full text-sm
      focus:outline-none focus:ring-2 focus:ring-light max-w-80 
      ${state.status === Status.Invalid && 'border-error'}`}
/> */}