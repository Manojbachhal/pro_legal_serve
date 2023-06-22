import React from "react";
import { Navbar } from "@mantine/core";
function Sidebar() {
  return (
    <Navbar width={{ sm: 250, md: 250 }} pr={"md"}>
      <h5
        style={{
          background: "#FAF6E7",
          padding: "10px",
          borderLeft: "2px solid #E4C441",
          borderRadius: " 0px 10px 10px 0px",
        }}
      >
        Company Details
      </h5>
    </Navbar>
  );
}

export default Sidebar;
