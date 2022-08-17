import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {GroupStat} from "./GroupStat";

export const UserFinishedGroup = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Box mb={2}>
                <Button
                    bgColor={"rgba(255, 255, 255, 0.8)"}
                    width={"full"}
                    borderColor={"gray.100"}
                    borderWidth={"1px"}
                    rounded={0}
                    onClick={onOpen}
                    _hover={{bgColor: "green.400", color: "white"}}
                >
                    <Flex fontSize={"12px"} justifyContent={"space-around"}>
                        <Box mr={2}>
                            {" "}
                            <Text>Group name:</Text>{" "}
                        </Box>
                        <Box mr={2}>
                            {" "}
                            <Text>Group 1</Text>
                        </Box>
                        <Text mr={2}>|</Text>
                        <Box mr={2}>
                            {" "}
                            <Text>Date end:</Text>{" "}
                        </Box>
                        <Box>
                            {" "}
                            <Text>{new Date().toLocaleDateString("en-US")}</Text>
                        </Box>
                    </Flex>
                </Button>
            </Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent rounded={0} backgroundColor={"rgba(255, 255, 255, 0.7)"}>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <GroupStat></GroupStat>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
