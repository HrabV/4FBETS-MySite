import React, {useState} from "react";
import DateTimePicker from "react-datetime-picker";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
} from "@chakra-ui/react";

export const GroupAdd = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = React.useRef(null);
    const [valueStart, onChangeStart] = useState(new Date());
    const [valueEnd, onChangeEnd] = useState(new Date());

    return (
        <>
            <Box
                width={"150px"}
                height={"250px"}
                rounded={"10%"}
                boxShadow={"5px 5px 10px gray"}
                bg={"blackAlpha.100"}
                _hover={{boxShadow: "10px 10px 10px gray"}}
            >
                <Grid
                    w={"full"}
                    h={"full"}
                    p={2}
                    align={"center"}
                    gridTemplateRows={"20% 1fr max-content "}
                >
                    <GridItem alignSelf={"center"} p={2}>
                        <Heading size={"sm"}> Create New Group </Heading>
                    </GridItem>
                    <GridItem
                        rounded={"50%"}
                        p={"2"}
                        m={2}
                        bgColor={"white"}
                        boxShadow={"1px 1px 10px gray"}
                    >
                        <Image
                            rounded={"50%"}
                            h={"full"}
                            src="https://cdn4.vectorstock.com/i/1000x1000/33/68/football-cup-group-stage-world-tournament-table-vector-30103368.jpg"
                        />
                    </GridItem>
                    <GridItem m={2} rounded={"20%"}>
                        {" "}
                        <Button
                            w={"70%"}
                            h={"full"}
                            onClick={onOpen}
                            p={2}
                            fontSize={15}
                            _hover={{
                                shadow: "md",
                                bgColor: "blackAlpha.500",
                                color: "white",
                            }}
                        >
                            Add
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
            <Modal
                closeOnOverlayClick={false}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                backdropFilter="blur(20px)"
                size={"xl"}
            >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent rounded={0} backgroundColor={"rgba(255, 255, 255, 0.7)"}>
                    <ModalHeader>Add new group</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Group name</FormLabel>
                            <Input ref={initialRef} placeholder="Group name"/>
                        </FormControl>
                        <FormControl marginTop={2}>
                            <FormLabel>Type of Group</FormLabel>
                            <Select backgroundColor={"aliceblue"}>Type of Group</Select>
                        </FormControl>
                        <FormControl marginTop={2} isDisabled>
                            <FormLabel>Football Team</FormLabel>
                            <Select>Football team</Select>
                        </FormControl>
                        <FormControl marginTop={2}>
                            <Box>
                                <Flex>
                                    {" "}
                                    <Box width={"150px"}>
                                        <FormLabel>Start date</FormLabel>
                                    </Box>
                                    <Box>
                                        <DateTimePicker
                                            onChange={onChangeStart}
                                            value={valueStart}
                                        ></DateTimePicker>
                                    </Box>{" "}
                                </Flex>
                            </Box>
                        </FormControl>
                        <FormControl marginTop={2}>
                            <Box>
                                <Flex>
                                    <Box width={"150px"}>
                                        <FormLabel>End date</FormLabel>
                                    </Box>
                                    <Box>
                                        <DateTimePicker
                                            onChange={onChangeEnd}
                                            value={valueEnd}
                                        ></DateTimePicker>
                                    </Box>{" "}
                                </Flex>
                            </Box>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
