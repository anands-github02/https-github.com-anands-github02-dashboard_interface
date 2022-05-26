import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import CreateCourse from "./CreateCourse";

export default function Navbar() {
  return (
    <Box
      w="85vw"
      display={"flex"}
      flexDirection="row"
      position={"fixed"}
      zIndex="100"
      pt="1vh"
      bg="white"
    >
      <Box h="7vh" fontSize={35} ml="10">
        KNOWLEDGE
      </Box>
      <Spacer />
      <CreateCourse />
      <Link to="/profile">
        <Avatar size="sm" mr="2vw" />
      </Link>
      <Menu>
        <MenuButton
          mr="2vw"
          as={IconButton}
          aria-label="Options"
          icon={<ListSharpIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>Menu item</MenuItem>
          <MenuItem>Menu item</MenuItem>
          <MenuItem>Menu item</MenuItem>
          <MenuItem>Menu item</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
