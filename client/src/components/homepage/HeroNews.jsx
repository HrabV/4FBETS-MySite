import {Box, Container, Flex, Heading, Image, Link, Stack, Text,} from "@chakra-ui/react";

export const HeroNews = () => {
    return (
        <Container maxW={"container.xl"}>
            <Stack
                align={"center"}
                spacing={{base: 8, md: 10}}
                py={{base: 6, md: 18}}
                direction={{base: "column", md: "row"}}
            >
                <Stack flex={1} spacing={{base: 5, md: 10}}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{base: "3xl", sm: "4xl", lg: "6xl"}}
                    >
                        <Text as={"span"} position={"relative"}>
                            Football is an art!
                        </Text>
                        <br/>
                        <Text as={"span"} color={"green.400"} width={"full"}>
                            Football is more than a sport!
                        </Text>
                    </Heading>
                    <Text color={"white"} fontWeight={"medium"}>
                        4FBETS is about football of a wide range of topics created with the
                        support of the Football Federation. The priority of the site is
                        prompt and high-quality coverage of football news, submission of
                        exclusive interviews and analytical materials.
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
                            href="/news"
                        >
                            Read News
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
                    <Box display={{base: "none", lg: "block"}}>
                        <Box
                            position={"relative"}
                            height={"300px"}
                            rounded={"2xl"}
                            boxShadow={"2xl"}
                            width={"300px"}
                            overflow={"hidden"}
                            style={{
                                transform: "rotate(-15deg) translateY(-50px)",
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
                                    "https://alpes-holidays.com/wp-content/uploads/2022/06/Argentina-vs-Estonia-Football-Match-Report-June-5.jpg"
                                }
                            />
                        </Box>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
};
