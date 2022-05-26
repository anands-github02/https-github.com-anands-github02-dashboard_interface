import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import TabLists from "./TabLists";

export default function Layout() {
  return (
    <Box maxW="85vw" display={"flex"} flexDirection="column" ml={"15vw"}>
      <Navbar />
      <Divider />
      <TabLists />
    </Box>
  );
}
