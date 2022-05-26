import { Badge, Box, Center, Icon, Image, Spacer } from "@chakra-ui/react";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import React from "react";
export default function Card(props) {
  return (
    <Box
      maxW="250"
      minH="80%"
      borderWidth="1px"
      borderColor={"black"}
      overflow="hidden"
      m="1vw"
      display={"flex"}
      flexDir="column"
      color="black"
      position={'relative'}
    >
      <Box>
        <Image
          w="100vw"
          h="150px"
          src={props.imageUrl}
          alt={props.imageAlt}
          bg="gray"
        />
        <Badge my="0" maxW="100" position="absolute" right="30" top="5">
          <Center>{props.status}</Center>
        </Badge>
      </Box>

      <Box ml="1vw" my="0.5" fontWeight={"bold"} fontSize={20}>
        {props.name}
      </Box>
      <Box ml="1vw" my="1.5" fontSize={12}>
        Last updated: {props.lastUpdated}
      </Box>
      <Spacer />
      <Box
        ml="1vw"
        my="1.5"
        fontSize={15}
        maxW="13vw"
        display={"flex"}
        flexDirection="row"
      >
        <Box>
          <Icon as={CastForEducationIcon} w="5" h="3" />
          Lessons: {props.lessons}
        </Box>
        <Spacer />
        <Box mr='2'>
          <Icon as={AvTimerIcon} w="5" h="3" />
          Minutes: {props.minutes}
        </Box>
      </Box>
      <Badge ml="1vw" my="1.5" maxW="100" borderRadius={50}>
        <Center>{props.tag}</Center>
      </Badge>
    </Box>
  );
}
