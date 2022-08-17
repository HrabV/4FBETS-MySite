import {Avatar, HStack, Table, Tbody, Td, Text, Th, Thead, Tr,} from "@chakra-ui/react";

export const GroupStat = () => {
    return (
        <Table>
            <Thead>
                <Th>Place</Th>
                <Th>Player</Th>
                <Th>Point</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>
                        <HStack>
                            <Avatar size={"sm"}></Avatar>
                            <Text>User1</Text>
                        </HStack>
                    </Td>
                    <Td>2</Td>
                </Tr>
            </Tbody>
        </Table>
    );
};
