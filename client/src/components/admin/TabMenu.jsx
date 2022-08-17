import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
  AddList,
  GroupList,
  MatchList,
  NewsList,
  TeamList,
  UserList,
} from "./index";

export const TabMenu = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.50)",
      }}
      py={5}
      px={10}
      w={{ base: "container.sm", lg: "container.lg" }}
      h={"full"}
      m={2}
      roundedTop={"3xl"}
    >
      <Tabs orientation={"horizontal"} isLazy isFitted variant={"soft-rounded"}>
        <TabList alignItems={"flex-start"}>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            Create
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            News
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            User
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            Match
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            Team
          </Tab>
          <Tab
            fontSize={"md"}
            _selected={{ color: "white", bg: "blackAlpha.300" }}
          >
            Group
          </Tab>
        </TabList>
        <TabPanels
          roundedTop={"md"}
          mt={2}
          p={2}
          bgColor={"rgba(255, 255, 255, 0.2)"}
        >
          <TabPanel>
            <AddList />
          </TabPanel>
          <TabPanel>
            <NewsList />
          </TabPanel>
          <TabPanel>
            <UserList />
          </TabPanel>
          <TabPanel>
            <MatchList />
          </TabPanel>
          <TabPanel>
            <TeamList />
          </TabPanel>
          <TabPanel>
            <GroupList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
