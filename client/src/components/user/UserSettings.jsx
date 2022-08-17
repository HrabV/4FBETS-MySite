import {Avatar, Box, Button, Flex, FormControl, FormLabel, Heading, Select, Stack,} from "@chakra-ui/react";

import "./index.css";
import {ResetPassword} from "./ResetPassword";

export const UserSettings = () => {
    return (
        <>
            <Stack>
                <Flex flexDirection={"column"} justifyContent={"space-between"}>
                    <Box mb={4} boxShadow="md">
                        <Stack direction={{base: "column", md: "row"}}>
                            <FormControl>
                                <FormLabel color={"blackAlpha.700"} textAlign={"center"}>
                                    First fans team
                                </FormLabel>
                                <Select
                                    color={"white"}
                                    style={{
                                        borderRadius: "0",
                                        color: "white",
                                        backgroundColor: "#38A169",
                                    }}
                                >
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="0"
                                        style={{display: "none"}}
                                    >
                                        First fans team
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="1"
                                    >
                                        First1
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="2"
                                    >
                                        First2
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="3"
                                    >
                                        First3
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="4"
                                    >
                                        First4
                                    </option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel color={"blackAlpha.700"} textAlign={"center"}>
                                    Second fans team
                                </FormLabel>
                                <Select
                                    color={"white"}
                                    style={{
                                        borderRadius: "0",
                                        color: "white",
                                        backgroundColor: "#38A169",
                                    }}
                                >
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="0"
                                        style={{display: "none"}}
                                    >
                                        Second fans team
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="1"
                                    >
                                        First1
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="2"
                                    >
                                        First2
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="3"
                                    >
                                        First3
                                    </option>
                                    <option
                                        style={{
                                            color: "white",
                                            backgroundColor: "#38A169",
                                        }}
                                        value="4"
                                    >
                                        First4
                                    </option>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack spacing={10} pt={2}>
                            <Button
                                rounded={0}
                                loadingText="Submitting"
                                size="md"
                                shadow={"sm"}
                                bgColor={"rgba(255,255,255, 0.3)"}
                                _hover={{
                                    bgColor: "rgba(255,255,255, 0.5)",
                                    shadow: "md",
                                }}
                            >
                                Save teams of fans
                            </Button>
                        </Stack>
                    </Box>
                    <Box mb={2} boxShadow={"md"}>
                        <Stack>
                            {" "}
                            <Heading
                                fontSize={"15px"}
                                fontStyle={"italic"}
                                textAlign={"center"}
                                color={"blackAlpha.700"}
                            >
                                Change Avatar
                            </Heading>
                            <Box>
                                <Flex justify={"center"}>
                                    <Avatar justify={"center"} size={"md"}></Avatar>
                                </Flex>
                            </Box>
                            <FormControl>
                                <Select
                                    rounded={0}
                                    color={"white"}
                                    bg={"green.500"}
                                    _hover={{bg: "green.700"}}
                                    value="avatar"
                                    placeholder="Choose avatar"
                                    size={"md"}
                                ></Select>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        rounded={0}
                                        loadingText="Submitting"
                                        size="md"
                                        shadow={"sm"}
                                        bgColor={"rgba(255,255,255, 0.3)"}
                                        _hover={{
                                            bgColor: "rgba(255,255,255, 0.5)",
                                            shadow: "md",
                                        }}
                                    >
                                        Save avatar
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Stack>
                    </Box>
                    <Box boxShadow={"md"}>
                        <Stack>
                            <Heading
                                fontSize={"15px"}
                                fontStyle={"italic"}
                                textAlign={"center"}
                                color={"blackAlpha.700"}
                            >
                                Change Password
                            </Heading>
                            <ResetPassword></ResetPassword>
                        </Stack>
                    </Box>
                </Flex>
            </Stack>
        </>
    );
};
