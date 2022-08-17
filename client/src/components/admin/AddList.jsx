import { Box, Center, Wrap } from "@chakra-ui/react";
import { MatchAdd } from "./MatchAdd";
import { TeamAdd } from "./TeamAdd";
import { GroupAdd } from "./GroupAdd";
import { NewsAdd } from "./NewsAdd";

export const AddList = () => {
  return (
    <Center>
      <Box>
        <Wrap p={5} align={"flex-start"} alignContent={"center"} spacing={5}>
          <TeamAdd />
          <MatchAdd />
          <GroupAdd />
          <NewsAdd />
        </Wrap>
      </Box>
    </Center>
  );
};
