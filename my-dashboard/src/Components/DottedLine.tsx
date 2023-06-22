import React from "react";

function DottedLine() {
  return (
    <div
      style={{
        margin: "5px 40px",
        height: "2px",
        background:
          "repeating-linear-gradient(to right, transparent, transparent 10px, #ADADAD 10px, #ADADAD 20px)",
      }}
    ></div>
  );
}

export default DottedLine;
