import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Center>
      <Box>
        <Stack>
          <Box textAlign={"center"} width={"250px"} mb={2} height={"auto"}>
            <Text fontSize={"25px"}>{user?.nickname}</Text>
          </Box>
          <Box margin={2}>
            <Flex justify={"center"} width={"250px"} height={"auto"}>
              <Avatar
                size={"2xl"}
                src={
                  "data:image/jpeg;base64,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"
                }
              ></Avatar>
            </Flex>
          </Box>
          <Box pt={2}>
            <Center>
              <HStack>
                <Text fontWeight={"semibold"}>Fans Team:</Text>
                <Text>Vorskla,</Text>
                <Text>Ruh</Text>
              </HStack>
            </Center>
          </Box>
          <Box>
            <Center>
              <HStack>
                <EmailIcon />
                <Text>{user?.email}</Text>
              </HStack>
            </Center>
          </Box>
          <Box>
            <Center>
              <Box>
                <FormControl>
                  <Button
                    bgColor={"rgba(255, 255, 255, 0.25)"}
                    rounded={0}
                    size={"sm"}
                    _hover={{
                      bgColor: "rgba(255, 255, 255, 0.5)",
                      shadow: "md",
                    }}
                  >
                    Change email
                  </Button>
                </FormControl>
              </Box>
            </Center>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};
