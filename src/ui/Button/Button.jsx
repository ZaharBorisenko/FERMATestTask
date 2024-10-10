import React from "react";

const buttonStyles = {
  primary:
    "border-2 border-[#30324B] text-[#30324B] bg-transparent hover:bg-[#575A84] hover:text-white focus:bg-[#30324B] focus:outline-none",
  primaryActive: "bg-[#30324B] text-white border-2 border-[#30324B]",

  secondary:
    "border-2 border-[#6AD400] text-[#6AD400] bg-transparent hover:bg-[#CEFF9D] focus:bg-[#6AD400] focus:outline-none",
  secondaryActive: "bg-[#6AD400] text-white border-2 border-[#6AD400]",

  warning:
    "border-2 border-[#FF2F2F] text-[#FF2F2F] bg-transparent hover:bg-[#FFB8B8] focus:bg-[#FF2F2F] focus:outline-none",
  warningActive: "bg-[#FF2F2F] text-white border-2 border-[#FF2F2F]",

  disabled: "bg-[#F2F3F5] text-[#DEDEDE] cursor-not-allowed",
};

export const Button = ({
  type = "primary",
  state = "default",
  disabled = false,
  onClick,
  children,
}) => {
  const getButtonClass = () => {
    if (disabled) {
      return buttonStyles.disabled;
    }
    return state === "active"
      ? buttonStyles[`${type}Active`]
      : buttonStyles[type];
  };

  return (
    <button
      className={`py-2.5 px-4 rounded-lg  ${getButtonClass()} transition-all duration-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
