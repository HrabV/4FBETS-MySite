import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setStatus } from "../../reducers/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const clearState = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (status === "ok") {
      clearState();
      dispatch(setStatus("idle"));
      navigate("/");
    }
  }, [status, navigate, dispatch]);

  return (
    <Container maxW={"6xl"}>
      <Stack minH={"max"} padding={5} direction={{ base: "column", md: "row" }}>
        <Grid gridTemplateColumns={"repeat(2, 1fr)"}>
          <GridItem>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Stack>
                  <Heading fontSize={"2xl"}>Sign in to your account</Heading>
                </Stack>
                {error && (
                  <Stack>
                    <p>{error}</p>
                  </Stack>
                )}
                <Box
                  as={"form"}
                  method={"post"}
                  onSubmit={submitHandler}
                  rounded={"0"}
                  boxShadow={"lg"}
                  p={6}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.50)",
                  }}
                >
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bgColor={"whiteAlpha.700"}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      bgColor={"whiteAlpha.700"}
                    />
                  </FormControl>
                  <Stack spacing={4}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                      pt={"2"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"green.500"} fontWeight={"bold"}>
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      type={"submit"}
                      colorScheme={"green"}
                      variant={"solid"}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flex={1}>
              <Box p={2} rounded={"3xl"} backgroundColor={"white"}>
                <Image
                  alt={"Login Image"}
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
