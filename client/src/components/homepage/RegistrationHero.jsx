import {Box, Container, Flex, Heading, Image, Link, Stack, Text,} from "@chakra-ui/react";

export const RegistrationHero = () => {
    return (
        <Container
            maxW={"container.xl"}
            position={"relative"}
            zIndex={"3"}
            transform={{base: "none", lg: "translateY(-100px)"}}
        >
            <Stack
                align={"center"}
                spacing={{base: 8, md: 10}}
                py={{base: 6, md: 18}}
                direction={{base: "column", md: "row"}}
            >
                <Stack flex={1} spacing={{base: 5, md: 10}} alignSelf={"flex-start"}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{base: "2xl", sm: "3xl", lg: "5xl"}}
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bgColor: "green.400",
                                zIndex: -1,
                            }}
                        >
                            The game is forgotten,
                        </Text>
                        <br/>
                        <Text
                            as={"span"}
                            color={"green.400"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bgColor: "white",
                                zIndex: -1,
                            }}
                        >
                            the result remains.
                        </Text>
                    </Heading>
                    <Text color={"white"} fontWeight={"medium"}>
                        Scoring is much easier than scoring, and making the right bet is
                        even better. You can do it anywhere and anytime. Support your
                        football club and make him great again. Don't wait go Sign Up
                    </Text>
                    <Stack
                        spacing={{base: 4, sm: 6}}
                        direction={{base: "column", sm: "row"}}
                    >
                        <Link
                            rounded={"full"}
                            fontWeight={"normal"}
                            py={"3"}
                            px={"6"}
                            colorScheme={"green"}
                            bg={"rgba(255, 255, 255, 0.50)"}
                            color="whiteAlpha.900"
                            _hover={{bg: "green.600"}}
                            href="/registration"
                        >
                            Get Started
                        </Link>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"fit-content"}
                >
                    <Box
                        display={{base: "none", lg: "block"}}
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"300px"}
                        overflow={"hidden"}
                        style={{
                            transform: "rotate(20deg) translateY(-50px)",
                        }}
                        bgColor={"white"}
                        border={"10px solid white"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            rounded={"2xl"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={
                                "https://cdn.resfu.com/media/img_news/afp_en_96ab3e4d377b061dbfc0689b9c4b14079e85ecfa.jpg?size=1000x&lossy=1"
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
};
