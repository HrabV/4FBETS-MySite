import {
    Button,
    FormControl,
    FormLabel,
    Switch,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";

export const UserList = () => {
    return (
        <TableContainer>
            <Table variant={"simple"} colorScheme={"gray"}>
                <Thead>
                    <Tr>
                        <Th>User Nickname</Th>
                        <Th></Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text fontSize={{base: "10px", md: "15px", lg: "25px"}}>
                                Vorskla1{" "}
                            </Text>
                        </Td>
                        <Td>
                            <FormControl display="flex" alignItems="center">
                                <FormLabel
                                    htmlFor="isBanned"
                                    mb="0"
                                    fontSize={{base: "8px", md: "12px", lg: "20px"}}
                                >
                                    Ban the User
                                </FormLabel>
                                <Switch
                                    id="isBanned"
                                    colorScheme={"red"}
                                    size={{base: "sm", md: "md", lg: "lg"}}
                                />
                            </FormControl>
                        </Td>
                        <Td></Td>
                        <Td>
                            <Button
                                rounded={"0"}
                                bgColor={"rgba(255, 255, 255, 0.1)"}
                                shadow={"sm"}
                                _hover={{bgColor: "rgba(255, 255, 255, 0.2)", shadow: "md"}}
                            >
                                Save
                            </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
