import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import React from "react";

export const GroupList = () => {
    return (
        <TableContainer>
            <Table colorScheme={"gray"}>
                <Thead>
                    <Tr>
                        <Th>Group Name</Th>
                        <Th>Group Type</Th>
                        <Th>Date Start</Th>
                        <Th>Date End</Th>
                        <Th>Show Group Members</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <h1>Vorskla</h1>
                        </Td>
                        <Td>
                            <h1>General</h1>
                        </Td>
                        <Td>
                            <h1>20/05/2022</h1>
                        </Td>
                        <Td>
                            <h1>22/07/2022</h1>
                        </Td>
                        <Td>
                            <Button>Show fans</Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <h1>Dinamo</h1>
                        </Td>
                        <Td>
                            <h1>Fans</h1>
                        </Td>
                        <Td>
                            <h1>20/05/2022</h1>
                        </Td>
                        <Td>
                            <h1></h1>
                        </Td>
                        <Td>
                            <Button>Show fans</Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
