import React from "react";
import "./loader.css";

export const Loader = () => {
  return (
    <div>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
