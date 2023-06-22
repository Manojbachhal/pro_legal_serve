import React from "react";
import { Navbar } from "@mantine/core";
function Sidebar() {
  return (
    <Navbar width={{ sm: 280, md: 280 }} pr={"md"}>
      <p
        style={{
          background: "#FAF6E7",
          padding: "10px",
          borderLeft: "3px solid #E4C441",
          borderRadius: " 0px 10px 10px 0px",
          fontWeight: 700,
          fontSize: "17px",
          fontFamily: "Open Sans",
        }}
      >
        Company Details
      </p>
    </Navbar>
  );
}

export default Sidebar;
