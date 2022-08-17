import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from ".";
import { Logo } from "../logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authSlice";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  const build = () => {
    const links = [
      { to: "/", content: "Home" },
      { to: "/news", content: "News" },
    ];

    if (user) {
      switch (user?.role) {
        case "admin":
          links.push({ to: "/admin", content: "Admin" });
          break;
        default:
          links.push({ to: "/profile", content: "Profile" });
          break;
      }
    } else {
      links.push(
        { to: "/login", content: "Sign in" },
        { to: "/registration", content: "Sign up" }
      );
    }

    return links;
  };

  return (
    <>
      <Box>
        <Flex
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.50)",
          }}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingX={"5"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Logo />

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {build().map((e, i) => (
                <NavLink to={e.to} key={i}>
                  {e.content}
                </NavLink>
              ))}
            </HStack>
            <Flex alignItems={"center"}>
              {user && (
                <Button
                  rounded={0}
                  py={"3"}
                  px={"6"}
                  color={"white"}
                  fontSize={"20px"}
                  _hover={{
                    textDecoration: "none",
                    shadow: "md",
                  }}
                  background={"rgba(255, 255, 255, 0.1)"}
                  shadow={"sm"}
                  mx={"3"}
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              )}
            </Flex>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box
            backgroundColor={"rgba(255, 255, 255, 0.50)"}
            pb={4}
            display={{ md: "none" }}
          >
            <Stack pl={2} color={"white"} as={"nav"} spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/news">News</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/registration">Sign up</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/profile">Profile</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
