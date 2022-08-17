import React, {useState} from "react";
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
import DateTimePicker from "react-datetime-picker";

export const MatchAdd = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = React.useRef(null);
    const [value, onChange] = useState(new Date());
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
                        <Heading size={"sm"}> Create New Match </Heading>
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuLX5NTDN0_uClN5O3Hm3nTUxmkJZfv6jF5jJEaNcvK9FDvChjTd81jBkaQz7DeQ7uUI&usqp=CAU"
                        />
                    </GridItem>
                    <GridItem m={2} rounded={"20%"}>
                        {" "}
                        <Button w={"70%"} h={"full"} onClick={onOpen} p={2} fontSize={15}>
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
            >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent rounded={0} backgroundColor={"rgba(255, 255, 255, 0.7)"}>
                    <ModalHeader>Add new match</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Home Team</FormLabel>
                            <Select
                                ref={initialRef}
                                placeholder="Home team"
                                backgroundColor={"rgba(155, 155, 255, 0.25)"}
                            />
                        </FormControl>
                        <FormControl mt={2}>
                            <FormLabel>Guest Team</FormLabel>
                            <Select placeholder="Guest team"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Group</FormLabel>
                            <Select></Select>
                        </FormControl>
                        <FormControl mt={2}>
                            <Flex>
                                <Box>
                                    <FormLabel>Start time</FormLabel>
                                </Box>
                                <Box>
                                    <DateTimePicker
                                        onChange={onChange}
                                        value={value}
                                    ></DateTimePicker>
                                </Box>
                            </Flex>
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
