import {
    Box,
    Button,
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
    useDisclosure
} from "@chakra-ui/react";
import React from "react";

export const TeamAdd = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = React.useRef(null);

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
                        <Heading size={"sm"}> Create New Team </Heading>
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrnpebGsvnVK2LX5Xyf8LWtOAxkJmKOOz4Q-r53jckWjiE3nMoozFV3UQHnEGg5xLxRw&usqp=CAU"
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
                <ModalContent rounded={0} bgColor={"rgba(255, 255, 255, 0.75)"}>
                    <ModalHeader>Add new team</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Team name</FormLabel>
                            <Input ref={initialRef} placeholder="Team name"/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Team Logo</FormLabel>
                            <Input
                                px={"1"}
                                variant="unstyled"
                                type={"file"}
                                accept="image/*"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
