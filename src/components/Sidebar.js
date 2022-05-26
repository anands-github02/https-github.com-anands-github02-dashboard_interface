import { Box, Center, Divider, Spacer } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Sidebar() {
  const items = [
    {
      item: "Dashboard",
      link: "dashboard",
      icon: <HomeIcon />,
    },
    {
      item: "Knowledge",
      link: "",
      icon: <SchoolIcon />,
    },
    {
      item: "Members",
      link: "members",
      icon: <PeopleIcon />,
    },
    {
      item: "Teams",
      link: "teams",
      icon: <FolderSharedIcon />,
    },
    {
      item: "Vault",
      link: "vault",
      icon: <LockOpenIcon />,
    },
    {
      item: "Chat",
      link: "chat",
      icon: <ChatIcon />,
    },
  ];
  const itemsBottom = [
    {
      item: "Settings",
      link: "settings",
      icon: <SettingsIcon />,
    },
    {
      item: "Company",
      link: "company",
      icon: <BusinessIcon />,
    },
    {
      item: "My Profile",
      link: "profile",
      icon: <AccountCircleIcon />,
    },
  ];

  return (
    <Box
      bg="black"
      w="15vw"
      h="100vh"
      display="flex"
      color="whiteAlpha.900"
      flexDirection={"column"}
      position="fixed"
      borderRight="5px solid #009eb5"
    >
      <Box>
        <Box h="10vh" p="5">
          <Center fontSize={"2xl"}>Remote Salesful</Center>
        </Box>
        <Divider />

        {items.map((sideItem) => {
          return (
            <Link to={`/${sideItem.link}`}>
              <SidebarItem item={sideItem.item} icon={sideItem.icon} />
            </Link>
          );
        })}
      </Box>
      <Spacer />
      <Box mb="2vw">
        {itemsBottom.map((sideItemBottom) => {
          return (
            <Link to={`/${sideItemBottom.link}`}>
              <SidebarItem
                item={sideItemBottom.item}
                icon={sideItemBottom.icon}
              />
            </Link>
          );
        })}
      </Box>
      <Divider />
      <Box h="5vh" mt="3vh">
        <Center>Powered By Team Jeanyus</Center>
      </Box>
    </Box>
  );
}
