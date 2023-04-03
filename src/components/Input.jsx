import React from "react";

const Input = ({
  name,
  value,
  handleInputChange,
  componentId,
  type = "text",
}) => {
  return (
    <input
      className="appearance-none shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2.5  px-3 text-grey text-sm leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      name={name}
      value={value}
      onChange={(event) => handleInputChange(event, componentId)}
    />
  );
};

export default Input;
