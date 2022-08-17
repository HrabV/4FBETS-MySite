import {Box, Center, chakra, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden,} from "@chakra-ui/react";
import {FaInstagram, FaTelegram, FaViber, FaYoutube,} from "react-icons/fa";
import {FooterLogo} from "./footer/index";

const SocialButton = ({children, label, href}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={4}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.700"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export const Footer = () => {
    return (
        <Stack
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.50)",
            }}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Center>
                <Stack alignContent={"center"} maxW={"6xl"} spacing={4}>
                    <Stack
                        direction={"row"}
                        spacing={4}
                        justify={"center"}
                        align={"center"}
                    >
                        <FooterLogo/>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/news"}>News</Link>
                        <Link href={"/news"}>Sign in</Link>
                    </Stack>
                </Stack>
            </Center>
            <Box>
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    h={"10"}
                    direction={{base: "column", md: "row"}}
                    justify={{base: "center", md: "space-between"}}
                    align={{base: "center", md: "center"}}
                >
                    <Text>© 2022 Football Federation. All rights reserved</Text>
                    <Stack direction={"row"} spacing={4}>
                        <SocialButton label={"Instagram"} href={"#"}>
                            <FaViber/>
                        </SocialButton>
                        <SocialButton label={"Twitter"} href={"#"}>
                            <FaTelegram/>
                        </SocialButton>
                        <SocialButton label={"YouTube"} href={"#"}>
                            <FaYoutube/>
                        </SocialButton>
                        <SocialButton label={"Instagram"} href={"#"}>
                            <FaInstagram/>
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Stack>
    );
};
