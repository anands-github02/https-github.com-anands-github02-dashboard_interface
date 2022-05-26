import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function Knowledge() {
  return (
    <Box display="flex" maxW="100vw">
      <Sidebar />
      <Layout />
    </Box>
  );
}
