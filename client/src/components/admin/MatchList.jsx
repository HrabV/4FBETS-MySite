import {Button, FormControl, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,} from "@chakra-ui/react";
import React from "react";

export const MatchList = () => {
    return (
        <TableContainer>
            <Table colorScheme={"gray"}>
                <Thead>
                    <Tr>
                        <Th>Home Team</Th>
                        <Th>Guest Team</Th>
                        <Th>Home team score</Th>
                        <Th>Guest team score</Th>
                        <Th>Edit</Th>
                        <Th>Save Result</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>Vorskla</Text>
                        </Td>
                        <Td>
                            <Text>Dinamo</Text>
                        </Td>
                        <Td>
                            <FormControl>
                                <Input type={"number"}></Input>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl>
                                <Input type={"number"}></Input>
                            </FormControl>
                        </Td>
                        <Td>
                            <Button>Edit</Button>
                        </Td>
                        <Td>
                            <Button>Save</Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
