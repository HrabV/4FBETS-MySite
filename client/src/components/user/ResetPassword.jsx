import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";

export const ResetPassword = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button
                rounded={0}
                loadingText="Submitting"
                size="md"
                shadow={"sm"}
                bgColor={"rgba(255,255,255, 0.3)"}
                _hover={{
                    bgColor: "rgba(255,255,255, 0.5)",
                    shadow: "md",
                }}
                onClick={onOpen}
            >
                Change password
            </Button>

            <Modal
                bgColor={"rgba(255,255,255, 0.3)"}
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(5px) hue-rotate(30deg)"
                />
                <ModalContent rounded={0} bgColor={"rgba(255,255,255, 0.5)"}>
                    <ModalBody>
                        <Flex align={"center"} justify={"center"}>
                            <Stack spacing={4} w={"full"} maxW={"md"} my={5}>
                                <Heading fontSize={{base: "2xl", md: "3xl"}}>
                                    Enter new password
                                </Heading>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        rounded={0}
                                        placeholder="test@test.com"
                                        _placeholder={{color: "gray.500"}}
                                        type="email"
                                    />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input rounded={0} type="password"/>
                                </FormControl>
                            </Stack>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            rounded={0}
                            color={"green.600"}
                            bgColor={"rgba(255,255,255, 0.5)"}
                            mr={3}
                            _hover={{
                                bgColor: "green.500",
                                color: "white",
                            }}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button
                            rounded={0}
                            color={"green.600"}
                            bgColor={"rgba(255,255,255, 0.5)"}
                            _hover={{
                                bgColor: "green.500",
                                color: "white",
                            }}
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
