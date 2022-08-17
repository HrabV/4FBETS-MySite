import {
    Box,
    Button,
    FormControl,
    NumberInput,
    NumberInputField,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

export const MatchForBets = () => {
    return (
        <Stack maxW={"350px"}>
            <Box>
                <Box textAlign={"center"}>Matches for Bets</Box>
                <Box></Box>
                <Table size={"sm"}>
                    <Thead>
                        <Th fontSize={"10px"}>Home Team</Th>
                        <Th fontSize={"10px"}>Guest Team</Th>
                        <Th fontSize={"10px"}>Home Score Goles</Th>
                        <Th fontSize={"10px"}>Guest Score Goles</Th>
                        <Th></Th>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>team1</Td>
                            <Td>team2</Td>
                            <Td>
                                <FormControl>
                                    <NumberInput
                                        width={"45px"}
                                        height={"30px"}
                                        borderColor={"gray.100"}
                                        bgColor={"rgba(255,255,255, 0.2)"}
                                    >
                                        <></>
                                    </NumberInput>
                                </FormControl>
                            </Td>
                            <Td>
                                <FormControl width={"40px"}>
                                    <NumberInput min={"0"} size={"sm"}>
                                        <NumberInputField
                                            borderColor={"gray.100"}
                                            bgColor={"rgba(255,255,255, 0.2)"}
                                        />
                                    </NumberInput>
                                </FormControl>
                            </Td>
                            <Td>
                                <Button width={"50px"} size={"sm"} type={"submit"}>
                                    Save
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};
