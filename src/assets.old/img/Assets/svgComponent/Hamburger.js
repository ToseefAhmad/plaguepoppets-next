import React from "react";

const Hamburger = (props) => {
  return (
    <svg
      width="42"
      height="31"
      viewBox="0 0 42 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="5" fill={props.fill || "#D9D9D9"} />
      <rect y="13" width="42" height="5" fill={props.fill || "#D9D9D9"} />
      <rect y="26" width="42" height="5" fill={props.fill || "#D9D9D9"} />
    </svg>
  );
};

export default Hamburger;
