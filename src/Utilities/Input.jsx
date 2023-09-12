import React from "react";

function Input({
  className,
  type,
  label,
  value,
  onChange,
  placeholder,
  labelClassName,
  divClassName,
  id,
  name,
}) {
  return (
    <>
      <div className={divClassName || "flex flex-col w-full"}>
        <label
          className={
            labelClassName ? labelClassName : " text-left text-gray-400"
          }
        >
          {label}
        </label>
        <input
          className={className}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}

export default Input;
