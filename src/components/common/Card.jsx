import React from "react";

const Card = ({ children, className }) => {
  return (
    <>
      <div className={`${className} p-2 rounded-sm`}>{children}</div>
    </>
  );
};

export default Card;
