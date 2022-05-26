import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "./Card";
import property from "../property";

export default function TabLists(props) {
  return (
    <Box display={"flex"} flexDirection="column" mt="7vh" w="83vw">
      <Box>
        <Tabs ml="10" mt="10" variant={"line"}>
          <TabList>
            <Tab>All</Tab>
            <Tab>Live</Tab>
            <Tab>Draft</Tab>
            <Tab>Archived</Tab>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<KeyboardArrowDownIcon />}
                mr="10"
              >
                Select Team
              </MenuButton>
              <MenuList>
                <MenuItem>Team One</MenuItem>
                <MenuItem>Team Two</MenuItem>
                <MenuItem>Team Three</MenuItem>
                <MenuItem>Team Four</MenuItem>
                <MenuItem>Team</MenuItem>
              </MenuList>
            </Menu>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid minChildWidth="18vw" spacing="0vw">
                {property.map((cardProps) => {
                  return (
                    <Box>
                      <Card {...cardProps} />
                    </Box>
                  );
                })}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid minChildWidth="18vw" spacing="0vw">
                {property.map((cardProps) => {
                  {
                    if (cardProps.status === "live") {
                      return (
                        <Box>
                          <Card {...cardProps} />
                        </Box>
                      );
                    }
                  }
                })}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid minChildWidth="18vw" spacing="0vw">
                {property.map((cardProps) => {
                  {
                    if (cardProps.status === "draft") {
                      return (
                        <Box>
                          <Card {...cardProps} />
                        </Box>
                      );
                    }
                  }
                })}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid minChildWidth="18vw" spacing="0vw">
                {property.map((cardProps) => {
                  {
                    if (cardProps.status === "archived") {
                      return (
                        <Box>
                          <Card {...cardProps} />
                        </Box>
                      );
                    }
                  }
                })}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
