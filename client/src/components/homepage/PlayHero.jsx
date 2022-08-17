import {Box, Container, Flex, Heading, Image, Link, Stack, Text,} from "@chakra-ui/react";

export const PlayHero = () => {
    return (
        <Container maxW={"container.xl"} mt={5} height={"max-content"}>
            <Stack
                align={"center"}
                spacing={{base: 8, md: 10}}
                py={{base: 6, md: 18}}
                direction={{base: "column", md: "row"}}
            >
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
                            top={1}
                            left={0}
                            zIndex={"1"}
                            height={"300px"}
                            rounded={"2xl"}
                            boxShadow={"2xl"}
                            width={"300px"}
                            overflow={"hidden"}
                            transform={{
                                base: "none",
                                lg: "rotate(-35deg) translate(-55px, -55px)",
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
                                    "https://i2-prod.manchestereveningnews.co.uk/incoming/article19226355.ece/ALTERNATES/s1200c/0_JS222243706.jpg"
                                }
                            />
                        </Box>
                        <Box
                            position={"relative"}
                            top={1}
                            left={0}
                            height={"300px"}
                            zIndex={"2"}
                            rounded={"2xl"}
                            boxShadow={"2xl"}
                            width={"300px"}
                            overflow={"hidden"}
                            transform={{
                                base: "none",
                                lg: "rotate(-8deg) translate(65px, -280px)",
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
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfaQVl6y7wonYE-_bXAAGzE8TQrz9vOLXlo0xBoxXP_keejy1TFhZ6Mlox2TW8deeWpE&usqp=CAU"
                                }
                            />
                        </Box>
                    </Box>
                </Flex>
                <Stack flex={1} spacing={{base: 5, md: 10}} alignSelf={"flex-start"}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{base: "2xl", sm: "3xl", lg: "5xl"}}
                    >
                        <Text as={"span"} position={"relative"}>
                            Football is just a game
                        </Text>
                        <br/>
                        <Text as={"span"} color={"green.400"} width={"full"}>
                            You win the ball, you pass, you score a goal
                        </Text>
                    </Heading>
                    <Text color={"white"} fontWeight={"medium"}>
                        Choose your fans teams to take part in Champions Cup to earn points
                        and win great prizes. Pick your Cup and make bets to win and fun.
                        Become a parts of 4FBETS an active parts of footballs world...
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
                            href="/profile"
                        >
                            Start to win
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
};
