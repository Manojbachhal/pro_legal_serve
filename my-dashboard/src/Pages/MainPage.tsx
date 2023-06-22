import React from "react";
import { Flex } from "@mantine/core";
import Sidebar from "../Components/Sidebar";
import Home from "./Home";
function MainPage() {
  return (
    <Flex>
      <Sidebar />
      <Home />
    </Flex>
  );
}

export default MainPage;
