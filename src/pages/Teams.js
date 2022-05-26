import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Teams() {
  return (
    <Box color="black" display="flex">
      <Sidebar />
      <Box ml="20vw" fontSize={"4xl"}>
        TEAMS Page
      </Box>
    </Box>
  );
}
