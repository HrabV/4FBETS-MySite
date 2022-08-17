import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, signupUser } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const { status, error } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    nickname: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const onNicknameChanged = (e) =>
    setState((state) => ({ ...state, nickname: e.target.value }));
  const onEmailChanged = (e) =>
    setState((state) => ({ ...state, email: e.target.value }));
  const onPasswordChanged = (e) =>
    setState((state) => ({ ...state, password: e.target.value }));
  const onShowPasswordChanged = () =>
    setState((state) => ({ ...state, showPassword: !state.showPassword }));

  const clearState = () =>
    setState((state) => ({ ...state, nickname: "", email: "", password: "" }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      signupUser({
        nickname: state.nickname,
        email: state.email,
        password: state.password,
      })
    );
  };

  useEffect(() => {
    if (status === "ok") {
      clearState();
      dispatch(setStatus("idle"));
      navigate("/");
    }
  }, [status, navigate, dispatch]);

  return (
    <Container maxW={"7xl"}>
      <Stack
        minH={"max-content"}
        padding={2}
        direction={{ base: "column", md: "row" }}
      >
        <Grid gridTemplateColumns={"repeat(2, 1fr)"}>
          <GridItem>
            <Flex p={2} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={1}>
                <Stack mb={2} align={"center"}>
                  <Heading
                    color={"blackAlpha.700"}
                    fontSize={"xl"}
                    textAlign={"center"}
                  >
                    Sign up
                  </Heading>
                </Stack>
                {error && (
                  <Stack>
                    <p>{error}</p>
                  </Stack>
                )}
                <Box
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.50)",
                  }}
                  rounded={0}
                  boxShadow={"lg"}
                  p={4}
                  color={"blackAlpha.700"}
                >
                  <form onSubmit={onSubmit}>
                    <Stack spacing={1}>
                      <VStack>
                        <FormControl id="nickname" isRequired>
                          <FormLabel>Nickname</FormLabel>
                          <Input
                            name="nickname"
                            required={true}
                            value={state.nickname}
                            onChange={onNicknameChanged}
                            borderColor={"blackAlpha.300"}
                            type="text"
                            bgColor={"whiteAlpha.500"}
                          />
                        </FormControl>
                      </VStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          name="email"
                          value={state.email}
                          required={true}
                          onChange={onEmailChanged}
                          borderColor={"blackAlpha.300"}
                          type="email"
                          bgColor={"whiteAlpha.500"}
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            name="password"
                            required={true}
                            value={state.password}
                            onChange={onPasswordChanged}
                            type={
                              state.showPassword === true ? "text" : "password"
                            }
                            borderColor={"blackAlpha.300"}
                            bgColor={"whiteAlpha.500"}
                          />
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={onShowPasswordChanged}
                            >
                              {state.showPassword ? (
                                <ViewIcon />
                              ) : (
                                <ViewOffIcon />
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <Stack spacing={10} pt={2}>
                        <Button
                          type={"submit"}
                          loadingText="Submitting"
                          size="lg"
                          bg={"green.500"}
                          color={"white"}
                          _hover={{
                            bg: "green.700",
                          }}
                        >
                          Sign up
                        </Button>
                      </Stack>
                      <Stack pt={2}>
                        <Text align={"center"}>
                          Already a user?{" "}
                          <Link color={"green.400"} to={"/login"}>
                            Sign in
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </form>
                </Box>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flex={1}>
              <Box p={2} rounded={"3xl"} bgColor={"white"}>
                <Image
                  alt={"Registration Image"}
                  objectFit={"cover"}
                  rounded={"3xl"}
                  src={
                    "https://i.la-croix.com/1400x933/smart/2019/07/05/1201033571/football-feminin-quinstitution-produire-autre-systeme-valeurs-Non-puisque-largent-entre-danse_0.jpg"
                  }
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};
