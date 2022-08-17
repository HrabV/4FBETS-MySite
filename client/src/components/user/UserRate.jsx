import {Box, Flex, VStack} from "@chakra-ui/react";
import {Stat, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/stat";

export const UserRate = () => {
    const today = new Date().toLocaleDateString("en-US");

    return (
        <Box>
            <VStack>
                <Stat width={"150px"} p={2} shadow={"md"}>
                    <Flex flexDirection={"column"} justifyContent={"space-around"}>
                        <StatLabel>Global Rank Place</StatLabel>
                        <StatNumber>154</StatNumber>
                    </Flex>
                </Stat>
                <Stat width={"150px"} p={2} shadow={"md"}>
                    <Flex flexDirection={"column"} justifyContent={"space-around"}>
                        <StatLabel>Point</StatLabel>
                        <StatNumber>2546</StatNumber>
                        <StatHelpText>{today}</StatHelpText>
                    </Flex>
                </Stat>
            </VStack>
        </Box>
    );
};
