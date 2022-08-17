import {Box, Tab, TabList, TabPanel, TabPanels, Tabs,} from "@chakra-ui/react";
import {MatchForBets} from "./MatchForBets";
import {UserActiveGroup} from "./UserActiveGroup";
import {UserFinishedGroup} from "./UserFinishedGroup";

import {UserRate} from "./UserRate";
import {UserSettings} from "./UserSettings";

export const UserMenu = () => {
    return (
        <Box color={"gray.800"}>
            <Tabs
                variant={"unstyled"}
                orientation="vertical"
                bgColor={"rgba(255, 255, 255, 0.0 )"}
            >
                <TabList bgColor={"rgba(255, 255, 255, 0.0 )"}>
                    <Tab
                        justifyContent={"flex-start"}
                        bgColor={"rgba(255, 255, 255, 0.2)"}
                        width={"150px"}
                        shadow={"sm"}
                        _selected={{
                            shadow: "lg",
                            bgColor: "rgba(255, 255, 255, 0.5 )",
                            fontWeight: "semibold",
                        }}
                        _hover={{
                            shadow: "md",
                        }}
                    >
                        Rates
                    </Tab>
                    <Tab
                        justifyContent={"flex-start"}
                        bgColor={"rgba(255, 255, 255, 0.2)"}
                        width={"150px"}
                        shadow={"sm"}
                        _selected={{
                            shadow: "lg",
                            bgColor: "rgba(255, 255, 255, 0.5 )",
                            fontWeight: "semibold",
                        }}
                        _hover={{
                            shadow: "md",
                        }}
                    >
                        My Groups
                    </Tab>
                    <Tab
                        justifyContent={"flex-start"}
                        bgColor={"rgba(255, 255, 255, 0.2)"}
                        width={"150px"}
                        shadow={"sm"}
                        _selected={{
                            shadow: "lg",
                            bgColor: "rgba(255, 255, 255, 0.5 )",
                            fontWeight: "semibold",
                        }}
                        _hover={{
                            shadow: "md",
                        }}
                    >
                        My Live Group
                    </Tab>
                    <Tab
                        justifyContent={"flex-start"}
                        bgColor={"rgba(255, 255, 255, 0.2)"}
                        width={"150px"}
                        shadow={"sm"}
                        _selected={{
                            shadow: "lg",
                            bgColor: "rgba(255, 255, 255, 0.5 )",
                            fontWeight: "semibold",
                        }}
                        _hover={{
                            shadow: "md",
                        }}
                    >
                        Matches
                    </Tab>
                    <Tab
                        justifyContent={"flex-start"}
                        bgColor={"rgba(255, 255, 255, 0.2)"}
                        width={"150px"}
                        shadow={"sm"}
                        _selected={{
                            shadow: "lg",
                            bgColor: "rgba(255, 255, 255, 0.5 )",
                            fontWeight: "semibold",
                        }}
                        _hover={{
                            shadow: "md",
                        }}
                    >
                        Settings
                    </Tab>
                </TabList>
                <TabPanels
                    minHeight={"350px"}
                    height={"100%"}
                    bgColor={"rgba(255, 255, 255, 0.2 )"}
                    shadow={"lg"}
                >
                    {/* <TabPanel>
                        <UserRate/>
                    </TabPanel>
                    <TabPanel>
                        <UserFinishedGroup/>
                    </TabPanel>
                    <TabPanel>
                        <UserActiveGroup/>
                    </TabPanel>
                    <TabPanel>
                        <MatchForBets/>
                    </TabPanel>
                    <TabPanel>
                        <UserSettings/>
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </Box>
    );
};
