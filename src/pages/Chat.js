import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Chat() {
  return (
    <Box color="black" display="flex">
      <Sidebar />
      <Box ml="20vw" fontSize={"4xl"}>
        CHAT Page
      </Box>
    </Box>
  );
}
